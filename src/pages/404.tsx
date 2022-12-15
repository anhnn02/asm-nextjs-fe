/* eslint-disable @next/next/no-img-element */
import React from "react";
import LayoutEmpty from "../components/Layout/empty";
import Button from "@/components/Button";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="tw-h-screen tw-flex tw-text-center tw-p-3">
      <div className="tw-m-auto">
        <img
          className="tw-inline-block tw-w-96"
          src="https://bonik-react.vercel.app/assets/images/illustrations/404.svg"
          alt=""
        />
        <div className="tw-my-6">
          <Link href="/">
            <Button.Fill className="" content={"Go to Home"} />
          </Link>
        </div>
      </div>
    </div>
  );
};
NotFound.Layout = LayoutEmpty;
export default NotFound;
