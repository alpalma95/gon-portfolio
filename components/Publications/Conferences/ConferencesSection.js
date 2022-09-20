import ConferencesCard from "./ConferencesCard";
import { conferences } from "./conferencesContent";
import { useContext } from "react";
import { Context } from "../../../store/store";

import styles from "./ConferencesSection.module.scss";

const ConferencesSection = () => {
  const { store, actions } = useContext(Context);

  return (
    <div
      className={`${styles.cardsSection} ${
        store.fadeConferences ? styles.cardsSectionFade : ""
      }`}
    >
      {conferences.map((x, i) => (
        <ConferencesCard key={i} title={x.title} citation={x.citation} />
      ))}
    </div>
  );
};

export default ConferencesSection;
