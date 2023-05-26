import { ChildrenType } from "@/types";
import styles from "./layout.module.scss";

const ProductsLayout = ({ children }: ChildrenType) => {
  return <section className={styles.root}>{children}</section>;
};

export default ProductsLayout;
