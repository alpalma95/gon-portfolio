import OtherCard from "./OtherCard";
import { otherContent } from "./otherContent";
import { useContext } from "react";
import { Context } from "../../../store/store";

import styles from "./OtherSection.module.scss";

const OtherSection = () => {
  const { store, actions } = useContext(Context);

  return (
    <div
      className={`${styles.cardsSection} ${
        store.fadeOther ? styles.cardsSectionFade : ""
      }`}
    >
      {otherContent.map((x, i) => (
        <OtherCard key={i} title={x.title} citation={x.citation} />
      ))}
    </div>
  );
};

export default OtherSection;
