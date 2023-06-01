import Image from "next/image";
import Link from "next/link";
import Logo from "../nav/assets/logo.svg";
import styles from "./footer.module.scss";
const links = [
  {
    name: "Home",
    path: "#home",
  },
  {
    name: "Best Sellers",
    path: "#best-selelrs",
  },

  {
    name: "Product List",
    path: "#product-list",
  },
];
const Footer = () => {
  return (
    <footer className={styles.root}>
      <div className={styles.details}>
        <div className={styles.logoContainer}>
          <Image height={60} src={Logo} alt="logo" />
          <b>Sneak.</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
            ipsa. Officiis ipsum ullam deserunt ipsam vero cumque molestiae
            fugiat nemo.
          </p>
        </div>

        <div className={styles.linksContainer}>
          <h1>Quick Links</h1>
          <div className={styles.links}>
            {links.map(({ name, path }) => (
              <Link className={styles.link} href={path} key={name}>
                <p>{name}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.madeWith}>
        <div className={styles.hr} />
        <span className={styles.text}>made with love @ 2023</span>
        <div className={styles.hr} />
      </div>
    </footer>
  );
};

export default Footer;
