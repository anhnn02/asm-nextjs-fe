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
export const filter = () => {
  return instance.get(`/filter?limit=8`);
};
export const search = (keyword) => {
  let url = `/search?name=${keyword}`;
  return instance.get(url);
}