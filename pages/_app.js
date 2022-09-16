import Layout from "../components/Layout";
import Navbar from "../components/Navbar/Navbar";

import "../styles/resets.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Navbar />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
