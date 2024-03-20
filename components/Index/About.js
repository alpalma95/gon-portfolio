import styles from "./About.module.scss";

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutTitle}>
          <h1>About me</h1>
        </div>
        <div className={styles.aboutParagraph}>
          <p className={styles.p}>
            I am Gonzalo Díaz Cobacho, I am currently studying for a PhD in
            philosophy in which I am researching issues related to pluralism and
            the determination of death. In addition, I am interested in other
            topics where ethics can play a key role such as end-of-life issues,
            Artificial Intelligence, conscientious objection and problems with
            vaccination.
          </p>

          <p className={styles.p}>
            I have a degree in Humanities from the University of Cadiz, a degree
            I finished in 2017. In addition, I hold a master&apos;s degree in
            Contemporary Philosophy from the University of Granada, which I
            finished in 2018. Complementarily, in 2019 I obtained a Diploma of
            Specialization in Bioethics by the Andalusian School of Public
            Health in which I researched on &quot;Pluralism in death&quot;. I
            have also received a research grant from the Grifols i Lucas
            Foundation and a research grant from the Banc Sabadell.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
