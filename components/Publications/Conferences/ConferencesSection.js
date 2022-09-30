import ConferencesCard from "./ConferencesCard";
import { useContext } from "react";
import { Context } from "../../../store/store";

import styles from "./ConferencesSection.module.scss";

const ConferencesSection = ({ conferences }) => {
  const { store, actions } = useContext(Context);

  return (
    <div
      className={`${styles.cardsSection} ${
        store.fadeConferences ? styles.cardsSectionFade : ""
      }`}
    >
      {conferences.map((x, i) => (
        <ConferencesCard
          key={i}
          title={x.card.title}
          citation={x.card.citation}
        />
      ))}
    </div>
  );
};

export default ConferencesSection;
