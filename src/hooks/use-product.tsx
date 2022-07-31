import React from "react";
import useSWR from "swr";
import { add, filter, read, removeItem, update } from "../api/product";

const useProduct = () => {
  const { data, error, mutate } = useSWR(`/products`);

  const remove = async (id: any) => {
    const confirm = window.confirm('Do u want to remove this product ?')
    if (confirm) {
      await removeItem(id);
      mutate(data.filter((item: any) => item.id !== id));
    }
  };
  const create = async (product: any) => {
    const addProduct = await add(product);
    mutate([...data, addProduct]);
  };
  const detail = async (id: any) => {
    const addProduct = await read(id);
    return addProduct;
  };
  const editProduct = async (product: any) => {
    await update(product);
    mutate(data.map((item: any) => (item.id === data.id ? product : item)));
  };
  const topListProduct = async () => {
    const topList = await filter();
    return topList ;
  } 

  return {
    data,
    error,
    remove,
    create,
    detail,
    editProduct,
    topListProduct,
  };
};

export default useProduct;
