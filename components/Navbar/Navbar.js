import Logo from "./Logo";
import Links from "./Links";

import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <Logo />
        <Links />
      </div>
    </nav>
  );
};

export default Navbar;
