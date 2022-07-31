import instance from "./instance";

export const getAll = () => {
  return instance.get("/users");
};
export const removeItem = (id: any) => {
  return instance.delete(`/user/${id}`);
};
export const update = (user: any) => {
  return instance.put(`/user/${user._id}`, user);
};
export const read = (id: any) => {
  return instance.get(`/user/${id}`);
};
