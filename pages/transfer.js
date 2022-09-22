import Head from "next/head";

import CardsTransfer from "../components/Transfer/CardsTransfer";
import AwardsSection from "../components/Transfer/Awards/AwardsSection";
import OtherSection from "../components/Transfer/Other/OtherSection";
import PillsTransfer from "../components/Transfer/PillsTransfer";

import { useContext, useEffect } from "react";
import { Context } from "../store/store";

import styles from "../styles/pages/transferencia.module.scss";

const Transfer = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <Head>
        <title>Transfer | Gonzalo Díaz Cobacho</title>
        <meta name="description" content="Transfer and awards section" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${styles.main} ${store.fadeCurrent ? styles.mainFade : ""}`}
      >
        <div className={styles.container}>
          <h1 className={styles.h1}>Transfer</h1>
          <h1 className={styles.h1Sub}>&amp; other Awards</h1>
          <PillsTransfer />
          {store.showTransfer ? (
            <CardsTransfer />
          ) : store.showAwards ? (
            <AwardsSection />
          ) : (
            <OtherSection />
          )}
        </div>
      </main>
    </>
  );
};

export default Transfer;
