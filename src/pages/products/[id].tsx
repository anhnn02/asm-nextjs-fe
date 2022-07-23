/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from "./Product.module.scss";
import Icon from "@/components/Icon";



const DetailProduct = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["grid"]}>
        <div>
          <img
            className=""
            src="https://i.imgur.com/hdxSFAS.png"
          />
          <div className={styles["box"]}>
            <img
              className={styles["image"]}
              src="https://i.imgur.com/hdxSFAS.png"
            />
            <img
              className={styles["image"]}
              src="https://i.imgur.com/hdxSFAS.png"
            />
            <img
              className={styles["image"]}
              src="https://i.imgur.com/hdxSFAS.png"
            />
          </div>
        </div>
        <div>
          <h1 className={styles["grid-text"]}>Mi Note 11 Pro</h1>
          <div className="">
            <span className={styles["grid-info"]}> Brand: </span>
            <span>Ziaomi</span>
          </div>
          <div className="">
            <span className={styles["grid-info"]}> Rated: </span>
            <Icon.Star />
            <Icon.Star />
            <Icon.Star />
            <Icon.Star />
          </div>
          <div className="">
            <p className=""> Stok Available </p>
          </div>
          <p className={styles["grid-text-price"]}>$1135.00</p>
          <button className={styles["grid-button"]}>
            <span>Add to cart</span>
          </button>
          <div className={styles["grid-heith"]}>
            <span className={styles["grid-info"]}> Sold By: </span>
            <span>Mobile Store</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailProduct