import LayoutAdmin from "@/components/Layout/admin";
import React, { useEffect } from "react";
import styles from "./Edit.module.scss";
import Button from "@/components/Button";
import { useRouter } from "next/router";
import useInvoice from "@/hooks/use-invoice";
import { SubmitHandler, useForm } from "react-hook-form";
import useSWR from "swr";


const EditInvoice = () => {
   const { data, error, detail, editInvoice } = useInvoice();
  //  if (!data) return <div>Loadinggg...</div>
  //  if (error) return <div>Falese</div>  ;

  const router = useRouter()
  const id = router.query.id
  // console.log(id);

  const {register, handleSubmit, formState: {errors}, reset} = useForm()
 
  
  useEffect(() => {
    if(!id) return
    detail(id).then((res: any) => reset(res.invoice));
    
  }, [id])
  const onSubmit : SubmitHandler<any> = async (data: any ) => {
   try {
     await editInvoice(data);
    //  console.log(data);
     router.push("/admin/invoices");
   } catch (error) {
    console.log(error);
   }
    
  }
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
                {...register("fullname", { required: false })}
                name="fullname"
              />
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
                {...register("email", { required: false })}
              />
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
                {...register("phoneNumber", { required: false })}
              />
            </div>
          </div>
          <div className="">
            {/* Status  */}
            <div className="tw-form-control tw-w-full tw-max-w-xs">
              <label className="tw-label">
                <span className="tw-label-text tw-capitalize">Status</span>
              </label>
              <select
                className="tw-select tw-select-secondary tw-w-full tw-max-w-xs"
                name="status"
                {...register("status", { required: false })}
              >
                <option value={0}>Pending</option>
                <option value={1}>Shipping</option>
                <option value={2}>Delivered</option>
                <option value={3}>Cancelled</option>
              </select>
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
EditInvoice.Layout = LayoutAdmin;

export default EditInvoice;
