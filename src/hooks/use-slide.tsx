import React from "react";
import useSWR from "swr";
import { removeItem, update, add } from "../api/slide";

const useSlide = () => {
  const { data, error, mutate } = useSWR(`/banners`);

  const remove = async (id: any) => {
        const confirmItem = confirm('Bạn có muốn xóa không?')
        if (confirmItem) {
            await removeItem(id)
            const newSlide = data.filter((item: any) => item.id != id)
            mutate(newSlide)
        }
    }

  const create = async (item: any) => {
    const addSlide = await add(item);
    mutate([...data, addSlide]);
  };
  
  const edit = async (slide: any) => {
    await update(slide);
    mutate(data.map((item: any) => (item.id === data.id ? slide : item)));
  };

  return {
    data,
    error,
    remove,
    create,
    edit,
  };
};

export default useSlide