import {
  getDistrict,
  getDistrictByProvince,
  getProvince,
  getProvinces,
  getWard,
  getWardByDistrict,
} from "@/api/addressCheckout";
import { updateStt } from "@/api/voucher";
import Button from "@/components/Button";
import { path } from "@/constants";
import { resetCart } from "@/features/cart/cart.slice";
import useInvoice from "@/hooks/use-invoice";
import useInvoiceDetail from "@/hooks/use-invoiceDetail";
import useVoucher from "@/hooks/use-voucher";
import { formatPrice } from "@/utils/formatNumber";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import styles from "./Checkout.module.scss";

const CheckOut = () => {
  const { create } = useInvoice();
  const { create: createDetail } = useInvoiceDetail();
  const dispatch = useDispatch();
  const route = useRouter();
  const userCurrent = useSelector((data: any) => data.user.current);
  const isLogin = useSelector((data: any) => data.user.isAuthenticated);
  const cartTotalQuantity = useSelector((data: any) => data.cart.totalQuantity);
  const cart = useSelector((data: any) => data.cart.items);
  const discount = useSelector((data: any) => data.cart.discount);
  const nameVoucher = useSelector((data: any) => data.cart.voucher);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>();
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

  // address
  const addressDataTotal = async (codeP, codeD, codeW) => {
    const province = await getProvince(+codeP);
    const district = await getDistrict(+codeD);
    const ward = await getWard(+codeW);
    return `${province.data.name}, ${district.data.name}, ${ward.data.name}`;
  };

  // checkout
  const onCheckout = async (data) => {
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
          const data: any = await create(dataInvoice);
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
          // await updateStt({
          //   code: nameVoucher,
          //   status: 1
          // })
          route.push(path.public.orderCompleteRoute);
        } catch (error) {
          console.log(error);
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
      <div className={styles["row_progress_of_customer"]}>
        <div className={styles["progress_of_customer"]}>
          <div className={styles["format_progress_of_customer"]}>
            <div className={styles["step_progress-active"]}>
              <Link href={path.public.cartRoute}>1. Cart</Link>
            </div>
            <div className={styles["line_progress-active"]}></div>
            <div className={styles["step_progress-active"]}>
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
        <div className={styles["clone_sidebar_invisible"]}></div>
      </div>
      <div className={styles["content_checkout"]}>
        <form
          action=""
          className={styles["form_checkout"]}
          onSubmit={handleSubmit(onCheckout)}
        >
          <div className={styles["form_checkout_inside"]}>
            <div className={styles["header-form_checkout"]}>
              <h3 className="tw-capitalize tw-font-semibold">
                shipping address
              </h3>
              <div>
                <label
                  htmlFor="my-modal"
                  className="tw-font-semibold tw-text-red-600 tw-underline tw-modal-button tw-cursor-pointer"
                >
                  Use other Address
                </label>
                <input
                  type="checkbox"
                  id="my-modal"
                  className="tw-modal-toggle"
                />
                <div className="tw-modal">
                  <div className="tw-modal-box">
                    <h3 className="text-lg tw-font-bold">
                      Congratulations random Internet user!
                    </h3>
                    <p className="tw-py-4">
                      You have been selected for a chance to get one year of
                      subscription to use Wikipedia for free!
                    </p>
                    <div className="tw-modal-action">
                      <label htmlFor="my-modal" className="tw-btn">
                        Yay!
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles["form__row"]}>
              <div>
                <label className={styles["label-form_checkout"]} htmlFor="">
                  full name
                </label>
                <input
                  className={styles["input-form_checkout"]}
                  type="text"
                  {...register("fullname", {
                    required: {
                      value: true,
                      message: "Full name is required",
                    },
                  })}
                />
                <span className="my-error">
                  {errors?.fullname
                    ? (errors?.fullname.message as unknown as string)
                    : ""}
                </span>
              </div>
            </div>
            <div className={styles["form__row--2-cols"]}>
              <div>
                <label className={styles["label-form_checkout"]} htmlFor="">
                  phone number
                </label>
                <input
                  className={styles["input-form_checkout"]}
                  type="text"
                  {...register("phoneNumber", {
                    required: {
                      value: true,
                      message: "Field is required",
                    },
                  })}
                />
                <span className="my-error">
                  {errors?.phoneNumber
                    ? (errors?.phoneNumber.message as unknown as string)
                    : ""}
                </span>
              </div>
              <div>
                <label className={styles["label-form_checkout"]} htmlFor="">
                  email
                </label>
                <input
                  className={styles["input-form_checkout"]}
                  type="text"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Field is required",
                    },
                    pattern: {
                      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                      message: "Field must be a valid email",
                    },
                  })}
                />
                <span className="my-error">
                  {errors?.email
                    ? (errors?.email.message as unknown as string)
                    : ""}
                </span>
              </div>
            </div>
            <div className={styles["form__row--3-cols"]}>
              <div>
                <label className={styles["label-form_checkout"]} htmlFor="">
                  province
                </label>
                {provinces ? (
                  <select
                    className={styles["select-form_checkout"]}
                    name=""
                    id=""
                    {...register("province", {
                      required: {
                        value: true,
                        message: "Field is required",
                      },
                    })}
                    onChange={(e) => handleChangeProvince(e.target.value)}
                  >
                    <option value="">--Choose province--</option>
                    {provinces?.map((item, index) => (
                      <option key={index} value={item?.code}>
                        {item?.name}
                      </option>
                    ))}
                  </select>
                ) : (
                  <select
                    className={styles["select-form_checkout"]}
                    name=""
                    id=""
                  >
                    <option value="">--Choose province--</option>
                  </select>
                )}
                <span className="my-error">
                  {errors?.email
                    ? (errors?.email.message as unknown as string)
                    : ""}
                </span>
              </div>
              <div>
                <label className={styles["label-form_checkout"]} htmlFor="">
                  district
                </label>
                {districts && districts.length > 0 ? (
                  <select
                    className={styles["select-form_checkout"]}
                    name=""
                    id=""
                    {...register("district", {
                      required: {
                        value: true,
                        message: "Field is required",
                      },
                    })}
                    onChange={(e) => handleChangeDistrict(e.target.value)}
                  >
                    <option value="">--Choose district--</option>
                    {districts?.map((item, index) => (
                      <option key={index} value={item?.code}>
                        {item?.name}
                      </option>
                    ))}
                  </select>
                ) : (
                  <select
                    className={styles["select-form_checkout"]}
                    {...register("district", {
                      required: {
                        value: true,
                        message: "Field is required",
                      },
                    })}
                    name=""
                    id=""
                    disabled
                  >
                    <option value="">--Choose district--</option>
                  </select>
                )}
                <span className="my-error">
                  {errors?.district
                    ? (errors?.district.message as unknown as string)
                    : ""}
                </span>
              </div>
              <div>
                <label className={styles["label-form_checkout"]} htmlFor="">
                  ward
                </label>
                {wards && wards.length > 0 ? (
                  <select
                    className={styles["select-form_checkout"]}
                    name=""
                    id=""
                    {...register("ward", {
                      required: {
                        value: true,
                        message: "Field is required",
                      },
                    })}
                  >
                    <option value="">--Choose ward--</option>
                    {wards?.map((item, index) => (
                      <option key={index} value={item?.code}>
                        {item?.name}
                      </option>
                    ))}
                  </select>
                ) : (
                  <select
                    className={styles["select-form_checkout"]}
                    {...register("ward", {
                      required: {
                        value: true,
                        message: "Field is required",
                      },
                    })}
                    name=""
                    id=""
                    disabled
                  >
                    <option value="" disabled selected>
                      --Choose ward--
                    </option>
                  </select>
                )}
                <span className="my-error">
                  {errors?.ward
                    ? (errors?.ward.message as unknown as string)
                    : ""}
                </span>
              </div>
            </div>
            <div className={styles["form__row"]}>
              <div>
                <label className={styles["label-form_checkout"]} htmlFor="">
                  address detail
                </label>
                <input
                  className={styles["input-form_checkout"]}
                  type="text"
                  {...register("address", {
                    required: {
                      value: true,
                      message: "Field is required",
                    },
                    minLength: {
                      value: 2,
                      message: "Min length is 2",
                    },
                  })}
                />
                <span className="my-error">
                  {errors?.address
                    ? (errors?.address.message as unknown as string)
                    : ""}
                </span>
              </div>
            </div>
            <div className={styles["form__row"]}>
              <label className={styles["label-form_checkout"]} htmlFor="">
                note
              </label>
              <textarea
                className={styles["textarea-form_checkout"]}
                {...register("note", {
                  minLength: {
                    value: 2,
                    message: "Min length is 2",
                  },
                })}
              ></textarea>
              <span className="my-error">
                {errors?.note
                  ? (errors?.note.message as unknown as string)
                  : ""}
              </span>
            </div>
          </div>
          <div className={styles["submit-form_checkout"]}>
            <Link href={path.public.cartRoute}>
              <Button.Transparent
                type="button"
                className="tw-bg-white"
                content={"Back to Cart"}
              />
            </Link>
            <Button.Fill className={""} content={"Proceed to Complete"} />
          </div>
        </form>
        <div className={styles["sidebar_checkout"]}>
          <div className={styles["sidebar_checkout_inside"]}>
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
                  <span className="tw-font-semibold tw-text-xl">
                    -{formatPrice(discount)}
                  </span>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
