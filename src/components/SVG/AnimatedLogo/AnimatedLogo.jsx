import React from "react";
import { LOGO_TITLE } from "../../../assets/constants";
import styles from './AnimatedLogo.module.scss'

export const AnimatedLogo = () => {
  return (
    <div className={styles.animatedLogo}>
      <div className={styles.animatedLogo_title}>{LOGO_TITLE}</div>
      <div className={styles.animatedLogo_body}></div>
    </div>
  )
}