import React from "react";
import useSWR from "swr";
import { read, removeItem, update, add, readByCode, updateStt } from "@/api/voucher";

const useVoucher = () => {
  const { data, error, mutate } = useSWR(`/vouchers`);

  const create = async (item: any) => {
    const addVoucher = await add(item);
    mutate([...data, addVoucher]);
  };
  const remove = async (id: any) => {
    const confirm = window.confirm("Do you want to remove this user?");
    if (confirm) {
      await removeItem(id);
      mutate(data.filter((item: any) => item.id !== id));
    }
  };
  const detail = async (id: any) => {
    const add = await read(id);
    return add;
  };
  const readVoucherStatusByCode = async (voucherCode: any) => {
    const data = await readByCode(voucherCode);
    return data;

  };
  const editVoucherStt = async (voucher: any) => {
    await updateStt(voucher);
    mutate(data.map((item: any) => (item.id === data.id ? voucher : item)));
  };

  return {
    data,
    error,
    create,
    remove,
    detail,
    editVoucherStt,
    readVoucherStatusByCode
  };
};

export default useVoucher;
