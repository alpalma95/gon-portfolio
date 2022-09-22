import Image from "next/image";

import newspaper from "../../public/assets/newspaper.png";
import profileBg from "../../public/assets/profile-bg.svg";

import styles from "./Card.module.scss";

const Card = ({ title, citation, link }) => {
  const linkToArticle = (
    <a href={link} target="_blank" rel="noreferrer">
      Link to article &rarr;
    </a>
  );
  return (
    <div className={styles.card}>
      <div className={styles.logo}>
        <div className={styles.image}>
          <Image src={newspaper} alt="dotted background" />
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

export default Card;
