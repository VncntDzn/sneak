import Image from "next/image";
import { RiMenuFill } from "react-icons/ri";
import Basket from "./assets/basket.svg";
import Logo from "./assets/logo.svg";
import styles from "./nav.module.scss";

const Nav = () => {
  return (
    <nav className={styles.root}>
      <div>
        <RiMenuFill className={styles.burger} size={25} />
        <Image src={Logo} height={30} width={30} alt="Sneak logo" />
      </div>
      <Image src={Basket} height={30} width={30} alt="Basket" />
    </nav>
  );
};

export default Nav;
