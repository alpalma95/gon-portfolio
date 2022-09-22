import AwardsCard from "./AwardsCard";
import { awardsContent } from "./awardsContent";
import { useContext } from "react";
import { Context } from "../../../store/store";

import styles from "./AwardsSection.module.scss";

const ConferencesSection = () => {
  const { store, actions } = useContext(Context);

  return (
    <div
      className={`${styles.cardsSection} ${
        store.fadeAwards ? styles.cardsSectionFade : ""
      }`}
    >
      {awardsContent.map((x, i) => (
        <AwardsCard key={i} title={x.title} citation={x.citation} />
      ))}
    </div>
  );
};

export default ConferencesSection;
