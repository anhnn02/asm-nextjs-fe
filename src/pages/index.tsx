/* eslint-disable @next/next/no-img-element */
import Button from "@/components/Button";
import Category from "@/components/client/category/category";
import Banner from "@/components/client/Slide banner/Slide";
import TopListProduct from "@/components/client/TopProducts/TopListProduct";
import Icon from "@/components/Icon";
import Product from "@/features/products/product.component";
import { NextPage } from "next";
import { ToastContainer, toast } from "react-toastify";
import styles from "../styles/client/Home.module.scss";
import stylesAdmin from "@/styles/admin/Admin.module.scss";
import Services from "@/components/client/services/services"
import SubBanner from '@/components/client/sub-banner/subBanner'
import Slider from "react-slick";
import Card from "react-bootstrap/Card";

const Home: NextPage = () => {
  const notify = () => {
    // toast.error('🦄 Wow so easy!', {
    //     position: "top-center",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    // });
  };
  return (
    <div className={styles["homepage"]}>
      <div className={styles["section"]}>Slide</div>
      <div className={styles["section"]}>
        <Banner />
      </div>
      <div className={styles["section"]}>
        <div className="tw-flex tw-gap-1">
          <div className="tw-mt-4">
            <img
              width={25}
              className="tw-opacity-75"
              src="https://i.imgur.com/vtH35n7.png"
              alt=""
            />
          </div>
          <div className="">
            <h4 className="tw-font-semibold tw-text-2xl tw-py-4">
              Top 8 Products News
            </h4>
          </div>
        </div>

        <div className="tw-grid tw-grid-cols-4 tw-gap-6">
          <TopListProduct />
        </div>
      </div>
      <div className={styles["section"]}>
        <div className={styles["banner"]}>
          <SubBanner />
        </div>
      </div>
      <div className={styles["section"]}>Slide</div>
      <div className={styles["section"]}>
      </div>
      <div className={styles["section"]}>
        <Services />
      </div>

    </div >
  );
};
export default Home;
