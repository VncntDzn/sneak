import Image from "next/image";
import Hands from "./assets/hands.jpg";
import Kids from "./assets/kids.jpg";
import Shoes from "./assets/shoes.png";
import Shorts from "./assets/short.jpg";
import styles from "./product-list.module.scss";

const ProductList = () => {
  return (
    <section className={styles.root}>
      <div className={styles.text}>
        <h1>Product List</h1>
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s.Lorem Ipsum has been the industry's standard
        </p>
      </div>

      <div className={styles.photoLayout}>
        <div className={styles.div1}>
          <Image className={styles.hoodie} src={Hands} alt="Hoodie" />
        </div>
        <div className={styles.div2}>
          <Image className={styles.shoes} src={Shoes} alt="Shoes" />
        </div>
        <div className={styles.div3}>
          <Image className={styles.shorts} src={Shorts} alt="Shorts" />
        </div>
        <div className={styles.div4}>
          <Image className={styles.kids} src={Kids} alt="Shorts" />
        </div>
      </div>
    </section>
  );
};

export default ProductList;
