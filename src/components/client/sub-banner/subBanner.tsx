/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './SubBanner.module.scss'

type Props = {}

const SubBanner = (props: Props) => {
  return (
    <>
      <div className={styles["banner"]}>
        <div className={styles["banner01"]}>
          <span>
            <img
              className={styles["img1"]}
              src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
            />
          </span>
        </div>
        <div className={styles["banner02"]}>
          <span>
            <img
              className={styles["img2"]}
              src="https://images.unsplash.com/photo-1511556532299-8f662fc26c06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            />
          </span>
        </div>
      </div>
    </>
  );
}

export default SubBanner