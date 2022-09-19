import styles from "./DecorationCircle.module.scss";

const DecorationCircle = ({ position }) => {
  const circlePosition = position === "top" ? styles.top : styles.bottom;

  return <div className={`${styles.circle} ${circlePosition}`}></div>;
};

export default DecorationCircle;
