import React from "react";
import { Link } from "react-router-dom";
import { path } from "../../path";
import styles from "./Notfoundpage.module.scss";

export const Notfoundpage = () => {
  return (
    <h1 className={styles.notfoundpage}>
      <Link to={path.home}>CARDS</Link>
      Page not found
    </h1>
  );
};
