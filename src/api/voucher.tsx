import instance from "./instance";

export const getAll = () => {
  return instance.get("/vouchers");
};
export const add = (voucher: any) => {
  return instance.post("/vouchers", voucher);
};
export const removeItem = (id: any) => {
  return instance.delete(`/vouchers/${id}`);
};
export const update = (voucher: any) => {
  return instance.put(`/vouchers/${voucher._id}`, voucher);
};
export const read = (id: any) => {
  return instance.get(`/vouchers/${id}`);
};
