import Head from "next/head";
import Image from "next/image";
import styles from "../styles/pages/index.module.scss";
import Link from "next/link";

import { useContext } from "react";
import { Context } from "../store/store";

export default function Home() {
  const { store, actions } = useContext(Context);

  return (
    <div className={styles.container}>
      <Head>
        <title>Gonzalo Díaz Cobacho</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <button onClick={actions.test}>Click me</button>
        <Link href="/publications">
          <button>To publications</button>
        </Link>
      </main>
    </div>
  );
}
