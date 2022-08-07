/* eslint-disable @next/next/no-img-element */
import {
  getDistrict,
  getDistrictByProvince,
  getProvince,
  getProvinces,
  getWard,
  getWardByDistrict,
} from "@/api/addressCheckout";
import Button from "@/components/Button";
import { path } from "@/constants";
import { applyVoucher, resetCart } from "@/features/cart/cart.slice";
import useInvoice from "@/hooks/use-invoice";
import useInvoiceDetail from "@/hooks/use-invoiceDetail";
import { formatPrice } from "@/utils/formatNumber";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import styles from "./Cart.module.scss";
import Icon from "@/components/Icon";
import useVoucher from "@/hooks/use-voucher";

const CartPage = () => {
  const { create: createDetail } = useInvoiceDetail();
  const { readVoucherStatusByCode } = useVoucher()
  const dispatch = useDispatch();
  const route = useRouter();
  const userCurrent = useSelector((data: any) => data.user.current);
  const isLogin = useSelector((data: any) => data.user.isAuthenticated);
  const cartTotalQuantity = useSelector((data: any) => data.cart.totalQuantity);
  const flagVoucher = useSelector((data: any) => data.cart.useVoucher);
  const cart = useSelector((data: any) => data.cart.items);
  const totalAmount = useSelector((data: any) => data.cart.totalAmount);
  const discount = useSelector((data: any) => data.cart.discount);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {

  }, []);

  //cart, quantity, total


  //add voucher
  const onAddVoucher = async (voucher) => {
    const data: any = await readVoucherStatusByCode(voucher);
    if (!flagVoucher) {
      if (!data) {
        toast.error("Voucher is not exist");
      } else {
        if (data.status == 1) {
          toast.error("Voucher da het han su dung")
        } else {
          toast.success("Apply voucher success")
          dispatch(applyVoucher({
            discount: data.discount,
            voucher: data.code,
            useVoucher: true
          }))
        }
      }
    } else {
      toast.error("Bạn chỉ có thể kích hoạt 1 voucher cho 1 đơn hàng");
    }

  }

  // check vao trang checkout: user && cart != []
  if (!isLogin && cart.length === 0) {
    route.push(path.public.notFound);
  }
  return (
    <div>
      <div className="tw-text-center">
        <div
          className={`${styles["progress_of_customer"]
            } ${"!tw-inline-block tw-pt-[12px]"}`}
        >
          <div className={styles["format_progress_of_customer"]}>
            <div className={styles["step_progress-active"]}>
              <Link href={path.public.cartRoute}>1. Cart</Link>
            </div>
            <div className={styles["line_progress-unactive"]}></div>
            <div className={styles["step_progress-unactive"]}>
              <span>
                <Link href={path.public.checkoutRoute}>2. Checkout</Link>
              </span>
            </div>
            <div className={styles["line_progress-unactive"]}></div>
            <div className={styles["step_progress-unactive"]}>
              <span>3. Order completed</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["content_checkout"]}>
        <div
          className={styles["form_checkout"]}
        >
          <div className={styles["row_progress_of_customer"]}>
            <div className="tw-flex">
              <div className="">
                <img width={100} src="https://i.imgur.com/gXf9BcR.png" alt="" />
              </div>
              <div className="tw-flex tw-justify-between tw-flex-col tw-pl-5">
                <div className="tw-font-medium tw-text-xl">
                  <span>Lord 2019</span>
                </div>
                <div className="tw-text-my-gray ">
                  <span>$250.00 x 1</span>{" "}
                  <span className="tw-font-medium tw-text-primary">
                    $250.00
                  </span>
                </div>
              </div>
            </div>
            <div className="tw-flex tw-justify-between tw-flex-col">
              <button className="tw-text-right ">
                <Icon.Close className="tw-text-3xl tw-leading-none tw-text-zinc-400 tw-cursor-pointer tw-duration-75 hover:tw-text-zinc-600" />
              </button>
              <div className="tw-space-x-2">
                <button
                  className="tw-normal-case tw-btn tw-bg-transparent tw-text-primary tw-border tw-border-primary tw-p-3  
                hover:tw-bg-primary hover:tw-text-white hover:tw-border-primary  !tw-py-[1px] !tw-px-2 !tw-min-h-0 !tw-h-[30px]"
                >
                  <Icon.Minus />
                </button>
                <span className={styles["cart-sidebar__quantity"]}>1</span>
                <button
                  className="tw-normal-case tw-btn tw-bg-transparent tw-text-primary tw-border tw-border-primary tw-p-3 tw-px-4 
                hover:tw-bg-primary hover:tw-text-white hover:tw-border-primary !tw-py-[1px] !tw-px-2 !tw-min-h-0 !tw-h-[30px]"
                >
                  <Icon.PlusRegular />
                </button>
              </div>
            </div>
          </div>
          <div className={styles["row_progress_of_customer"]}>
            <div className="tw-flex">
              <div className="">
                <img width={100} src="https://i.imgur.com/gXf9BcR.png" alt="" />
              </div>
              <div className="tw-flex tw-justify-between tw-flex-col tw-pl-5">
                <div className="tw-font-medium tw-text-xl">
                  <span>Lord 2019</span>
                </div>
                <div className="tw-text-my-gray ">
                  <span>$250.00 x 1</span>{" "}
                  <span className="tw-font-medium tw-text-primary">
                    $250.00
                  </span>
                </div>
              </div>
            </div>
            <div className="tw-flex tw-justify-between tw-flex-col">
              <button className="tw-text-right ">
                <Icon.Close className="tw-text-3xl tw-leading-none tw-text-zinc-400 tw-cursor-pointer tw-duration-75 hover:tw-text-zinc-600" />
              </button>
              <div className="tw-space-x-2">
                <button
                  className="tw-normal-case tw-btn tw-bg-transparent tw-text-primary tw-border tw-border-primary tw-p-3  
                hover:tw-bg-primary hover:tw-text-white hover:tw-border-primary  !tw-py-[1px] !tw-px-2 !tw-min-h-0 !tw-h-[30px]"
                >
                  <Icon.Minus />
                </button>
                <span className={styles["cart-sidebar__quantity"]}>1</span>
                <button
                  className="tw-normal-case tw-btn tw-bg-transparent tw-text-primary tw-border tw-border-primary tw-p-3 tw-px-4 
                hover:tw-bg-primary hover:tw-text-white hover:tw-border-primary !tw-py-[1px] !tw-px-2 !tw-min-h-0 !tw-h-[30px]"
                >
                  <Icon.PlusRegular />
                </button>
              </div>
            </div>
          </div>
          <div className={styles["row_progress_of_customer"]}>
            <div className="tw-flex">
              <div className="">
                <img width={100} src="https://i.imgur.com/gXf9BcR.png" alt="" />
              </div>
              <div className="tw-flex tw-justify-between tw-flex-col tw-pl-5">
                <div className="tw-font-medium tw-text-xl">
                  <span>Lord 2019</span>
                </div>
                <div className="tw-text-my-gray ">
                  <span>$250.00 x 1</span>{" "}
                  <span className="tw-font-medium tw-text-primary">
                    $250.00
                  </span>
                </div>
              </div>
            </div>
            <div className="tw-flex tw-justify-between tw-flex-col">
              <button className="tw-text-right ">
                <Icon.Close className="tw-text-3xl tw-leading-none tw-text-zinc-400 tw-cursor-pointer tw-duration-75 hover:tw-text-zinc-600" />
              </button>
              <div className="tw-space-x-2">
                <button
                  className="tw-normal-case tw-btn tw-bg-transparent tw-text-primary tw-border tw-border-primary tw-p-3  
                hover:tw-bg-primary hover:tw-text-white hover:tw-border-primary  !tw-py-[1px] !tw-px-2 !tw-min-h-0 !tw-h-[30px]"
                >
                  <Icon.Minus />
                </button>
                <span className={styles["cart-sidebar__quantity"]}>1</span>
                <button
                  className="tw-normal-case tw-btn tw-bg-transparent tw-text-primary tw-border tw-border-primary tw-p-3 tw-px-4 
                hover:tw-bg-primary hover:tw-text-white hover:tw-border-primary !tw-py-[1px] !tw-px-2 !tw-min-h-0 !tw-h-[30px]"
                >
                  <Icon.PlusRegular />
                </button>
              </div>
            </div>
          </div>
          <div className={styles["row_progress_of_customer"]}>
            <div className="tw-flex">
              <div className="">
                <img width={100} src="https://i.imgur.com/gXf9BcR.png" alt="" />
              </div>
              <div className="tw-flex tw-justify-between tw-flex-col tw-pl-5">
                <div className="tw-font-medium tw-text-xl">
                  <span>Lord 2019</span>
                </div>
                <div className="tw-text-my-gray ">
                  <span>$250.00 x 1</span>{" "}
                  <span className="tw-font-medium tw-text-primary">
                    $250.00
                  </span>
                </div>
              </div>
            </div>
            <div className="tw-flex tw-justify-between tw-flex-col">
              <button className="tw-text-right ">
                <Icon.Close className="tw-text-3xl tw-leading-none tw-text-zinc-400 tw-cursor-pointer tw-duration-75 hover:tw-text-zinc-600" />
              </button>
              <div className="tw-space-x-2">
                <button
                  className="tw-normal-case tw-btn tw-bg-transparent tw-text-primary tw-border tw-border-primary tw-p-3  
                hover:tw-bg-primary hover:tw-text-white hover:tw-border-primary  !tw-py-[1px] !tw-px-2 !tw-min-h-0 !tw-h-[30px]"
                >
                  <Icon.Minus />
                </button>
                <span className={styles["cart-sidebar__quantity"]}>1</span>
                <button
                  className="tw-normal-case tw-btn tw-bg-transparent tw-text-primary tw-border tw-border-primary tw-p-3 tw-px-4 
                hover:tw-bg-primary hover:tw-text-white hover:tw-border-primary !tw-py-[1px] !tw-px-2 !tw-min-h-0 !tw-h-[30px]"
                >
                  <Icon.PlusRegular />
                </button>
              </div>
            </div>
          </div>
          <div className={styles["row_progress_of_customer"]}>
            <div className="tw-flex">
              <div className="">
                <img width={100} src="https://i.imgur.com/gXf9BcR.png" alt="" />
              </div>
              <div className="tw-flex tw-justify-between tw-flex-col tw-pl-5">
                <div className="tw-font-medium tw-text-xl">
                  <span>Lord 2019</span>
                </div>
                <div className="tw-text-my-gray ">
                  <span>$250.00 x 1</span>{" "}
                  <span className="tw-font-medium tw-text-primary">
                    $250.00
                  </span>
                </div>
              </div>
            </div>
            <div className="tw-flex tw-justify-between tw-flex-col">
              <button className="tw-text-right ">
                <Icon.Close className="tw-text-3xl tw-leading-none tw-text-zinc-400 tw-cursor-pointer tw-duration-75 hover:tw-text-zinc-600" />
              </button>
              <div className="tw-space-x-2">
                <button
                  className="tw-normal-case tw-btn tw-bg-transparent tw-text-primary tw-border tw-border-primary tw-p-3  
                hover:tw-bg-primary hover:tw-text-white hover:tw-border-primary  !tw-py-[1px] !tw-px-2 !tw-min-h-0 !tw-h-[30px]"
                >
                  <Icon.Minus />
                </button>
                <span className={styles["cart-sidebar__quantity"]}>1</span>
                <button
                  className="tw-normal-case tw-btn tw-bg-transparent tw-text-primary tw-border tw-border-primary tw-p-3 tw-px-4 
                hover:tw-bg-primary hover:tw-text-white hover:tw-border-primary !tw-py-[1px] !tw-px-2 !tw-min-h-0 !tw-h-[30px]"
                >
                  <Icon.PlusRegular />
                </button>
              </div>
            </div>
          </div>
          <div className={styles["row_progress_of_customer"]}>
            <div className="tw-flex">
              <div className="">
                <img width={100} src="https://i.imgur.com/gXf9BcR.png" alt="" />
              </div>
              <div className="tw-flex tw-justify-between tw-flex-col tw-pl-5">
                <div className="tw-font-medium tw-text-xl">
                  <span>Lord 2019</span>
                </div>
                <div className="tw-text-my-gray ">
                  <span>$250.00 x 1</span>{" "}
                  <span className="tw-font-medium tw-text-primary">
                    $250.00
                  </span>
                </div>
              </div>
            </div>
            <div className="tw-flex tw-justify-between tw-flex-col">
              <button className="tw-text-right ">
                <Icon.Close className="tw-text-3xl tw-leading-none tw-text-zinc-400 tw-cursor-pointer tw-duration-75 hover:tw-text-zinc-600" />
              </button>
              <div className="tw-space-x-2">
                <button
                  className="tw-normal-case tw-btn tw-bg-transparent tw-text-primary tw-border tw-border-primary tw-p-3  
                hover:tw-bg-primary hover:tw-text-white hover:tw-border-primary  !tw-py-[1px] !tw-px-2 !tw-min-h-0 !tw-h-[30px]"
                >
                  <Icon.Minus />
                </button>
                <span className={styles["cart-sidebar__quantity"]}>1</span>
                <button
                  className="tw-normal-case tw-btn tw-bg-transparent tw-text-primary tw-border tw-border-primary tw-p-3 tw-px-4 
                hover:tw-bg-primary hover:tw-text-white hover:tw-border-primary !tw-py-[1px] !tw-px-2 !tw-min-h-0 !tw-h-[30px]"
                >
                  <Icon.PlusRegular />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles["sidebar_checkout"]} `}>
          <div
            className={`${styles["sidebar_checkout_inside"]} ${styles["sidebar_sticky"]}`}
          >
            <div>
              <div className={styles["infor_checkout"]}>
                <div className={styles["row-infor_checkout"]}>
                  <span className={styles["color-text-infor_checkout"]}>
                    Subtotal:
                  </span>
                  <span className="tw-font-semibold tw-text-xl">
                    {/* {formatPrice(subTotal)} */}
                  </span>
                </div>
                <div className={styles["row-infor_checkout"]}>
                  <span className={styles["color-text-infor_checkout"]}>
                    Shipping:
                  </span>
                  <span className="tw-font-semibold tw-text-xl">
                    {formatPrice(5)}
                  </span>
                </div>
                <div className={styles["row-infor_checkout"]}>
                  <span className={styles["color-text-infor_checkout"]}>
                    Discount:
                  </span>
                  <span className="tw-font-semibold tw-text-xl">${discount}</span>
                </div>
              </div>
            </div>
            <div className={styles["row-infor_checkout"]}>
              <span className={styles["color-text-infor_checkout"]}>
                Total:
              </span>
              <span className="tw-font-semibold tw-text-2xl tw-text-primary">
                {formatPrice(totalAmount + 5)}
              </span>
            </div>
            <form action="" onSubmit={handleSubmit(onAddVoucher)}>
              <input
                type="text"
                placeholder="Voucher"
                className={styles["input-form_checkout"]}
                {...register('code', { required: true })}
              />
              <Button.Transparent
                className="tw-w-full tw-mt-3"
                content={"Apply Voucher"}
              />
            </form>
            <Link href={path.public.checkoutRoute}>
              <Button.Fill
                className="tw-w-full tw-mt-3"
                content={"Checkout Now "}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
