/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './SubBanner.module.scss'

type Props = {}

const SubBanner = (props: Props) => {
  return (
    <>
      <div className={styles["banner"]}>
        <div className={styles["banner01"]}>
          {" "}
          <span>
            <img
              className={styles["img1"]}
              src="https://banner.designer.com.vn/wp-content/uploads/2020/06/gi%C3%A0y-nike.jpg"
            />
          </span>
        </div>
        <div className={styles["banner02"]}>
          <span>
            <img
              className={styles["img2"]}
              src="http://file.hstatic.net/1000178110/file/banner_1200x628__copy__37ae887e552447b8b9bd2db3299b3139_grande.png"
            />
          </span>
        </div>
      </div>
    </>
  );
}

export default SubBanner