import instance from "./instance";

export const getAll = () => {
  return instance.get("/invoiceDetails");
};
export const add = (invoice: any) => {
  return instance.post("/invoiceDetail", invoice);
};
export const read = (id: any) => {
  return instance.get(`/invoiceDetail/${id}`);
};
