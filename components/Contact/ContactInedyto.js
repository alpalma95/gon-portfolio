import Image from "next/image";

import photo from "../../public/assets/logoInedyto.png";
import styles from "./ContactInedyto.module.scss";

const ContactInedyto = () => {
  return (
    <section className={styles.contact}>
      <div className={styles.contactContainer}>
        <h1 className={styles.title}>
          INEDyTO II
          <span className={styles.titleSpan}>research group</span>
        </h1>
        <div className={styles.content}>
          <div className={styles.photo}>
            <Image src={photo} alt="Picture of Gonzalo" />
          </div>
          <div className={styles.links}>
            <ul>
              <li>
                <a href="mailto:inedyto2@ugr.es">
                  <span className={styles.icon}>
                    <i className="fa-solid fa-envelope"></i>
                  </span>
                  <span className={styles.text}>inedyto2@ugr.es</span>
                </a>
              </li>

              <li>
                <a
                  href="https://www.inedyto.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className={styles.icon}>
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </span>
                  <span className={styles.text}>www.inedyto.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/inedyto"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className={styles.icon}>
                    <i className="fa-brands fa-twitter"></i>
                  </span>
                  <span className={styles.text}>@inedyto</span>
                </a>
              </li>
              <li>
                <a
                  href="https://goo.gl/maps/xVi1xYyFJK6BAaPa6"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className={styles.icon}>
                    <i className="fa-solid fa-map-location-dot"></i>
                  </span>
                  <span className={`${styles.text} ${styles.newLine}`}>
                    Campus Universitario <br />
                    Cartuja, 18011, Granada
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInedyto;
