import * as React from "react"
import styles from './UpArrow.module.scss'

const UpArrow = ({ onClick, color, style }) => (
  <svg
    className={styles[style]}
    width={42}
    height={11}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
  >
    <path
      d="M.647 8.368a2.5 2.5 0 0 1 1.768-3.062L20.183.545a2.105 2.105 0 0 1 2.578 1.489 2.895 2.895 0 0 1-2.047 3.545L3.71 10.135A2.5 2.5 0 0 1 .647 8.368Z"
      fill={color}
    />
    <path
      d="M40.863 8.368a2.5 2.5 0 0 0-1.767-3.062L21.328.545a2.105 2.105 0 0 0-2.579 1.489 2.895 2.895 0 0 0 2.047 3.545l17.005 4.556a2.5 2.5 0 0 0 3.062-1.767Z"
      fill={color}
    />
  </svg>
)

export default UpArrow