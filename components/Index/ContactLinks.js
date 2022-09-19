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
          <i className="fa-solid fa-envelope"></i>
          <span>elPutoAmo@ugr.es</span>
        </li>
        <li className={styles.link}>
          <i className="fa-brands fa-linkedin-in"></i>
          <span>Gonzalo Díaz Cobacho</span>
        </li>
        <li className={styles.link}>
          <i className="fa-brands fa-researchgate"></i>
          <span>Gonzalo Díaz-Cobacho</span>
        </li>
        <li className={styles.link}>
          <i className="fa-solid fa-arrow-up-right-from-square"></i>
          <span>www.inedyto.com</span>
        </li>
      </ul>
    </div>
  );
};

export default ContactLinks;
