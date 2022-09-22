import Head from "next/head";

import ContactGon from "../components/Contact/ContactGon";
import ContactInedyto from "../components/Contact/ContactInedyto";

import styles from "../styles/pages/contact.module.scss";

import { useContext, useEffect } from "react";
import { Context } from "../store/store";

const Contact = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <Head>
        <title>Contact | Gonzalo Díaz Cobacho</title>
        <meta name="description" content="Gonzalo Díaz Cobacho" />
        <link rel="icon" type="icon" sizes="32x32" href="/favicon.ico" />
      </Head>

      <main
        className={`${styles.main} ${store.fadeCurrent ? styles.mainFade : ""}`}
      >
        <ContactGon />
        <ContactInedyto />
      </main>
    </>
  );
};

export default Contact;
