import Image from "next/image";
import Nike1 from "./assets/Nike1.png";
import Ellipse from "./assets/ellipse.svg";
import styles from "./hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.root}>
      <strong className={styles.nikeDunk}>NIKE DUNK</strong>
      <strong className={styles.highRetro}>HIGH RETRO</strong>
      <div className={styles.heroContainer}>
        <Image src={Ellipse} alt="Ellipse" height={250} />
        <Image className={styles.heroImage} src={Nike1} alt="Nike" />
      </div>
      <div className={styles.buttons}>
        <button className={styles.buyNowBtn}>Buy Now</button>
        <button className={styles.detailsBtn}>Details</button>
      </div>
    </div>
  );
};

export default Hero;
