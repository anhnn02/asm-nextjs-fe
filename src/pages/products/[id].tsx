/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./Product.module.scss";
import Icon from "@/components/Icon";
import Button from "@/components/Button";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import ListProduct from "@/components/client/shop/ListProduct";
import { formatPercent, formatPrice } from "@/utils/formatNumber";
import Link from "next/link";
import { path } from "@/constants";

type ProductProps = {
  product: any[];
  related: any[];
};
const DetailProduct = ({ product, related }: ProductProps) => {
  if (!product) return null;
  console.log(product);
  return (
    <div className={styles["container"]}>
      <div className={styles["grid"]}>
        <div>
          <img className="" src="https://i.imgur.com/hdxSFAS.png" />
          <div className={styles["box"]}>
            <img
              className={styles["image"]}
              src="https://i.imgur.com/hdxSFAS.png"
            />
            <img
              className={styles["image"]}
              src="https://i.imgur.com/hdxSFAS.png"
            />
            <img
              className={styles["image"]}
              src="https://i.imgur.com/hdxSFAS.png"
            />
          </div>
        </div>

        <form className={styles["container-text"]}>
          <h3 className={styles["grid-text"]}>{product.name}</h3>
          <div className={styles["grid-pad"]}>
            <span className={styles["grid-info"]}> Category: </span>
            <Link href={`${path.public.productRoute}/${product.category._id}`}>
              <span>{product.category.name}</span>
            </Link>
          </div>
          <div className={styles["grid-pad"]}>
            <span className={styles["grid-info"]}> Rated: </span>
            <Icon.StarFill />
            <Icon.StarFill />
            <Icon.StarFill />
            <Icon.StarFill />
          </div>
          <div className="">
            <span className={`${styles["shop-product-price--sale"]}`}>
              {product.salePrice
                ? formatPrice(product.salePrice)
                : formatPrice(product.regularPrice)}
            </span>
            <span
              className={`${styles["shop-product-price"]} ${styles["shop-product-price--regular"]}`}
            >
              {product.salePrice ? formatPrice(product.regularPrice) : ""}
            </span>
            <span
              className={` ${styles["shop-product__item-float--tag-sale"]}`}
            >
              {product.salePrice ? (
                <span className="product-tag product-tag--sale">
                  {formatPercent(product.salePrice, product.regularPrice)}
                </span>
              ) : (
                ""
              )}
            </span>
            <p className=""> Stok Available </p>
          </div>
          <div className={styles["check"]}>
            <span>Size: &nbsp; </span>
            <div className={styles["check-form"]}>
              <input type="Radio" className={styles["check-size"]} />
              <label htmlFor="">{product.size}</label>
            </div>
            <div className={styles["check-form"]}>
              <input type="Radio" className={styles["check-size"]} />
              <label htmlFor="">36</label>
            </div>
            <div className={styles["check-form"]}>
              <input type="Radio" className={styles["check-size"]} />
              <label htmlFor="">37</label>
            </div>
            <div className={styles["check-form"]}>
              <input type="Radio" className={styles["check-size"]} />
              <label htmlFor="">38</label>
            </div>
            <div className={styles["check-form"]}>
              <input type="Radio" className={styles["check-size"]} />
              <label htmlFor="">39</label>
            </div>
            <div className={styles["check-form"]}>
              <input type="Radio" className={styles["check-size"]} />
              <label htmlFor="">40</label>
            </div>
          </div>
          <div className={styles["number"]}>
            <Button.Transparent
              className={styles["number-iconnr"]}
              content={<Icon.PlusRegular />}
            />
            <Button.None content="1" />
            <Button.Transparent
              className={styles["number-iconnl"]}
              content={<Icon.Dash />}
            />
          </div>
          <Button.Fill className="tw-px-8" content={"Add to cart"} />
          <div className={styles["grid-heith"]}>
            <span className={styles["grid-info"]}> Sold By: </span>
            <span>Mobile Store</span>
          </div>
        </form>
      </div>
      <h1 className={styles["h1"]}>Description</h1>
      <div className={styles["desc"]}>
        <div className="">
          <p>{product.desc}</p>
        </div>
      </div>
      <h1 className={styles["h1"]}>Related Products</h1>
      <div className={styles["product"]}>
        <ListProduct data={related} />
      </div>
    </div>
  );
};
export const getStaticPaths: GetStaticPaths = async () => {
  const data = await (await fetch(`http://localhost:3001/api/products`)).json();
  const paths = data.map((item: { id: any }) => {
    return { params: { id: item._id } };
  });
  return {
    paths,
    fallback: "blocking",
  };
};

//Chạy ở server
export const getStaticProps: GetStaticProps<ProductProps> = async (
  context: GetStaticPropsContext
) => {
  const dataItem = await (
    await fetch(`http://localhost:3001/api/product/${context.params?.id}`)
  ).json();

  if (!dataItem)
    return {
      notFound: true,
    };
  const dataList = await (
    await fetch(
      `http://localhost:3001/api/categories/${dataItem.category?._id}/${context.params?.id}`
    )
  ).json();
  if (!dataList)
    return {
      notFound: true,
    };
  return {
    props: {
      product: dataItem,
      related: dataList,
    },
    revalidate: 5,
  };
};

export default DetailProduct;
