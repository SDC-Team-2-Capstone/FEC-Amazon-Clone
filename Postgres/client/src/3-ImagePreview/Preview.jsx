import { useState } from 'react';
import styles from './Preview.module.css';
import Icon from './prev-comps/Icon.jsx';
import Zoom from './prev-comps/Zoom.jsx';
import Info from './prev-comps/Info.jsx';

const imageList = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

export default function Preview(props) {
  const [list, setList] = useState(imageList);
  const [current, setCurrent] = useState('A');
  const [zooming, setZooming] = useState(false);
  const [zoomProps, setZoomProps] = useState({});

  function handleMouseMove(e) {
    let box = e.target.getBoundingClientRect();
    setZoomProps({
      x: (100 * (e.clientX - box.left)) / box.width,
      y: (100 * (e.clientY - box.top)) / box.height,
      zoomleft: box.right,
      zoomtop: box.top + window.pageYOffset,
    });
  }

  return (
    <div className={styles.previewCollumn}>
      <div className={styles['icon-collumn']}>
        {list.map((item) => {
          if (item === current) {
            return <Icon key={item} item={item} setCurrent={setCurrent} current={true} />;
          } else {
            return <Icon key={item} item={item} setCurrent={setCurrent} current={false} />;
          }
        })}
      </div>
      <div className={styles['main-preview']}>
        <img
          src={`./preview-images/${current}.jpg`}
          alt=""
          className={styles['main-preview-image']}
          onMouseMove={(e) => handleMouseMove(e)}
          onMouseEnter={() => setZooming(true)}
          onMouseLeave={() => setZooming(false)}
        />
        <div className={styles.rolloverText}>Roll over image to zoom in</div>
      </div>
      <Info />
      {/* <div style={{ minWidth: '200px' }}></div> */}
      {zooming && <Zoom current={current} {...zoomProps} />}
    </div>
  );
}
