import instance from "./instance";

export const add = (slide: any) => {
    return instance.post("/slides", slide)
}
export const removeItem = (id: any) => {
    return instance.delete(`/slides/${id}`)
}

export const update = (slide: any) => {
  return instance.put(`/slides/${slide.id}`, slide);
};
export const read = (id: any) => {
  return instance.get(`/slides/${id}`);
};