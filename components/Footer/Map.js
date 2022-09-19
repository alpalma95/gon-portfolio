import Image from "next/image";

import styles from "./Map.module.scss";

import andalusiaMap from "../../public/assets/mapAndalusia.png";

const Map = () => {
  return (
    <div className={styles.map}>
      <div className={styles.mapContainer}>
        <Image src={andalusiaMap} alt="map of Andalusia, Spain" />
      </div>
      <span className={styles.city}>
        <strong>Granada</strong>, Spain
      </span>
    </div>
  );
};

export default Map;
