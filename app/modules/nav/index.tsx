"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { isMobileOnly } from "react-device-detect";
import { RiMenuFill } from "react-icons/ri";
import Basket from "./assets/basket.svg";
import Logo from "./assets/logo.svg";
import styles from "./nav.module.scss";
import routes from "./routes";

const Routes = () => {
  return (
    <div className={styles.links}>
      {routes.map(({ name, path }) => (
        <Link href={path} key={name} style={{ textDecoration: "none" }}>
          <span className={styles.link}>{name}</span>
        </Link>
      ))}
    </div>
  );
};

const Nav = () => {
  const [openMobileMenu, setMobileMenu] = useState(false);
  const handleToggleMenu = () => {
    setMobileMenu(!openMobileMenu);
  };

  const renderMobileMenu = () => {
    if (isMobileOnly) {
      return (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{
            x: `${openMobileMenu ? 0 : "-100%"}`,
          }}
          transition={{
            type: "tween",
          }}
          className={styles.drawer}
        >
          <RiMenuFill
            role="button"
            onClick={handleToggleMenu}
            className={styles.burger}
            size={25}
          />
          <div style={{ height: "10rem" }}>
            <Routes />
          </div>
        </motion.div>
      );
    }
    return (
      <div className={styles.desktopContainer}>
        <Routes />
      </div>
    );
  };
  return (
    <nav className={styles.root}>
      <div>
        <RiMenuFill
          role="button"
          onClick={handleToggleMenu}
          className={styles.burger}
          size={25}
        />
        <Image
          role="button"
          src={Logo}
          height={30}
          width={30}
          alt="Sneak logo"
        />
      </div>
      {renderMobileMenu()}
      <Image role="button" src={Basket} height={30} width={30} alt="Basket" />
    </nav>
  );
};

export default Nav;
