import styles from "./FooterLinks.module.scss";

const FooterLinks = () => {
  return (
    <div className={styles.footerLinks}>
      <h3 className={styles.h3}>Quick Links</h3>
      <ul className={styles.links}>
        <li>INEDyTO</li>
        <li>UGR</li>
        <li>Lo que quieras</li>
      </ul>
    </div>
  );
};

export default FooterLinks;
