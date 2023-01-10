import { Categories } from "../Categories";
import { Header } from "../Header";
import styles from "./PageContainer.module.scss";

export const PageContainer = ({ children }) => {
  return (
    <div className={styles.pageContainer}>
      <Categories />
      <div className={styles.pageContainer_wrapper}>
        <Header />
        {children}
      </div>
    </div>
  );
};
