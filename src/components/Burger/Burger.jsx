import React from "react"
import styles from './Burger.module.scss'

export const Burger = ({ onClick }) => (
  <div className={styles.burger}>
    <svg
      width={30}
      height={23}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M30 2.5A2.5 2.5 0 0 0 27.5 0h-25a2.5 2.5 0 0 0 0 5h25A2.5 2.5 0 0 0 30 2.5ZM30 11.5A2.5 2.5 0 0 0 27.5 9h-25a2.5 2.5 0 0 0 0 5h25a2.5 2.5 0 0 0 2.5-2.5ZM30 20.5a2.5 2.5 0 0 0-2.5-2.5h-25a2.5 2.5 0 0 0 0 5h25a2.5 2.5 0 0 0 2.5-2.5Z"
        fill="#5198AE"
      />
    </svg>
  </div>
)