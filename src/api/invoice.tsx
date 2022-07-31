import instance from "./instance";

export const getAll = () => {
  return instance.get("/invoices");
};
export const add = (invoice: any) => {
  return instance.post("/invoices", invoice);
};
export const removeItem = (id: any) => {
  return instance.delete(`/invoices/${id}`);
};
export const update = (invoice: any) => {
  return instance.put(`/invoice/${invoice?._id}`, invoice);
};
export const read = (id: any) => {
  return instance.get(`/invoices/${id}`);
};
