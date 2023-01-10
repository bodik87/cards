import { Categories } from "../Categories";
import { Content } from "../Content";
import { Header } from "../Header";
import styles from "./PageContainer.module.scss";

export const PageContainer = ({ children }) => {
  return (
    <div className={styles.pageContainer}>
      <Categories />
      <div className={styles.pageContainer_wrapper}>
        <Header />
        <Content>{children}</Content>
      </div>
    </div>
  );
};
