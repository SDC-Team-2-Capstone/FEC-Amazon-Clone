import styles from './Zoom.module.css';

export default function Zoom(props) {
  return (
    <div
      className={styles.zoom}
      style={{
        top: `${props.zoomtop}px`,
        left: `${props.zoomleft + 10}px`,
        backgroundSize: '250%',
        backgroundImage: `url(./preview-images/${props.current}.jpg)`,
        backgroundPosition: `${props.x}% ${props.y}%`,
        backgroundRepeat: 'no-repeat',
        width: `calc(100vw + ${window.pageXOffset}px - ${props.zoomleft}px - 38px)`,
        height: `calc(100vh + ${window.pageYOffset}px - ${props.zoomtop}px - 10px)`,
        border: `1px solid #a2a6ac`,
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        zIndex: 5,
      }}
    ></div>
  );
}
