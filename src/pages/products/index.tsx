import Button from "@/components/Button";
import Icon from "@/components/Icon";
import React from "react";
import styles from "./Product.module.scss";

const ProductPage = () => {
  return (
    <div className={styles["demo1"]}>
      ProductPage
      <Button.Fill content={"Detail"} />
      <Button.Fill content={<Icon.Location />} />
      <Button.Fill content={ <Icon.Location />} />
      <Icon.PlusRegular />


      <div className="">
        
      </div>
    </div>
  );
};

export default ProductPage;
