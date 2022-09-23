import Link from "next/link";
import Router from "next/router";
import { useContext } from "react";

import { Context } from "../../store/store";
import styles from "./Links.module.scss";

const Links = () => {
  const { store, actions } = useContext(Context);

  const navigationHandler = (e, route) => {
    e.preventDefault();
    actions.setFadeCurrentTrue();
    if (store.navbarOpen) actions.setFadeLinks();

    setTimeout(() => {
      Router.push(route);

      setTimeout(() => {
        actions.setFadeCurrentFalse();
        actions.closeNavbar();
      }, 100);
    }, 200);
  };

  return (
    <ul
      className={`${styles.links} ${
        store.navbarOpen && store.fadeLinks ? styles.linksFade : ""
      }`}
    >
      <li>
        <Link href="/">
          <a
            onClick={(e) => {
              navigationHandler(e, "/");
            }}
          >
            About
          </a>
        </Link>
      </li>
      <li>
        <Link href="/publications">
          <a
            className={styles.publicationsBtn}
            onClick={(e) => {
              navigationHandler(e, "/publications");
            }}
          >
            Publications
          </a>
        </Link>
      </li>
      <li>
        <Link href="/transfer">
          <a
            onClick={(e) => {
              navigationHandler(e, "/transfer");
            }}
          >
            Transfer
          </a>
        </Link>
      </li>
      <li>
        <Link href="/contact">
          <a
            onClick={(e) => {
              navigationHandler(e, "/contact");
            }}
          >
            Contact
          </a>
        </Link>
      </li>
    </ul>
  );
};

export default Links;
