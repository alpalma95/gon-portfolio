import Image from "next/image";

import awardImg from "../../../public/assets/award.png";
import profileBg from "../../../public/assets/profile-bg.svg";

import styles from "./AwardsCard.module.scss";

const AwardsCard = ({ title, citation }) => {
  return (
    <div className={styles.card}>
      <div className={styles.logo}>
        <div className={styles.image}>
          <Image src={awardImg} alt="dotted background" />
          <div className={styles.bg}>
            <Image src={profileBg} alt="dotted background" />
          </div>
        </div>
      </div>

      <div className={styles.text}>
        <h2>{title}</h2>
        <p>{citation}</p>
      </div>
    </div>
  );
};

export default AwardsCard;
