import Image from "next/image";

import styles from "./Photo.module.scss";

import ProfilePic from "../../public/assets/profile-pic.svg";
import ProfileBg from "../../public/assets/profile-bg.svg";

const Photo = () => {
  return (
    <div className={styles.photoContainer}>
      <div className={styles.photoContainerImg}>
        <Image src={ProfilePic} alt="Photo of Gonzalo Díaz Cobacho" />
      </div>
      <div className={styles.photoContainerBg}>
        <Image src={ProfileBg} alt="Dotted background" />
      </div>
    </div>
  );
};

export default Photo;
