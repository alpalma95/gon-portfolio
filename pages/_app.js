import Layout from "../components/Layout";
import Navbar from "../components/Navbar/Navbar";
import { Provider } from "../store/store";

import "../styles/resets.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Provider>
        <Navbar />
        <Component {...pageProps} />
      </Provider>
    </Layout>
  );
}

export default MyApp;
