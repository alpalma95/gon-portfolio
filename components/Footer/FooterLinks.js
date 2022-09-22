import styles from "./FooterLinks.module.scss";

const FooterLinks = () => {
  return (
    <div className={styles.footerLinks}>
      <h3 className={styles.h3}>Quick Links</h3>
      <ul className={styles.links}>
        <li>
          <a href="https://www.inedyto.com/" target="_blank" rel="noreferrer">
            INEDyTO
          </a>
        </li>
        <li>
          <a href="https://www.ugr.es/" target="_blank" rel="noreferrer">
            UGR
          </a>
        </li>
        <li>
          <a
            href="http://wpd.ugr.es/~filolab/wordpress/en/"
            target="_blank"
            rel="noreferrer"
          >
            FiloLab
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FooterLinks;
