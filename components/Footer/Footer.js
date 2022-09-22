import Image from "next/image";

import FooterLinks from "./FooterLinks";
import Map from "./Map";

import styles from "./Footer.module.scss";

import logoInedyto from "../../public/assets/logoInedyto.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <FooterLinks />

        <Map />
      </div>
      <span className={styles.signature}>
        Made with 💜 by{" "}
        <a
          href="https://alpalma95.github.io/portfolio/"
          target="_blank"
          rel="noreferrer"
        >
          Al
        </a>
      </span>
    </footer>
  );
};

export default Footer;
