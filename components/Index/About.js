import DecorationCircle from "./About/DecorationCircle";

import styles from "./About.module.scss";

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutTitle}>
          <DecorationCircle position={"top"} />
          <h1>About me</h1>
        </div>
        <div className={styles.aboutParagraph}>
          <p className={styles.p}>
            <strong>Lorem ipsum dolor</strong> sit amet consectetur, adipisicing
            elit. Ducimus consectetur voluptas alias laudantium iusto temporibus
            repudiandae perferendis illo tempora commodi nobis magni labore
            vitae explicabo, iure, neque adipisci mollitia repellat accusamus,
            beatae quam asperiores? Perspiciatis minus nisi voluptatum repellat!
            Autem sequi, delectus, asperiores quas architecto voluptas
            exercitationem obcaecati molestiae odit voluptates voluptatibus aut
            facere earum, laboriosam nesciunt deleniti iste nam?
          </p>

          <p className={styles.p}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
            cupiditate facere provident incidunt, atque repellat omnis
            temporibus non sequi voluptates quis vel iure error nam porro sit
            amet iusto tenetur fugiat quos quisquam. Neque officia optio
            laudantium provident placeat a nostrum, vero reprehenderit expedita
            quod omnis saepe accusantium inventore debitis cupiditate quibusdam.
            Asperiores veritatis, aut maiores deleniti laboriosam error vero?
            <DecorationCircle position="bottom" />
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
