import styles from "./ContactLinks.module.scss";

const ContactLinks = () => {
  return (
    <div className={styles.contactLinksContainer}>
      <div className={styles.name}>
        <h1>Gonzalo Díaz Cobacho</h1>
        <h2>Bioethics PhD student</h2>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <a href="mailto:gdc@ugr.es" className={styles.link}>
            <i className="fa-solid fa-envelope"></i>
            <span>gdc@ugr.es</span>
          </a>
        </li>
        <li className={styles.link}>
          <a
            href="https://www.linkedin.com/in/gonzalo-d%C3%ADaz-cobacho-2297b8193/"
            target="_blank"
            rel="noreferrer"
            className={styles.link}
          >
            <i className="fa-brands fa-linkedin-in"></i>
            <span>Gonzalo Díaz Cobacho</span>
          </a>
        </li>
        <li className={styles.link}>
          <a
            href="https://www.researchgate.net/profile/Gonzalo-Diaz-Cobacho"
            target="_blank"
            rel="noreferrer"
            className={styles.link}
          >
            <i className="fa-brands fa-researchgate"></i>
            <span>Gonzalo Díaz-Cobacho</span>
          </a>
        </li>
        <li className={styles.link}>
          <a
            href="https://www.inedyto.com/"
            target="_blank"
            rel="noreferrer"
            className={styles.link}
          >
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
            <span>www.inedyto.com</span>
          </a>
        </li>
        <li className={styles.link}>
        <a
            href="https://scholar.google.com/citations?user=canOLOEAAAAJ&hl=es"
            target="_blank"
            rel="noreferrer"
            className={styles.link}
          >
            <i className="fa-brands fa-google"></i>
            <span>Gonzalo Díaz-Cobacho</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ContactLinks;
