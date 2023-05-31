"use client";
import React, { useRef } from "react";
import styles from "./best-seller.module.scss";
import Image from "next/image";
import AirJordanOneMid from "./assets/AirJordanOneMid.png";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
const SHOES = [
  {
    name: "Air Jordan Mid",
    image: AirJordanOneMid,
  },
  {
    name: "",
    image: AirJordanOneMid,
  },
  {
    name: "",
    image: AirJordanOneMid,
  },
];
const BestSeller = () => {
  const horizontalScrollRef = useRef(null);
  const handleScrollHorizontal = (direction: "right" | "left") => {
    if (horizontalScrollRef.current) {
      const scrollContainer = horizontalScrollRef.current as HTMLElement;
      scrollContainer.scrollBy({
        left: 100,
        behavior: "smooth",
      });
      if (direction === "right") {
        scrollContainer.scrollLeft += 100;
      } else {
        scrollContainer.scrollLeft -= 100;
      }
    }
  };
  return (
    <section className={styles.root}>
      <div className={styles.text}>
        <h1>Our Best Sellers</h1>
        <p>
          Lorem Ipsum has been the industry&apos;s standard dummy text ever
          since the 1500s.Lorem Ipsum has been the industry&apos;s standard
        </p>
      </div>
      <RiArrowLeftSLine
        className={styles.arrowLeft}
        onClick={() => handleScrollHorizontal("left")}
        size={35}
      />
      <RiArrowRightSLine
        className={styles.arrowRight}
        onClick={() => handleScrollHorizontal("right")}
        size={35}
      />
      <div className={styles.list} ref={horizontalScrollRef}>
        {SHOES.map(({ name, image }, i) => (
          <div className={styles.card} key={i}>
            <Image
              className={styles.airJordanOneMid}
              src={image}
              alt="Air Jordan 1 Mid"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSeller;
