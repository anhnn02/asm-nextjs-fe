/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./Product.module.scss";
import Icon from "@/components/Icon";
import Button from "@/components/Button";

const DetailProduct = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["grid"]}>
        <div>
          <img className="" src="https://i.imgur.com/hdxSFAS.png" />
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
        <form className={styles["container-text"]}>
          <h3 className={styles["grid-text"]}>Mi Note 11 Pro</h3>
          <div className={styles["grid-pad"]}>
            <span className={styles["grid-info"]}> Category: </span>
            <span>Ziaomi</span>
          </div>
          <div className={styles["grid-pad"]}>
            <span className={styles["grid-info"]}> Rated: </span>
            <Icon.StarFill />
            <Icon.StarFill />
            <Icon.StarFill />
            <Icon.StarFill />
          </div>
          <div className="">
            <p className={styles["grid-text-price"]}>$1135.00</p>
            <p className=""> Stok Available </p>
          </div>
          <div className={styles["check"]}>
            <span>Size: &nbsp; </span>
            <div className={styles["check-form"]}>
              <input type="Radio" className={styles["check-size"]} />
              <label htmlFor="">35</label>
            </div>
            <div className={styles["check-form"]}>
              <input type="Radio" className={styles["check-size"]} />
              <label htmlFor="">36</label>
            </div>
            <div className={styles["check-form"]}>
              <input type="Radio" className={styles["check-size"]} />
              <label htmlFor="">37</label>
            </div>
            <div className={styles["check-form"]}>
              <input type="Radio" className={styles["check-size"]} />
              <label htmlFor="">38</label>
            </div>
            <div className={styles["check-form"]}>
              <input type="Radio" className={styles["check-size"]} />
              <label htmlFor="">39</label>
            </div>
            <div className={styles["check-form"]}>
              <input type="Radio" className={styles["check-size"]} />
              <label htmlFor="">40</label>
            </div>
          </div>
          <div className={styles["number"]}>
            <Button.Transparent
              className={styles["number-iconnr"]}
              content={<Icon.PlusRegular />}
            />
            <Button.None content="1" />
            <Button.Transparent
              className={styles["number-iconnl"]}
              content={<Icon.Dash />}
            />
          </div>
          <Button.Fill className="tw-px-8" content={"Add to cart"} />
          <div className={styles["grid-heith"]}>
            <span className={styles["grid-info"]}> Sold By: </span>
            <span>Mobile Store</span>
          </div>
        </form>
      </div>
      <h1 className={styles["h1"]}>Description</h1>
      <div className={styles["desc"]}>
        <div className="">
          <p>Brand: Beats</p>
          <p>Model: S450</p>
          <p>Wireless Bluetooth Headset</p>
          <p> FM Frequency Response: 87.5 – 108 MHz</p>
          <p>Feature: FM Radio, Card Supported (Micro SD / TF)</p>
          <p>Made in China</p>
        </div>
      </div>
      <h1 className={styles["h1"]}>Realted Products</h1>
      <div className={styles["product"]}>
        <div className={styles["product-item"]}>abc</div>
        <div className={styles["product-item"]}>abc</div>
        <div className={styles["product-item"]}>abc</div>
        <div className={styles["product-item"]}>abc</div>
      </div>
    </div>
  );
};

export default DetailProduct;
