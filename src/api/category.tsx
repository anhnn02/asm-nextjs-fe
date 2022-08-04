import instance from "./instance";

export const getAll = () => {
  return instance.get("/categories");
};
export const add = (category: any) => {
  return instance.post("/categories", category);
};
export const removeItem = (id: any) => {
  return instance.delete(`/categories/${id}`);
};
export const update = (category: any) => {
  return instance.put(`/categories/${category._id}`, category);
};
export const read = (id: any) => {
  return instance.get(`/category/${id}`);
};
export const readC = (id: any) => {
  return instance.get(`/categories/${id}`);
};
export const getProInCate = (id: any) => {
  return instance.get(`/categories/${id}`);
};
