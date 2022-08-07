/* eslint-disable @next/next/no-img-element */
import Banner from "@/components/client/Slide banner/Slide";
import TopListProduct from "@/components/client/TopProducts/TopListProduct";
import { NextPage } from "next";
import styles from "../styles/client/Home.module.scss";
import Services from "@/components/client/services/services"
import SubBanner from '@/components/client/sub-banner/subBanner'
import BigDiscountProduct from "@/components/client/BigDiscountProducts/BigDiscountProducts";
import Icon from "@/components/Icon";
import Category from "@/components/client/category/category";

const Home: NextPage = () => {
  return (
    <div className={styles["homepage"]}>
      <div className={styles["section"]}>
        <Banner />
      </div>
      <div className={styles["section"]}>
        <Category />
      </div>
      <div className={styles["section"]}>
        <div className={styles["banner"]}>
          <SubBanner />
        </div>
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
        <div className="tw-flex tw-gap-1">
          <div className="tw-mt-4">
            <Icon.Gift className={"tw-text-xl tw-font-semibold tw-text-primary"} />
          </div>
          <div className="">
            <h4 className="tw-font-semibold tw-text-2xl tw-py-4">
              Big Discount
            </h4>
          </div>
        </div>
        <BigDiscountProduct />
      </div>
      <div className={styles["section"]}>
        <Services />
      </div>
    </div >
  );
};
export default Home;
