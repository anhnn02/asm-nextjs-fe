import React from 'react'
import styles from './Loading.module.scss'

const Loading = () => {
  return (
      <div className={styles["dots"]}>
          <div></div>
          <div></div>
          <div></div>
      </div>
  )
}

export default Loading