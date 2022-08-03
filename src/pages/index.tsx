/* eslint-disable @next/next/no-img-element */
import Button from "@/components/Button";
import Category from "@/components/client/category/category";
import Banner from "@/components/client/Slide banner/Slide";
import Icon from "@/components/Icon";
import Product from "@/features/products/product.component";
import { NextPage } from "next";
import { ToastContainer, toast } from "react-toastify";
import styles from "../styles/client/Home.module.scss";
import Slider from "react-slick";
import Card from "react-bootstrap/Card";

const Home: NextPage = () => {
  return (
    <div className={styles["homepage"]}>
      <div className={styles["section"]}>Slide</div>

      <Banner />

      <div className={styles["section"]}></div>

      <div className={styles["section"]}>Slide</div>
      <Category />
      <div className={styles["section"]}>Slide</div>
    </div>
  );
};
export default Home;
