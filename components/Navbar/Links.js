import styles from "./Links.module.scss";

const Links = () => {
  return (
    <ul className={styles.links}>
      <li>About</li>
      <li>
        <button className={styles.publicationsBtn}>Publications</button>
      </li>
      <li>Transferencia</li>
      <li>Contact</li>
    </ul>
  );
};

export default Links;
