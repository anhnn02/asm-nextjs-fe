/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import LayoutAdmin from "@/components/Layout/admin";
import React, { useEffect, useState } from "react";
import styles from "./Edit.module.scss";
import Button from "@/components/Button";
import router, { useRouter } from "next/router";
import useInvoice from "@/hooks/use-invoice";
import { SubmitHandler, useForm } from "react-hook-form";
import useSWR from "swr";
import { formatPrice } from "@/utils/formatNumber";
import { IIvoice } from "@/models/invoice";

const EditInvoice = () => {
  const { data, error, detail, editInvoice } = useInvoice();
  //  if (!data) return <div>Loadinggg...</div>
  //  if (error) return <div>Falese</div>  ;
  const router = useRouter();
  const id = router.query.id;
  const [invoice, setInvoice] = useState<IIvoice>();
  const [total, setTotal] = useState<number>();
  // console.log(id);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    if (!id) return;
    detail(id).then((res: any) => reset(res.invoice));
    const get = async () => {
      const data: any = await detail(id);
      let totalPrice : any = 0;

      const cart = data.invoiceDetails;
      cart.forEach((element) => {
        totalPrice += element.total;
      });
      setTotal(totalPrice);
      setInvoice(data);
    };
    get();
  }, [id]);
  const onSubmit: SubmitHandler<any> = async (data: any) => {
    try {
      await editInvoice(data);
      router.push("/admin/invoices");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <span className="tw-block  tw-justify-around tw-font-medium tw-text-2xl">
          Order Invoie
        </span>
        <div className="tw-grid tw-grid-cols-2 tw-py-4 tw-pl-6">
          <div className="">
            {/* Full name */}
            <div className="tw-form-control tw-w-full tw-max-w-xs">
              <label className="tw-label">
                <span className="tw-label-text tw-capitalize">Full name</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="tw-input tw-input-bordered tw-w-full tw-max-w-xs"
                {...register("fullname", { required: true })}
              />
              {errors.fullname && (
                <span style={{ color: "red" }}>Full name cannot be blank</span>
              )}
            </div>
            {/* Email */}
            <div className="tw-form-control tw-w-full tw-max-w-xs">
              <label className="tw-label">
                <span className="tw-label-text tw-capitalize">Email</span>
              </label>
              <input
                type="email"
                placeholder="Type here"
                className="tw-input tw-input-bordered tw-w-full tw-max-w-xs"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span style={{ color: "red" }}>Email cannot be blank</span>
              )}
            </div>
            {/* Your Phone  */}
            <div className="tw-form-control tw-w-full tw-max-w-xs">
              <label className="tw-label">
                <span className="tw-label-text tw-capitalize">Your Phone</span>
              </label>
              <input
                type="number"
                placeholder="Type here"
                className="tw-input tw-input-bordered tw-w-full tw-max-w-xs"
                {...register("phoneNumber", { required: true })}
              />
              {errors.phoneNumber && (
                <span style={{ color: "red" }}>Email cannot be blank</span>
              )}
            </div>
          </div>
          <div className="">
            {/* Status  */}
            <div className="tw-form-control tw-w-full tw-max-w-xs">
              <label className="tw-label">
                <span className="tw-label-text tw-capitalize">Status</span>
              </label>
              {(() => {
                if (invoice?.invoice.status === 0) {
                  return (
                    <select
                      className="tw-select tw-select-secondary tw-w-full tw-max-w-xs"
                      {...register("status", { required: true })}
                    >
                      <option selected value={0}>
                        {" "}
                        Pending{" "}
                      </option>
                      <option value={1}>Shipping</option>
                      <option value={2}>Delivered</option>
                      <option value={3}>Cancel</option>
                      <option value={4}>Order canceled</option>
                    </select>
                  );
                }
                if (invoice?.invoice.status === 1) {
                  return (
                    <select
                      className="tw-select tw-select-secondary tw-w-full tw-max-w-xs"
                      {...register("status", { required: true })}
                    >
                      <option selected value={1}>
                        Shipping{" "}
                      </option>
                      <option value={2}>Delivered</option>
                      <option value={3}>Cancel</option>
                      <option value={4}>Order canceled</option>
                    </select>
                  );
                }
                if (invoice?.invoice.status === 2) {
                  return (
                    <select
                      className="tw-select tw-select-secondary tw-w-full tw-max-w-xs"
                      {...register("status", { required: true })}
                    >
                      <option value={2}>Delivered</option>
                    </select>
                  );
                }
                if (invoice?.invoice.status === 3) {
                  return (
                    <select
                      className="tw-select tw-select-secondary tw-w-full tw-max-w-xs"
                      {...register("status", { required: true })}
                    >
                      <option value={3}>Cancel</option>
                    </select>
                  );
                }
                if (invoice?.invoice.status === 4) {
                  return (
                    <select
                      className="tw-select tw-select-secondary tw-w-full tw-max-w-xs"
                      {...register("status", { required: true })}
                    >
                      <option value={4}>Order canceled</option>
                    </select>
                  );
                }
              })()}
              {/* <select
                className="tw-select tw-select-secondary tw-w-full tw-max-w-xs"
                name="status"
                {...register("status", { required: false })}
              >
                <option value={0}>Pending</option>
                <option value={1}>Shipping</option>
                <option value={2}>Delivered</option>
                <option value={3}>Cancel</option>
                <option value={4}>Order canceled</option>
              </select> */}
            </div>
            {/* Address  */}
            <div className="tw-form-control tw-w-full tw-max-w-xs">
              <label className="tw-label">
                <span className="tw-label-text tw-capitalize">Address</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="tw-input tw-input-bordered tw-w-full tw-max-w-xs"
                {...register("address", { required: false })}
              />
              {errors.address && (
                <span style={{ color: "red" }}>Email cannot be blank</span>
              )}
            </div>

            <div className="tw-form-control tw-pt-6 tw-w-full tw-max-w-xs tw-my-3">
              <button className="tw-btn tw-btn-primary">Edit</button>
            </div>
          </div>
        </div>
      </form>

      <div className={styles["invoice"]}>
        <div className={styles["tab1"]}>
          <div className="tw-pt-4">
            <span className="tw-text-my-gray"> Order Id: &nbsp;</span>
            {invoice?.invoice._id}
          </div>
          <div className="">
            <span className="tw-text-my-gray"> Phone:&nbsp;</span>
            {invoice?.invoice.phoneNumber}
          </div>
          <div className="">
            <span className="tw-text-my-gray">Delivered on:&nbsp;</span>
            {invoice?.invoice.createdAt.split("", 10)}
          </div>
        </div>
        {invoice?.invoiceDetails?.map((item, index) => (
          <div key={index} className="">
            <div className={styles["tab-img"]}>
              <div className="tw-flex tw-space-x-5 ">
                <div className="">
                  <img
                    width={70}
                    className="tw-rounded-[var(--rounded-1)] tw-h-20 tw-object-cover"
                    src={item.img}
                    alt=""
                  />
                </div>
                <div className="tw-pt-5">
                  <h6>{item.name}</h6>
                </div>
              </div>
              <div className="">
                <span className="tw-text-my-gray">Size: {item.size}</span>
              </div>
              <div className="">
                <span className="tw-text-my-gray">
                  {" "}
                  Price: &nbsp;
                  {item.salePrice
                    ? formatPrice(item.salePrice)
                    : formatPrice(item.regularPrice)}
                </span>
              </div>
              <div className="">
                <span className="tw-text-my-gray">
                  Quantity: {item.quantity}
                </span>
              </div>
              <div className="">
                <span className="tw-text-my-gray">Total: &nbsp;</span>
                <span className="tw-text-red-500 tw-font-medium">
                  {formatPrice(item.total)}
                </span>
              </div>
              {/* <div className="">
                  <Button.Transparent content={"Write A Review"} />
                </div> */}
            </div>
          </div>
        ))}
      </div>
      <div className="tw-flex tw-gap-6 tw-my-6">
        <div className={styles["tab2"]}>
          <span className="tw-block tw-font-medium tw-text-xl">
            Shipping Address
          </span>
          <span>{invoice?.invoice.address}</span>
        </div>
        <div className={styles["tab2"]}>
          <span className=" tw-font-medium  tw-text-xl">Total Summary</span>
          <div className="">
            <div className="tw-pt-4 tw-flex  tw-justify-between">
              <span className="tw-text-my-gray">Subtotal:</span>
              {formatPrice(total)}
            </div>
            <div className="tw-pt-4 tw-flex  tw-justify-between">
              <span className="tw-text-my-gray">Shipping fee:</span>
              {formatPrice(5)}
            </div>
          </div>
          <hr />
          <div className="tw-pt-4 tw-flex  tw-justify-between">
            <span className="tw-font-medium  tw-text-base tw-pb-4">Total</span>
            <span id="total_detail" className="tw-font-medium tw-text-xl">
              {formatPrice(total + 5)}
            </span>
          </div>
          <span>Paid by Credit/Debit Card</span>
        </div>
      </div>
    </div>
  );
};
EditInvoice.Layout = LayoutAdmin;

export default EditInvoice;
