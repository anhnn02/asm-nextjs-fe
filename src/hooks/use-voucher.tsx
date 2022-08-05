import React from "react";
import useSWR from "swr";
import { read, removeItem, update, add } from "../api/voucher";

const useVoucher = () => {
  const { data, error, mutate } = useSWR(`/vouchers`);

  const create = async (item: any) => {
    const addVoucher = await add(item);
    mutate([...data, addVoucher]);
  };
  const remove = async (id: any) => {
    const confirm = window.confirm("Do you want to remove this voucher ?");
    if (confirm) {
      await removeItem(id);
      mutate(data.filter((item: any) => item.id !== id));
    }
  };
  const detail = async (id: any) => {
    const addVoucher = await read(id);
    return addVoucher;
  };
  const edit = async (voucher: any) => {
    await update(voucher);
    mutate(data.map((item: any) => (item.id === data.id ? voucher : item)));
  };

  return {
    data,
    error,
    remove,
    detail,
    edit,
    create
  };
};

export default useVoucher;
