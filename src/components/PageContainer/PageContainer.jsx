import React from "react";
import { ControlPanel } from "../ControlPanel";
import styles from "./PageContainer.module.scss";

export const PageContainer = ({ children }) => {
  return (
    <div className={styles.pageContainer}>
      <ControlPanel />
      <div className={styles.pageContainer_wrapper}>{children}</div>
    </div>
  );
};
