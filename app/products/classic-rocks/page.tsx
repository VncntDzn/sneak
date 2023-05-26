import AirJordan from "@/modules/home/best-seller/assets/AirJordanOneMid.png";
import Image, { StaticImageData } from "next/image";
import styles from "./class-rocks.module.scss";
interface DataTypes {
  name: string;
  image: StaticImageData;
  description: string;
  price: Number;
  category: "Men" | "Women" | "Kids";
}
const data: DataTypes[] = [
  {
    name: "Nike Blazer Low '77 Vintage",
    image: AirJordan,
    description: "",
    price: 123,
    category: "Men",
  },
  {
    name: "Nike Dunk High Retro Premium",
    image: AirJordan,
    description: "",
    price: 123,
    category: "Men",
  },
];
const page = () => {
  return (
    <div className={styles.root}>
      {Array.from({ length: 3 }).map((_, index) =>
        data.map(({ name, image, description, price, category }, id) => (
          <div className={styles.card} key={id + index * data.length}>
            <Image className={styles.image} src={image} alt={name} />
            <strong>{name}</strong>
            <p>{category}&apos; shoes</p>
            <small>₱&nbsp;{price}</small>
          </div>
        ))
      )}
    </div>
  );
};

export default page;
