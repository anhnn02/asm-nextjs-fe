import instance from "./instance";

export const add = (slide: any) => {
    return instance.post("/banners", slide)
}
export const removeItem = (id: any) => {
    return instance.delete(`/banners/${id}`)
}

export const update = (slide: any) => {
  return instance.put(`/banners/${slide.id}`, slide);
};
export const read = (id: any) => {
  return instance.get(`/banners/${id}`);
};