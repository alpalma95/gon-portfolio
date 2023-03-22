import Head from "next/head";

import CardsTransfer from "../components/Transfer/CardsTransfer";
import AwardsSection from "../components/Transfer/Awards/AwardsSection";
import OtherSection from "../components/Transfer/Other/OtherSection";
import PillsTransfer from "../components/Transfer/PillsTransfer";

import { useContext, useEffect } from "react";
import { Context } from "../store/store";

import styles from "../styles/pages/transferencia.module.scss";

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cl8o8r4tn0mdg01tcgc4053pj/master",
    cache: new InMemoryCache(),
    defaultOptions: {
      query: {
        fetchPolicy: "no-cache",
      },
    },
  });

  const { data } = await client.query({
    query: gql`
      query MyQuery {
        transfers {
          card {
            title
            citation
            link
          }
        }
        awards {
          card {
            title
            citation
            link
          }
        }
      }
    `,
  });

  return {
    props: {
      transfers: data.transfers,
      awards: data.awards,
    },
    revalidate: 30,
  };
}

const Transfer = ({ transfers, awards }) => {
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
            <CardsTransfer transfers={transfers} />
          ) : store.showAwards ? (
            <AwardsSection awards={awards} />
          ) : (
            <OtherSection />
          )}
        </div>
      </main>
    </>
  );
};

export default Transfer;
