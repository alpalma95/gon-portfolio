import Card from "../Publications/Card";

// import { transfer } from "./contentTransfer";
import { useContext } from "react";
import { Context } from "../../store/store";

import styles from "./CardsTransfer.module.scss";

const CardsTransfer = ({ transfers }) => {
  const { store, actions } = useContext(Context);

  return (
    <div
      className={`${styles.cardsSection} ${
        store.fadePublications ? styles.cardsSectionFade : ""
      }`}
    >
      {transfers.map((x, i) => (
        <Card
          key={i}
          title={x.card.title}
          citation={x.card.citation}
          link={x.card.link}
        />
      ))}
    </div>
  );
};

export default CardsTransfer;
