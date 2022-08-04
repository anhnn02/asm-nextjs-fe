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
import { resetCart } from "@/features/cart/cart.slice";
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

const CartPage = () => {
  const { create } = useInvoice();
  const { create: createDetail } = useInvoiceDetail();
  const dispatch = useDispatch();
  const route = useRouter();
  const userCurrent = useSelector((data) => data.user.current);
  const isLogin = useSelector((data) => data.user.isAuthenticated);
  const cartTotalQuantity = useSelector((data) => data.cart.totalQuantity);
  const cart = useSelector((data) => data.cart.items);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);

  useEffect(() => {
    const getDataProvince = async () => {
      const { data } = await getProvinces();
      setProvinces(data);
    };
    getDataProvince();
  }, []);
  // province render
  const handleChangeProvince = async (code: number | string) => {
    if (code == "") {
      setDistricts([]);
      setWards([]);
    } else {
      const {
        data: { districts },
      } = await getDistrictByProvince(code);
      setDistricts(districts);
    }
  };
  const handleChangeDistrict = async (code: number | string) => {
    if (code == "") {
      setWards([]);
    } else {
      const {
        data: { wards },
      } = await getWardByDistrict(code);
      setWards(wards);
    }
  };
  const addressDataTotal = async (codeP, codeD, codeW) => {
    const province = await getProvince(+codeP);
    const district = await getDistrict(+codeD);
    const ward = await getWard(+codeW);
    return `${province.data.name}, ${district.data.name}, ${ward.data.name}`;
  };

  // checkout
  const onSubmit = async (data) => {
    const address =
      (await addressDataTotal(data.province, data.district, data.ward)) +
      ", " +
      data.address;
    const dataInvoice = {
      fullname: data.fullname,
      phoneNumber: data.phoneNumber,
      email: data.email,
      address,
      note: data.note ? data.note : null,
      total: totalAmount,
      userId: userCurrent.user._id,
    };
    const addInfoOrder = async () => {
      if (cart.length > 0) {
        try {
          const data = await create(dataInvoice);
          const invoiceId = data._id;
          await cart.forEach(async (item) => {
            const dataInvoiceDetail = {
              name: item.name,
              img: item.img,
              size: item.size,
              regularPrice: item.regularPrice,
              salePrice: item.salePrice ? item.salePrice : null,
              quantity: item.quantity,
              total: item.total,
              invoiceId: invoiceId,
            };

            await createDetail(dataInvoiceDetail);
            dispatch(resetCart(""));
          });
          toast.success("Order successfully", {
            position: "top-center",
          });
          route.push(path.public.orderCompleteRoute);
        } catch (error) {
          // console.log(error.response);
          toast.error("Can not order", {
            position: "top-center",
          });
        }
      } else {
        toast.error("Your cart is empty!", {
          position: "top-center",
        });
      }
    };
    addInfoOrder();
  };

  //cart, quantity, total
  let subTotal = 0;
  cart.forEach((item) => {
    subTotal += item.total;
  });
  let totalAmount = subTotal + 5;

  // check vao trang checkout: user && cart != []
  if (!isLogin && cart.length === 0) {
    route.push(path.public.notFound);
  }
  return (
    <div>
      <div className="tw-text-center">
        <div
          className={`${
            styles["progress_of_customer"]
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
        <form
          action=""
          className={styles["form_checkout"]}
          onSubmit={handleSubmit(onSubmit)}
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
        </form>

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
                    {formatPrice(subTotal)}
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
                  <span className="tw-font-semibold tw-text-xl">$00</span>
                </div>
              </div>
            </div>
            <div className={styles["row-infor_checkout"]}>
              <span className={styles["color-text-infor_checkout"]}>
                Total:
              </span>
              <span className="tw-font-semibold tw-text-2xl tw-text-primary">
                {formatPrice(totalAmount)}
              </span>
            </div>
            <form action="">
              <input
                type="text"
                placeholder="Voucher"
                className={styles["input-form_checkout"]}
              />
              <Button.Transparent
                className="tw-w-full tw-mt-3"
                content={"Apply Voucher"}
              />
            </form>
            <form action="">
              <Button.Fill
                className="tw-w-full tw-mt-3"
                content={"Checkout Now "}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;