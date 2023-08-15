import Image from "next/image";

import photo from "../../public/assets/profile-pic.svg";
import styles from "./ContactGon.module.scss";

const ContactGon = () => {
  return (
    <section className={styles.contact}>
      <div className={styles.contactContainer}>
        <h1 className={styles.title}>
          Contact
          <span className={styles.titleSpan}>personal info</span>
        </h1>
        <div className={styles.content}>
          <div className={styles.photo}>
            <Image src={photo} alt="Picture of Gonzalo" />
          </div>
          <div className={styles.links}>
            <ul>
              <li>
                <a href="mailto:gdc@ugr.es">
                  <span className={styles.icon}>
                    <i className="fa-solid fa-envelope"></i>
                  </span>
                  <span className={styles.text}>gdc@ugr.es</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/gonzalo-d%C3%ADaz-cobacho-2297b8193/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className={styles.icon}>
                    <i className="fa-brands fa-linkedin-in"></i>
                  </span>
                  <span className={styles.text}>Gonzalo Díaz Cobacho</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.researchgate.net/profile/Gonzalo-Diaz-Cobacho"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className={styles.icon}>
                    <i className="fa-brands fa-researchgate"></i>
                  </span>
                  <span className={styles.text}>Gonzalo Díaz-Cobacho</span>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/GonzoDiCo"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className={styles.icon}>
                    <i className="fa-brands fa-twitter"></i>
                  </span>
                  <span className={styles.text}>@GonzoDiCo</span>
                </a>
              </li>
              <li className={styles.link}>
                <a
                  href="https://scholar.google.com/citations?user=canOLOEAAAAJ&hl=es"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className={styles.icon}>
                    <i className="fa-brands fa-google"></i>
                  </span>
                  <span className={styles.text}>Gonzalo Díaz-Cobacho</span>
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
