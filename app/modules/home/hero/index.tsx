import styles from "./hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.root}>
      <strong className={styles.nikeDunk}>NIKE DUNK</strong>
      <strong className={styles.highRetro}>HIGH RETRO</strong>
    </div>
  );
};

export default Hero;
