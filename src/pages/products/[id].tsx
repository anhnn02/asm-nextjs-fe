/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import styles from "./Product.module.scss";
import Icon from "@/components/Icon";
import Button from "@/components/Button";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import ListProduct from "@/components/client/shop/ListProduct";
import { formatPercent, formatPrice } from "@/utils/formatNumber";
import Link from "next/link";
import { path } from "@/constants";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addItemToCart } from "@/features/cart/cart.slice";
import { toast } from 'react-toastify';

type ProductProps = {
  product: any[];
  related: any[];
};
const DetailProduct = ({ product, related }: ProductProps) => {
  const [quantity, setQuantity] = useState(1)
  const { register, handleSubmit, formState: { errors } } = useForm()
  const dispatch = useDispatch();

  const handleAddToCart = (data) => {
    const itemCart = {
      idInCart: product._id + '_' + data.size,
      idPro: product._id,
      size: data.size,
      img: product.img,
      quantity: quantity * 1,
      name: product.name,
      desc: product.desc,
      regularPrice: product.regularPrice * 1,
      salePrice: product.salePrice * 1,
      categoryProduct: product.category,
      total: (product.salePrice) ? product.salePrice * quantity : product.regularPrice * quantity
    }
    dispatch(addItemToCart(itemCart))
    setQuantity(1)
    toast.success("Add to cart successfully!", {
      position: 'top-center'
    })
  }

  const incrementQuantity = () => {
    setQuantity(quantity + 1)
  }
  const decrementQuantity = () => {
    if (quantity < 2) {
      setQuantity(1)
    } else {
      setQuantity(quantity - 1)
    }

  }
  if (!product) return <div className="">Loading...</div>;
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

        <form className={styles["container-text"]} onSubmit={handleSubmit(handleAddToCart)}>
          <h3 className={styles["grid-text"]}>{product.name}</h3>
          <div className={styles["grid-pad"]}>
            <span className={styles["grid-info"]}> Category: </span>
            <Link href={`${path.public.productRoute}/${product.category._id}`}>
              <span>{product.category.name}</span>
            </Link>
          </div>
          <div className={styles["grid-pad"]}>
            <span className={styles["grid-info"]}> Rated: </span>
            <div className="tw-inline-block tw-space-x-1">
              <Icon.StarFill className="tw-text-star tw-text-xl" />
              <Icon.StarFill className="tw-text-star tw-text-xl" />
              <Icon.StarFill className="tw-text-star tw-text-xl" />
              <Icon.StarFill className="tw-text-star tw-text-xl" />
            </div>
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
            <div className={styles["size-product-detail"]}>
              {product.size.map((size, index) => (
                <div key={index} className={`${styles['form-group']} ${styles[`form-group-${size}`]}`}>
                  <input type="radio" value={size} id={`size_${index}`} {...register('size', { required: true })} />
                  <label htmlFor={`size_${index}`}></label>
                </div>
              ))}
            </div>
          </div>
          {errors.size && (<div className="my-error !tw-text-lg">Please choose a size!</div>)}
          <div className={styles["number"]}>
            <button type="button" className={styles['cart-sidebar__button']}
              onClick={() => decrementQuantity()}>
              <Icon.Dash />
            </button>
            <span>{quantity}</span>
            <button type="button" className={styles['cart-sidebar__button']}
              onClick={() => incrementQuantity()}>
              <Icon.PlusRegular />
            </button>
          </div>
          <Button.Fill className="tw-px-10" content={"Add to cart"} />
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
