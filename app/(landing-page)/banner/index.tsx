import React from "react";
import styles from "./banner.module.scss";
const BRANDS = ["NIKE", "UNDER ARMOUR", "ADIDAS", "NEW BALANCE", "REEBOK"];
const Banner = () => {
  return (
    <div className={styles.root}>
      {BRANDS.map((brand) => (
        <h4 key={brand}>{brand}</h4>
      ))}
    </div>
  );
};

export default Banner;
