/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import { read } from "@/api/voucher";
import Button from "@/components/Button";
import LayoutAdmin from "@/components/Layout/admin";

import useVoucher from "@/hooks/use-voucher";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./Product.module.scss";

import stylesAdmin from "@/styles/admin/Admin.module.scss";
import Link from "next/link";
import { toast } from "react-toastify";
import { path } from "@/constants";

type Props = {};

const EditVoucher = (props: Props) => {
  const router = useRouter();
  const { id } = router.query;
  
  const { edit } = useVoucher();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  
  const onSubmit = async (data: any) => {
    await edit({ ...data});
    toast.success("Edit successfully!", {
      position: "top-center",
    });
    router.push("/admin/vouchers");
  };
  return (
    <div>
      <div className={stylesAdmin["header_content"]}>
        <div>
          <h1 className={stylesAdmin["title-admin"]}>Edit Voucher</h1>
        </div>
        <Link href={`${path.private.voucherRoute}`}>
          <button className={stylesAdmin["btn-multichoice_item"]}>
            List Voucher
          </button>
        </Link>
      </div>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className={stylesAdmin["content-form_admin"]}>
          <div className={stylesAdmin["inside_form_admin"]}>
            <div className="tw-grid tw-grid-cols-2">
              <div className="">
                <div className={stylesAdmin["row_2-col"]}>
                  {/* NAME */}
                  <div className={`${stylesAdmin["row-input_form"]}`}>
                    <label className={stylesAdmin["label_form"]}>
                      <span className={stylesAdmin["label-span_form"]}>
                        Code
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="tw-my-1  tw-input tw-input-bordered tw-max-w-full tw-w-full"
                      {...register("code", { required: true })}
                    />
                    {errors.code && (
                      <div
                        className={`${
                          stylesAdmin["input-validate_form"]
                        } ${"my-error"}`}
                      >
                        <span>Code</span>
                      </div>
                    )}
                  </div>
                  {/* REGULAR PRICE  */}
                  <div className={`${stylesAdmin["row-input_form"]}`}>
                    <label className={stylesAdmin["label_form"]}>
                      <span className={stylesAdmin["label-span_form"]}>
                        Status
                      </span>
                    </label>
                    <input
                      type="text"
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
                <div className={stylesAdmin["row_2-col"]}>
                  {/* SALE PRICE  */}
                  <div className={`${stylesAdmin["row-input_form"]}`}>
                    <label className={stylesAdmin["label_form"]}>
                      <span className={stylesAdmin["label-span_form"]}>
                        Quantity
                      </span>
                    </label>
                    <input
                      type="text"
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
            </div>

            {/* BUTTON */}
            <div className={stylesAdmin["row-input_form"]}>
              <Button.Fill className="tw-w-full" content={"Edit"} />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

EditVoucher.Layout = LayoutAdmin;

export default EditVoucher;
