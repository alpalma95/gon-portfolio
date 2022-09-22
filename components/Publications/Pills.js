import styles from "./Pills.module.scss";
import { useContext } from "react";
import { Context } from "../../store/store";

const Pills = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className={styles.pills}>
      <button
        className={`${styles.pillsBtn} ${
          store.showPublications ? styles.active : ""
        }`}
        onClick={actions.setShowPublications}
      >
        Publications
      </button>
      <button
        className={`${styles.pillsBtn} ${
          store.showConferences ? styles.active : ""
        }`}
        onClick={actions.setShowConferences}
      >
        Conferences
      </button>
    </div>
  );
};

export default Pills;
