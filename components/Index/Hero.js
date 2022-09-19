import Photo from "./Photo";
import ContactLinks from "./ContactLinks";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        <Photo />
        <ContactLinks />
      </div>
    </section>
  );
};

export default Hero;
