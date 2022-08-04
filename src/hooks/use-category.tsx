import React from "react";
import useSWR from "swr";
import { add, getProInCate, read, readC, removeItem, update } from "../api/category";

const useCate = () => {
  const { data, error, mutate } = useSWR(`/categories`);

  const remove = async (id: any) => {
    const confirm = window.confirm("Do u want to remove this category ?");
    if (confirm) {
      await removeItem(id);
      mutate(data.filter((item: any) => item.id !== id));
    }
  };
  const create = async (cate: any) => {
    const addCate = await add(cate);
    mutate([...data, addCate]);
  };
  const detail = async (id: any) => {
    const addCate = await getProInCate(id);
    return addCate;
  };
  const editCate = async (cate: any) => {
    await update(cate);
    mutate(data.map((item: any) => (item.id === data.id ? cate : item)));
  };
 
  return {
    data,
    error,
    remove,
    create,
    detail,
    editCate,
  };
};

export default useCate;
