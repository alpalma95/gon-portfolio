import Image from "next/image";

import starImg from "../../../public/assets/star.png";
import profileBg from "../../../public/assets/profile-bg.svg";

import styles from "./OtherCard.module.scss";

const ConferencesCard = ({ title, citation, link }) => {
  const linkToArticle = (
    <a href={link} target="_blank" rel="noreferrer">
      Link to article &rarr;
    </a>
  );

  return (
    <div className={styles.card}>
      <div className={styles.logo}>
        <div className={styles.image}>
          <Image src={starImg} alt="star icon" />
          <div className={styles.bg}>
            <Image src={profileBg} alt="dotted background" />
          </div>
        </div>
      </div>

      <div className={styles.text}>
        <h2>{title}</h2>
        <p>
          {citation} {!link ? "" : linkToArticle}
        </p>
      </div>
    </div>
  );
};

export default ConferencesCard;
