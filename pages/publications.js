import Head from "next/head";

import CardsSection from "../components/Publications/CardsSection";
import ConferencesSection from "../components/Publications/Conferences/ConferencesSection";
import Pills from "../components/Publications/Pills";

import { useContext, useEffect } from "react";
import { Context } from "../store/store";

import styles from "../styles/pages/publications.module.scss";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: process.env.HG_URL,
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
        publications {
          card {
            title
            citation
            link
            date
          }
        }
        conferences {
          card {
            title
            citation
            link
            date
          }
        }
      }
    `,
  });

  data.publications.sort((a, b) => new Date(a.card.date) - new Date(b.card.date))
  data.conferences.sort((a, b) => new Date(a.card.date) - new Date(b.card.date))

  return {
    props: {
      publications: data.publications,
      conferences: data.conferences,
    },
    revalidate: 30,
  };
}

const Publications = ({ publications, conferences }) => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <Head>
        <title>Publications | Gonzalo Díaz Cobacho</title>
        <meta name="Publications" content="Publications and conferences" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${styles.main} ${store.fadeCurrent ? styles.mainFade : ""}`}
      >
        <div className={styles.container}>
          <h1 className={styles.h1}>Publications</h1>
          <h1 className={styles.h1Sub}>and Conferences</h1>
          <Pills />
          {store.showPublications ? (
            <CardsSection publications={publications} />
          ) : (
            <ConferencesSection conferences={conferences} />
          )}
        </div>
      </main>
    </>
  );
};

export default Publications;
