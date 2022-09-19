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
        <div className={styles.footerLogo}>
          <Image src={logoInedyto} alt="logo of Inedyto research group" />
        </div>
        <Map />
      </div>
    </footer>
  );
};

export default Footer;
