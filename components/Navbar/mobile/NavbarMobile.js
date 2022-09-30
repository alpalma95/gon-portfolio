import Image from "next/image";

import Links from "../Links";

import { useContext } from "react";
import { Context } from "../../../store/store";

import styles from "./NavbarMobile.module.scss";

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
            <i className="fa-solid fa-xmark"></i>
          ) : (
            <i className="fa-solid fa-bars"></i>
          )}
        </div>
        <Links />
      </div>
    </nav>
  );
};

export default NavbarMobile;
