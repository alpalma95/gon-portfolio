import Card from "./Card";

import { publications } from "./content";
import { useContext } from "react";
import { Context } from "../../store/store";

import styles from "./CardsSection.module.scss";

const CardsSection = () => {
  const { store, actions } = useContext(Context);

  return (
    <div
      className={`${styles.cardsSection} ${
        store.fadePublications ? styles.cardsSectionFade : ""
      }`}
    >
      {publications.map((x, i) => (
        <Card key={i} title={x.title} citation={x.citation} />
      ))}
    </div>
  );
};

export default CardsSection;
