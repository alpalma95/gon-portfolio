import Head from "next/head";

import Hero from "../components/Index/Hero";
import About from "../components/Index/About";
import Twitter from "../components/Index/Twitter";

import styles from "../styles/pages/index.module.scss";

import { useContext } from "react";
import { Context } from "../store/store";

export default function Home() {
  const { store, actions } = useContext(Context);

  return (
    <div className={styles.container}>
      <Head>
        <title>Gonzalo Díaz Cobacho</title>
        <meta name="description" content="Gonzalo Díaz Cobacho" />
        <link rel="icon" type="icon" sizes="32x32" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Hero />
        <About />
        <Twitter />
      </main>
    </div>
  );
}
