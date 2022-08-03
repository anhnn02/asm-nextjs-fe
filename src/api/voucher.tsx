import instance from "./instance";

export const getAll = () => {
    return instance.get("/vouchers");
};
export const remove = (id: any) => {
    return instance.delete(`/vouchers/${id}`);
};
export const update = (voucher: string) => {
    return instance.put(`/vouchers/${voucher._id}`, voucher);
};
export const updateStt = (voucher) => {
    return instance.put(`/vouchers`, voucher);
};
export const read = (id: any) => {
    return instance.get(`/vouchers/${id}`);
};
export const readByCode = (voucher) => {
    return instance.post(`/voucher`, voucher);
};
