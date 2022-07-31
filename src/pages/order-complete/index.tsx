/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from "./OderDone.module.scss";
import Button from "@/components/Button";
import Link from 'next/link';
import { path } from '@/constants';


type Props = {}

const OderCompleted = (props: Props) => {
  return (
    <div>
      <div className={styles["row_progress_of_customer"]}>
        <div className={styles["progress_of_customer"]}>
          <div className={styles["format_progress_of_customer"]}>
            <div className={styles["step_progress-active"]}>
              <span>1. Cart</span>
            </div>
            <div className={styles["line_progress-active"]}></div>
            <div className={styles["step_progress-active"]}>
              <span>2. Checkout</span>
            </div>
            <div className={styles["line_progress-active"]}></div>
            <div className={styles["step_progress-active"]}>
              <span>3. Order completed</span>
            </div>
          </div>
        </div>
        <div className={styles["clone_sidebar_invisible"]}></div>
      </div>
      <div className="tw-text-center ">
        <span className="tw-font-medium tw-text-green-500 tw-text-xl tw-block">
          You have order successfully!
        </span>
        <span>waiting for confirmation!</span>
      </div>
      <div className=" ">
        <img
          className="tw-w-80 tw-max-w-2/3 tw-mx-auto "
          src="https://i.imgur.com/QEYqkIB.png"
          alt=""
        />
      </div>
      <div className="tw-flex tw-justify-center tw-py-3">
        <Link href={path.public.rootRoute}>
          <Button.Transparent className="tw-mr-3" content="Back Home" />
        </Link>
        <Link href={path.public.ordersRoute}>
          <Button.Fill content="Invoice Detail " />
        </Link>
      </div>
    </div>
  );
}

export default OderCompleted