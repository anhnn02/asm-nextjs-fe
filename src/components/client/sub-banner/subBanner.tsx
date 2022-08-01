/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './SubBanner.module.scss'

type Props = {}

const SubBanner = (props: Props) => {
  return (
    <>
      <div className={styles["banner"]}>
        <div className={styles["banner01"]}> <span>
          <img src="https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanners%2Fbanner-1.png&w=1920&q=75" />
        </span>
        </div>
       <div className={styles["banner02"]}><span >
          <img src="https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanners%2Fbanner-2.png&w=1920&q=75" />
        </span>
        </div>
        
      </div>
    </>
  );
}

export default SubBanner