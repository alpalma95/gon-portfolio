import styles from "./Twitter.module.scss";

const Twitter = () => {
  return (
    <section className={styles.twitter}>
      <div className={styles.twitterContainer}>
        <h2 className={styles.twitterH2}>Follow me!</h2>
        <span className={styles.twitterArrow}>
          <i className="fa-solid fa-angles-down"></i>
        </span>
        <div className={styles.userContainer}>
          <i className="fa-brands fa-twitter"></i>
          <span>@GonzoDiCo</span>
        </div>
      </div>
    </section>
  );
};

export default Twitter;
