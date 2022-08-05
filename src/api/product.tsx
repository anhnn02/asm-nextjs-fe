import { IProduct } from "@/models/product";
import instance from "./instance";

export const getAll = () => {
    return instance.get('/products');
}
export const add = (product: IProduct) => {
    return instance.post("/products", product);
};
export const removeItem = (id: string) => {
    return instance.delete(`/product/${id}`);
};
export const update = (product: IProduct) => {
  return instance.put(`/product/${product._id}`, product);
};
export const read = (id: string | undefined) => {
  return instance.get(`/product/${id}`);
};
export const filter = () => {
  return instance.get(`/filter?limit=8`);
};
export const search = (keyword) => {
  let url = `/search?name=${keyword}`;
  return instance.get(url);
}
export const relatedProduct = (idCate: string, idPro: string) => {
  let url = `/categories/${idCate}/${idPro}`;
  return instance.get(url);
}