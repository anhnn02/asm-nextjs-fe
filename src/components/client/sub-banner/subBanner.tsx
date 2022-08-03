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
              src="https://theme.hstatic.net/200000386519/1000741676/14/categorybanner_1_img.jpg?v=6"
            />
          </span>
        </div>
        <div className={styles["banner02"]}>
          <span>
            <img
              className={styles["img2"]}
               src="https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanners%2Fbanner-2.png&w=1920&q=75"
            />
          </span>
        </div>
      </div>
    </>
  );
}

export default SubBanner