/* eslint-disable @next/next/no-img-element */
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import { path } from "@/constants";
import { formatPercent, formatPrice } from "@/utils/formatNumber";
import Link from "next/link";
import React from "react";
import styles from "./ListProduct.module.scss";

type Props = {
  data: {}[];
};

const ListProduct = ({ data }: Props) => {
  if (!data) return <div className="">Loading...</div>;
  return (
    <>
      {!data.relatedProduct ? <>
        {data?.map((item, index) => (
          <div key={index} className={styles["shop-product__item"]}>
            <div className={styles["shop-product__item-img"]}>
              <span
                className={`${styles["shop-product__item-float"]} ${styles["shop-product__item-float--tag-sale"]}`}
              >
                {item.salePrice ? (
                  <span className="product-tag product-tag--sale">
                    {formatPercent(item.salePrice, item.regularPrice)}
                  </span>
                ) : (
                  ""
                )}
              </span>
              <button
                className={`${styles["shop-product__item-float"]} ${styles["shop-product__item-float--action"]}`}
              >
                <Icon.HeartFill />
              </button>
              <Link href={`${path.public.productRoute}/${item._id}`}>
                <img src={item.img} alt="" />
              </Link>
            </div>
            <div className={styles["shop-product__item-text"]}>
              <h3>
                <Link href={`${path.public.productRoute}/${item._id}`}>
                  <a href="" className={styles["shop-product__item-title"]}>
                    {item.name}
                  </a>
                </Link>
              </h3>
              <div className={styles["shop-product__item-row"]}>
                <span className={styles["shop-product-star"]}>
                  <Icon.Star />
                  <Icon.Star />
                  <Icon.Star />
                  <Icon.Star />
                  <Icon.Star />
                </span>
                <div className={styles["shop-product__item-variation"]}>
                  {item.size.length > 3 ? (
                    <div>
                      <span
                        className={styles["shop-product-variation__item"]}
                      >
                        {item.size[0]}
                      </span>
                      <span
                        className={styles["shop-product-variation__item"]}
                      >
                        {item.size[1]}
                      </span>
                      <span
                        className={styles["shop-product-variation__item"]}
                      >
                        {item.size[2]}
                      </span>
                      <span>...</span>
                    </div>
                  ) : (
                    item.size.map((sizeItem) => (
                      <span
                        className={styles["shop-product-variation__item"]}
                      >
                        {sizeItem}
                      </span>
                    ))
                  )}
                </div>
              </div>
              <div className={styles["shop-product__item-row"]}>
                <div className="">
                  <span
                    className={`${styles["shop-product-price"]} ${styles["shop-product-price--sale"]}`}
                  >
                    {item.salePrice
                      ? formatPrice(item.salePrice)
                      : formatPrice(item.regularPrice)}
                  </span>
                  <span
                    className={`${styles["shop-product-price"]} ${styles["shop-product-price--regular"]}`}
                  >
                    {item.salePrice ? formatPrice(item.regularPrice) : ""}
                  </span>
                </div>
                <Button.Transparent
                  className="!tw-py-[1px] !tw-px-1 !tw-min-h-0 !tw-h-[30px]"
                  content={<Icon.PlusRegular className="tw-text-[21px]" />}
                />
              </div>
            </div>
          </div>
        ))}
      </> : (data.relatedProduct.length === 0) ? <span className="tw-text-red-500">Have no related products!
      </span> : <>
        {data?.relatedProduct.map((item, index) => (
          <div key={index} className={styles["shop-product__item"]}>
            <div className={styles["shop-product__item-img"]}>
              <span
                className={`${styles["shop-product__item-float"]} ${styles["shop-product__item-float--tag-sale"]}`}
              >
                {item.salePrice ? (
                  <span className="product-tag product-tag--sale">
                    {formatPercent(item.salePrice, item.regularPrice)}
                  </span>
                ) : (
                  ""
                )}
              </span>
              <button
                className={`${styles["shop-product__item-float"]} ${styles["shop-product__item-float--action"]}`}
              >
                <Icon.HeartFill />
              </button>
              <Link href={`${path.public.productRoute}/${item._id}`}>
                <img src={item.img} alt="" />
              </Link>
            </div>
            <div className={styles["shop-product__item-text"]}>
              <h3>
                <Link href={`${path.public.productRoute}/${item._id}`}>
                  <a href="" className={styles["shop-product__item-title"]}>
                    {item.name}
                  </a>
                </Link>
              </h3>
              <div className={styles["shop-product__item-row"]}>
                <span className={styles["shop-product-star"]}>
                  <Icon.Star />
                  <Icon.Star />
                  <Icon.Star />
                  <Icon.Star />
                  <Icon.Star />
                </span>
                <div className={styles["shop-product__item-variation"]}>
                  {item.size.length > 3 ? (
                    <div>
                      <span
                        className={styles["shop-product-variation__item"]}
                      >
                        {item.size[0]}
                      </span>
                      <span
                        className={styles["shop-product-variation__item"]}
                      >
                        {item.size[1]}
                      </span>
                      <span
                        className={styles["shop-product-variation__item"]}
                      >
                        {item.size[2]}
                      </span>
                      <span>...</span>
                    </div>
                  ) : (
                    item.size.map((sizeItem) => (
                      <span
                        className={styles["shop-product-variation__item"]}
                      >
                        {sizeItem}
                      </span>
                    ))
                  )}
                </div>
              </div>
              <div className={styles["shop-product__item-row"]}>
                <div className="">
                  <span
                    className={`${styles["shop-product-price"]} ${styles["shop-product-price--sale"]}`}
                  >
                    {item.salePrice
                      ? formatPrice(item.salePrice)
                      : formatPrice(item.regularPrice)}
                  </span>
                  <span
                    className={`${styles["shop-product-price"]} ${styles["shop-product-price--regular"]}`}
                  >
                    {item.salePrice ? formatPrice(item.regularPrice) : ""}
                  </span>
                </div>
                <Button.Transparent
                  className="!tw-py-[1px] !tw-px-1 !tw-min-h-0 !tw-h-[32px]"
                  content={<Icon.PlusRegular className="tw-text-2xl" />}
                />
              </div>
            </div>
          </div>
        ))}
      </>}
    </>
  );
};

export default ListProduct;
