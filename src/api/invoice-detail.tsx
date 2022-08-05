import { IInvoiceDetail } from "@/models/invoiceDetail";
import instance from "./instance";

export const getAll = () => {
  return instance.get("/invoiceDetails");
};
export const add = (invoice: IInvoiceDetail) => {
  return instance.post("/invoiceDetails", invoice);
};
export const read = (id: any) => {
  return instance.get(`/invoiceDetail/${id}`);
};
