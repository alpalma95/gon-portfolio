import Image from "next/image";

import logo from "../../public/assets/logo.png";

import styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <Image
        src={logo}
        alt="Picture of realistic heart within a circle"
        width={48}
        height={48}
      />
      <span className={styles.initials}>GDC</span>
    </div>
  );
};

export default Logo;
