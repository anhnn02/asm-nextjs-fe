import React from "react";
import Button from "@/components/Button";
import LayoutAdmin from "@/components/Layout/admin";
import styles from "./Invoice.module.scss";

type Props = {};

const DetailInvoice = (props: Props) => {
  return (
    <div>
      <div className={styles["invoice"]}>
        <div className={styles["tab1"]}>
          <div className="tw-pt-4">
            <span className="tw-text-my-gray">Order ID:</span> 9001997718074513
          </div>
          <div className="">
            <span className="tw-text-my-gray">Product ID:</span>{" "}
            9001997718074513
          </div>
          <div className="">
            <span className="tw-text-my-gray">Delivered on:</span> 27 Jul, 2022
          </div>
        </div>
        <div className="">
          <div className={styles["tab-img"]}>
            <div className="tw-flex tw-space-x-5 ">
              <div className="">
                <img width={70} src="https://i.imgur.com/VPUCDBi.png" alt="" />
              </div>
              <div className="">
                <h6>Premium Grocery Collection</h6>
                <span className="tw-text-my-gray">$250 x 1</span>
              </div>
            </div>
            <div className="">
              <span className="tw-text-my-gray">
                Product properties: Black, L
              </span>
            </div>
            <div className="">
              <Button.Transparent content={"Write A Review"} />
            </div>
          </div>
          <div className={styles["insite"]}>
            <div className="tw-flex tw-space-x-5 ">
              <div className="">
                <img width={70} src="https://i.imgur.com/VPUCDBi.png" alt="" />
              </div>
              <div className="">
                <h6>Premium Grocery Collection</h6>
                <span className="tw-text-my-gray">$250 x 1</span>
              </div>
            </div>
            <div className="">
              <span className="tw-text-my-gray">
                Product properties: Black, L
              </span>
            </div>
            <div className="">
              <Button.Transparent content={"Write A Review"} />
            </div>
          </div>
          <div className={styles["insite1"]}>
            <div className="tw-flex tw-space-x-5 ">
              <div className="">
                <img width={70} src="https://i.imgur.com/VPUCDBi.png" alt="" />
              </div>
              <div className="">
                <h6>Premium Grocery Collection</h6>
                <span className="tw-text-my-gray">$250 x 1</span>
              </div>
            </div>
            <div className="">
              <span className="tw-text-my-gray">
                Product properties: Black, L
              </span>
            </div>
            <div className="">
              <Button.Transparent content={"Write A Review"} />
            </div>
          </div>
        </div>
      </div>
      <div className="tw-flex tw-gap-6 tw-my-6 tw-mx-5">
        <div className={styles["tab2"]}>
          <span className="tw-block tw-font-medium tw-text-xl">
            Shipping Address
          </span>
          <span>Kelly Williams 777 Brockton Avenue, Abington MA 2351</span>
        </div>
        <div className={styles["tab2"]}>
          <span className=" tw-font-medium  tw-text-xl">Total Summary</span>
          <div className="">
            <div className="tw-pt-4 tw-flex  tw-justify-between">
              <span className="tw-text-my-gray">Subtotal:</span> $335
            </div>
            <div className="tw-pt-4 tw-flex  tw-justify-between">
              <span className="tw-text-my-gray">Shipping fee:</span> $10
            </div>
            <div className="tw-pt-4 tw-flex  tw-justify-between">
              <span className="tw-text-my-gray">Discount:</span> -$30
            </div>
          </div>
          <hr />
          <div className="tw-pt-4 tw-flex  tw-justify-between">
            <span className="tw-font-medium  tw-text-base tw-pb-4">Total</span>
            <span>$315</span>
          </div>
          <span>Paid by Credit/Debit Card</span>
        </div>
      </div>
    </div>
  );
};
DetailInvoice.Layout = LayoutAdmin;

export default DetailInvoice;
