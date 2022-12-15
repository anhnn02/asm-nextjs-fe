/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import LayoutAdmin from "@/components/Layout/admin";
import useVoucher from "@/hooks/use-voucher";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./Product.module.scss";
import stylesAdmin from "@/styles/admin/Admin.module.scss";
import Button from "@/components/Button";
import { toast } from "react-toastify";
import { path } from "@/constants";

type Props = {};
type TypeInput = {
  code: string;
  quantity: number;
  
  status: number;
  
};
const AddVoucher = (props: Props) => {
  const router = useRouter();
  
  const { create , error} = useVoucher();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  if (error) return <div>Loading...</div>;
  
  let errSalePrice = "";
  const onSubmit = async (data: any) => {
    
      await create(data);
      toast.success("Add successfully!", {
        position: "top-center",
      });
      router.push("/admin/vouchers");
    
  };
  return (
    <div>
      <div className={stylesAdmin["header_content"]}>
        <div>
          <h1 className={stylesAdmin["title-admin"]}>Add voucher</h1>
        </div>
        <Link href={`${path.private.voucherRoute}`}>
          <button className={stylesAdmin["btn-multichoice_item"]}>
            List voucher
          </button>
        </Link>
      </div>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className={stylesAdmin["content-form_admin"]}>
          <div className={stylesAdmin["inside_form_admin"]}>
            <div className="tw-grid tw-grid-cols-2 tw-gap-10">
              <div className="">
                <div className={stylesAdmin["row_2-col"]}>
                  {/* NAME PRODUCT */}
                  <div className={`${stylesAdmin["row-input_form"]}`}>
                    <label className={stylesAdmin["label_form"]}>
                      <span className={stylesAdmin["label-span_form"]}>
                        Code
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="tw-my-1 tw-input tw-input-bordered tw-max-w-full tw-w-full"
                      {...register("code", { required: true })}
                    />
                    {errors.code && (
                      <div
                        className={`${
                          stylesAdmin["input-validate_form"]
                        } ${"my-error"}`}
                      >
                        <span>Code name is required</span>
                      </div>
                    )}
                  </div>
                  {/* Quantity  */}
                  <div className={`${stylesAdmin["row-input_form"]}`}>
                    <label className={stylesAdmin["label_form"]}>
                      <span className={stylesAdmin["label-span_form"]}>
                        Status
                      </span>
                    </label>
                    <input
                      type="number"
                      placeholder="Type here"
                      className="tw-my-1 tw-input tw-input-bordered tw-max-w-full tw-w-full"
                      {...register("status", { required: true })}
                    />
                    {errors.status && (
                      <div
                        className={`${
                          stylesAdmin["input-validate_form"]
                        } ${"my-error"}`}
                      >
                        <span>Status is required</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className={`${stylesAdmin["row-input_form"]}`}>
                  <label className={stylesAdmin["label_form"]}>
                    <span className={stylesAdmin["label-span_form"]}>
                      Quantity
                    </span>
                  </label>
                  <input
                    type="number"
                    placeholder="Type here"
                    className="tw-my-1 tw-input tw-input-bordered tw-max-w-full tw-w-full"
                    {...register("quantity", { required: true })}
                  />
                  {errors.quantity && (
                    <div
                      className={`${
                        stylesAdmin["input-validate_form"]
                      } ${"my-error"}`}
                    >
                      <span>Quantity is required</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* BUTTON */}
            <div className={stylesAdmin["row-input_form"]}>
              <Button.Fill className="tw-w-full" content={"Add"} />
            </div>
          </div>
          {/* PREVIEW IMAGE  */}
        </div>
      </form>
    </div>
  );
};

AddVoucher.Layout = LayoutAdmin;

export default AddVoucher;
