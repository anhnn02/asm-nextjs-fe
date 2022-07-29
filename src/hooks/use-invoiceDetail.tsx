import React from "react";
import useSWR from "swr";
import { add, read } from "../api/invoice-detail";

const useInvoiceDetail = () => {
  const { data, error, mutate } = useSWR(`/invoiceDetails`);

  const create = async (detail: any) => {
    const addDetail = await add(detail);
    mutate([...data, addDetail]);
  };

  const detail = async (id: any) => {
    const dataDetail = await read(id);
    // console.log(dataDetail); 
    return dataDetail;
  };

  return {
    data,
    error,
    create,
    detail,
  };
};

export default useInvoiceDetail;
