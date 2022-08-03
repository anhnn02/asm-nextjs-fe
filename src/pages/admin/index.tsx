import LayoutAdmin from "@/components/Layout/admin";
import React, { useEffect, useState } from "react";
import Icon from "@/components/Icon";
import styles from "./Dashboard.module.scss";
import useProduct from "@/hooks/use-product";
import useUser from "@/hooks/use-user";
import useCate from "@/hooks/use-category";
import useInvoice from "@/hooks/use-invoice";
import { filter } from "@/api/product";
import { formatPrice } from "@/utils/formatNumber";
type Props = {};

const Dashboard = (props: Props) => {
  const { data: dataProduct } = useProduct();
  const { data: dataUser } = useUser();
  const { data: dataCate } = useCate();
  const { data: dataInvoice } = useInvoice();
  // if (dataInvoice.status )
  // console.log("abc", dataInvoice?.length);
  const resultSuccess = dataInvoice?.filter((data) => data.status === 2);
  const resultCancel = dataInvoice?.filter((data) => data.status === 3);
  const result = dataInvoice?.filter((data) => data.status === 4);
  // const cateTotal = dataCate.filter((data) => data.id ==)



  let totalPrice = 0;
  resultSuccess.forEach(item => {
    totalPrice += item.total
  })

  return (
    <div className="">
      <div className="tw-grid tw-grid-cols-4 tw-gap-5">
        <div className={`${styles["box"]} ${"tw-border-green-500"}`}>
          <div className={styles["content"]}>
            <div className="">
              <h5 className="tw-text-xl tw-text-green-500">
                {formatPrice(totalPrice)}
              </h5>
              <span className="tw-text-my-gray ">Sales statistics</span>
            </div>
            <div className="">
              <Icon.Coin className="tw-pl-6 tw-text-2xl tw-text-gray-500" />
            </div>
          </div>
        </div>
        <div className={`${styles["box"]} ${"tw-border-blue-500"}`}>
          <div className={styles["content"]}>
            <div className="">
              <h5 className="tw-text-xl tw-text-blue-500">
                {dataProduct?.length}
              </h5>
              <span className="tw-text-my-gray ">Total Product</span>
            </div>
            <div className="">
              <Icon.Chalendar className="tw-pl-6 tw-text-2xl tw-text-gray-500" />
            </div>
          </div>
        </div>

        <div className={`${styles["box"]} ${"tw-border-red-500"}`}>
          <div className={styles["content"]}>
            <div className="">
              <h5 className="tw-text-xl tw-text-red-500">{dataCate?.length}</h5>
              <span className="tw-text-my-gray ">Total Category</span>
            </div>
            <div className="">
              <Icon.Checkk className="tw-pl-6 tw-text-2xl tw-text-gray-500" />
            </div>
          </div>
        </div>
        <div className={`${styles["box"]} ${"tw-border-yellow-500"}`}>
          <div className={styles["content"]}>
            <div className="">
              <h5 className="tw-text-xl tw-text-yellow-500">
                {dataUser?.length}
              </h5>
              <span className="tw-text-my-gray ">Total User</span>
            </div>
            <div className="">
              <Icon.Users className="tw-pl-6 tw-text-2xl tw-text-gray-500" />
            </div>
          </div>
        </div>
      </div>
      <div className="tw-mt-12 tw-w-1/4 tw-gap-5">
        <div className="">
          <div className="tw-text-xl">
            <span className=" ">Total Bill : </span>{" "}
            <span>{dataInvoice?.length}</span>
          </div>
          <div className="tw-gap-4">
            {/* {dataInvoice.map((item, index) => (
            ))} */}
            <div className="">
              <div className="">
                <Icon.CheckLg className="tw-text-xl tw-text-green-500" /> Oder
                Succes : {resultSuccess.length}
              </div>
              <div className="">
                <Icon.CheckX className="tw-text-xl tw-text-red-500" /> Order
                Cancel : {resultCancel.length}
              </div>
              <div className="">
                <Icon.CheckX className="tw-text-xl tw-text-red-500" /> Order
                Canceled : {result.length}
              </div>
            </div>
            {/* <table className={styles["table"]} style={{ width: "100%" }}>
              <tbody>
                <tr>
                  <th className={styles["th"]}>Name</th>
                  <th className={styles["th"]} colSpan={2}>
                    Mobile No.
                  </th>
                </tr>
                <tr>
                  <td className={styles["td"]}>Ajeet Maurya</td>
                  <td className={styles["td"]}>7503520801</td>
                  <td className={styles["td"]}>9555879135</td>
                </tr>
              </tbody>
            </table> */}
          </div>
        </div>
      </div>
      <div className="tw-mt-12 tw-w-1/4 tw-gap-5">
        <div className="">
          <div className="tw-text-xl">
            <span className=" ">Product statistics by category </span>
            <span>{dataInvoice?.length}</span>
          </div>
          <div className="tw-gap-4">
            {/* {dataInvoice.map((item, index) => (
            ))} */}
            <div className="">
              <div className="">
                <Icon.CheckLg className="tw-text-xl tw-text-green-500" /> Oder
                Succes : {resultSuccess.length}
              </div>
              <div className="">
                <Icon.CheckX className="tw-text-xl tw-text-red-500" /> Order
                Cancel : {resultCancel.length}
              </div>
              <div className="">
                <Icon.CheckX className="tw-text-xl tw-text-red-500" /> Order
                Canceled : {result.length}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Dashboard.Layout = LayoutAdmin;

export default Dashboard;
