import React from "react";
import useSWR from "swr";
import { add, read, removeItem, update } from "../api/invoice";

const useInvoice = () => {
  const { data, error, mutate } = useSWR(`/invoices`);

  const remove = async (id: any) => {
    await removeItem(id);
    mutate(data.filter((item: any) => item.id !== id));
  };
  const create = async (invoice: any) => {
    const addInvoice = await add(invoice);
    mutate([...data, addInvoice]);
    return addInvoice
  };
  const detail = async (id: any) => {
    const detailInvoice = await read(id);
    return detailInvoice;
  };
  const editInvoice = async (invoice: any) => {
    const updateInvoice = await update(invoice);
    mutate(data.map((item: any) => (item.id === data.id ? invoice : item)));
    return updateInvoice
  };

  return {
    data,
    error,
    remove,
    create,
    detail,
    editInvoice,
  };
};

export default useInvoice;
