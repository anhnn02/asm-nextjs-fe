import React from "react";
import useSWR from "swr";
import { read, removeItem, update } from "../api/user";

const useUser = () => {
  const { data, error, mutate } = useSWR(`/users`);

  const remove = async (id: any) => {
    const confirm = window.confirm("Do you want to remove this user ?");
    if (confirm) {
      await removeItem(id);
      mutate(data.filter((item: any) => item.id !== id));
    }
  };
  const detail = async (id: any) => {
    const addUser = await read(id);
    return addUser;
  };
  const editUser = async (user: any) => {
    await update(user);
    mutate(data.map((item: any) => (item.id === data.id ? user : item)));
  };

  return {
    data,
    error,
    remove,
    detail,
    editUser,
  };
};

export default useUser;
