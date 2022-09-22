import Card from "../Publications/Card";

import { transfer } from "./contentTransfer";
import { useContext } from "react";
import { Context } from "../../store/store";

import styles from "./CardsTransfer.module.scss";

const CardsTransfer = () => {
  const { store, actions } = useContext(Context);

  return (
    <div
      className={`${styles.cardsSection} ${
        store.fadePublications ? styles.cardsSectionFade : ""
      }`}
    >
      {transfer.map((x, i) => (
        <Card key={i} title={x.title} citation={x.citation} link={x.link} />
      ))}
    </div>
  );
};

export default CardsTransfer;
