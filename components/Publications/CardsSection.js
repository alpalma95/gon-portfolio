import Card from "./Card";

// import { publications } from "./content";
import { useContext } from "react";
import { Context } from "../../store/store";

import styles from "./CardsSection.module.scss";

const CardsSection = ({ publications }) => {
  const { store, actions } = useContext(Context);

  return (
    <div
      className={`${styles.cardsSection} ${
        store.fadePublications ? styles.cardsSectionFade : ""
      }`}
    >
      {publications.map((x, i) => (
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

export default CardsSection;
