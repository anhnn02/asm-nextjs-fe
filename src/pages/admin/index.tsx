import LayoutAdmin from "@/components/Layout/admin";
import React, { useEffect, useState } from "react";
import Icon from "@/components/Icon";
import styles from "./Dashboard.module.scss";
import useProduct from "@/hooks/use-product";
import useUser from "@/hooks/use-user";
import useCate from "@/hooks/use-category";
import useInvoice from "@/hooks/use-invoice";
import { formatPrice } from "@/utils/formatNumber";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

const Dashboard = () => {
  const { data: dataProduct } = useProduct();
  const { data: dataUser } = useUser();
  const { data: dataCate, detail } = useCate();
  const { data: dataInvoice } = useInvoice();

  const [cateIn, setCateIn] = useState();
  useEffect(() => {
    let resultCate = [];
    dataCate?.forEach(async (element) => {
      const dataCP = await detail(element._id);
      resultCate.push(dataCP);
      setCateIn(resultCate);
      console.log("catee", cateIn);
    });
  }, []);

  const resultSuccess = dataInvoice?.filter((data) => data.status === 2);
  const resultCancel = dataInvoice?.filter((data) => data.status === 3);
  const result = dataInvoice?.filter((data) => data.status === 4);

  let totalPrice = 0;
  resultSuccess?.forEach((item) => {
    totalPrice += item.total;
  });

  return (
    <div className="">
      <div className="tw-grid tw-grid-cols-4 tw-gap-5">
        <div className={`${styles["box"]} ${"tw-border-green-500"}`}>
          <div className={styles["content"]}>
            <div className="">
              <h5 className="tw-text-xl tw-text-green-500">
                {formatPrice(totalPrice)}
              </h5>
              <span className="tw-text-my-gray ">Total Revenue</span>
            </div>
            <div className="">
              <Icon.Coin className="tw-pl-6 tw-text-2xl tw-text-green-500" />
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
              <Icon.Chalendar className="tw-pl-6 tw-text-2xl tw-text-blue-500" />
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
              <Icon.Checkk className="tw-pl-6 tw-text-2xl tw-text-red-500" />
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
              <Icon.Users className="tw-pl-6 tw-text-2xl tw-text-yellow-500" />
            </div>
          </div>
        </div>
      </div>
      <div className="tw-flex tw-flex tw-w-full tw-mt-12 tw-gap-6 ">
        <div className={styles["box_content"]}>
          
          <table className="tw-table">
            <tbody>
              <tr>
                <th>#</th>
                <th>Status</th>
                <th>Number</th>
              </tr>
              <tr>
                <td rowSpan={3}>Total Bill: {dataInvoice?.length} </td>
                <td>Invoice Succes</td>
                <td> {resultSuccess?.length}</td>
              </tr>
              <tr>
                <td>Invoice Cancel</td>
                <td> {resultCancel?.length}</td>
              </tr>
              <tr>
                <td>Invoice Canceled</td>
                <td> {result?.length}</td>
              </tr>
              {cateIn?.map((item, index) => {
                return (
                  <tr key={index}>
                    <td rowSpan={2}>
                      Product revenue by category: {dataInvoice?.length}
                    </td>
                    <td> {item.category.name}</td>
                    <td> {item.products.length}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="tw-grid tw-flex-grow tw-card tw-w-1/4 tw-rounded-box tw-place-items-center">
          <img src="https://i.imgur.com/0GPspoS.png" alt="" />
        </div>
      </div>
    </div>
  );
};

Dashboard.Layout = LayoutAdmin;

export default Dashboard;
