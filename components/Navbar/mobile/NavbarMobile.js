import Image from "next/image";

import Links from "../Links";

import { useContext } from "react";
import { Context } from "../../../store/store";

import styles from "./NavbarMobile.module.scss";
import logo from "../../../public/assets/logo.png";
import cross from "../../../public/assets/cross.svg";

const NavbarMobile = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav
      className={`${styles.navbarMobile} ${
        store.navbarOpen ? styles.navbarMobileOpen : ""
      }`}
    >
      <div className={styles.navbarMobileContainer}>
        <div className={styles.toggle} onClick={actions.setNavbarOpen}>
          {store.navbarOpen ? (
            <Image src={cross} alt="realistic heart within a circle" />
          ) : (
            <Image src={logo} alt="realistic heart within a circle" />
          )}
        </div>
        <Links />
      </div>
    </nav>
  );
};

export default NavbarMobile;
