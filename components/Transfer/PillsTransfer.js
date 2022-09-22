import styles from "./PillsTransfer.module.scss";
import { useContext } from "react";
import { Context } from "../../store/store";

const PillsTransfer = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className={styles.pills}>
      <button
        className={`${styles.pillsBtn} ${
          store.showTransfer ? styles.active : ""
        }`}
        onClick={actions.setShowTransfer}
      >
        Transfer
      </button>
      <button
        className={`${styles.pillsBtn} ${
          store.showAwards ? styles.active : ""
        }`}
        onClick={actions.setShowAwards}
      >
        Awards
      </button>
      <button
        className={`${styles.pillsBtn} ${store.showOther ? styles.active : ""}`}
        onClick={actions.setShowOther}
      >
        Other
      </button>
    </div>
  );
};

export default PillsTransfer;
