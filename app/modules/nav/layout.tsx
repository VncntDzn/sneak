import { ChildrenType } from "@/app/types";
import styles from "./layout.module.scss";

const NavLayout = ({ children }: ChildrenType) => {
  return <nav className={styles.root}>{children}</nav>;
};

export default NavLayout;
