import instance from "./instance";

export const getAll = () => {
    return instance.get('/products');
}
export const add = (product: any) => {
    return instance.post("/products", product);
};
export const removeItem = (id: any) => {
    return instance.delete(`/product/${id}`);
};
export const update = (product: any) => {
  return instance.put(`/product/${product._id}`, product);
};
export const read = (id: any) => {
  return instance.get(`/product/${id}`);
};
