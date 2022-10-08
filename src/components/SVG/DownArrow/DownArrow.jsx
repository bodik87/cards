import * as React from "react"
import styles from './DownArrow.module.scss'

const DownArrow = ({ onClick, color, style }) => (
  <svg
    className={styles[style]}
    width={42}
    height={11}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
  >
    <path
      d="M.647 2.415a2.5 2.5 0 0 0 1.768 3.062l17.768 4.76A2.105 2.105 0 0 0 22.76 8.75a2.895 2.895 0 0 0-2.047-3.545L3.71.647A2.5 2.5 0 0 0 .647 2.415Z"
      fill={color}
    />
    <path
      d="M40.863 2.415a2.5 2.5 0 0 1-1.767 3.062l-17.768 4.76a2.105 2.105 0 0 1-2.579-1.488 2.895 2.895 0 0 1 2.047-3.545L37.801.647a2.5 2.5 0 0 1 3.062 1.768Z"
      fill={color}
    />
  </svg>
)

export default DownArrow