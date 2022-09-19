import Link from "next/link";

import styles from "./Links.module.scss";

const Links = () => {
  return (
    <ul className={styles.links}>
      <li>
        <Link href="/">About</Link>
      </li>
      <li>
        <Link href="/publications">
          <button className={styles.publicationsBtn}>Publications</button>
        </Link>
      </li>
      <li>
        <Link href="/transfer">Transferencia</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
    </ul>
  );
};

export default Links;
