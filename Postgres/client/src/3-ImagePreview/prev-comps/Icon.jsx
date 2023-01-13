import styles from './Icon.module.css';

export default function Icon(props) {
  function handleMouseEnter() {
    props.setCurrent(props.item);
  }
  return (
    <div
      onMouseEnter={handleMouseEnter}
      className={props.current ? styles.IconHovered : styles.Icon}
      style={{ backgroundImage: `URL(./preview-images/${props.item}.jpg)` }}
    ></div>
  );
}
