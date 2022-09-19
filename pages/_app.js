import Head from "next/head";

import Layout from "../components/Layout";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Provider } from "../store/store";

import "../styles/resets.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
          integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Head>
      <Provider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </Layout>
  );
}

export default MyApp;
