import Image from "next/image";

import photo from "../../public/assets/profile-pic.svg";
import styles from "./ContactGon.module.scss";

const ContactGon = () => {
  return (
    <section className={styles.contact}>
      <div className={styles.contactContainer}>
        <h1>
          Contact
          <span>personal info</span>
        </h1>
        <div className={styles.content}>
          <div className={styles.photo}>
            <Image src={photo} alt="Picture of Gonzalo" />
          </div>
          <div className={styles.links}>
            <h2>Gonzalo Díaz Cobacho</h2>
            <ul>
              <li>
                <a href="#">
                  <span className={styles.icon}>icon</span>
                  <span className={styles.text}>elPutoAmo@ugr.es</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className={styles.icon}>icon</span>
                  <span className={styles.text}>Gonzalo Díaz Cobacho</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className={styles.icon}>icon</span>
                  <span className={styles.text}>Gonzalo Díaz-Cobacho</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className={styles.icon}>icon</span>
                  <span className={styles.text}>@GonzoDiCo</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactGon;
