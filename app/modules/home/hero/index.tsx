import Image from "next/image";
import Nike1 from "./assets/ND_HighRetro.png";
import Ellipse from "./assets/ellipse.svg";
import styles from "./hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.root}>
      <div className={styles.textContainer}>
        <strong className={styles.nikeDunk}>NIKE DUNK</strong>
        <strong className={styles.highRetro}>HIGH RETRO</strong>
      </div>
      <div className={styles.heroContainer}>
        <Image className={styles.ellipse} src={Ellipse} alt="Ellipse"/>
        <Image
          className={styles.nikeImage}
          quality={100}
          src={Nike1}
          alt="Nike"
        />
      </div>
      <div className={styles.buttons}>
        <button className={styles.buyNowBtn}>Buy Now</button>
        <button className={styles.detailsBtn}>Details</button>
      </div>
    </div>
  );
};

export default Hero;
