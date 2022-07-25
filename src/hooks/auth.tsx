import { sign } from "crypto";
import { listenerCount } from "process";
import useSWR, { useSWRConfig } from "swr";
import { list, signup } from "../api/auth";

export const useAuth = (options?) => {
  const { data, error, mutate } = useSWR("/users", { ...options });

  //get list user
  const fetcher = async (url: string) => {
    const data = await list(url);
    return data;
  };
 
  //register
  const register = async (user) => {
    const account = await signup(user);
    mutate([...data, account]);
  };

  const profile = (id) => {
    mutate(`/users/${id}`);
  };
  //login
  //logout

  return {
    data,
    error,
    register,
    profile,
  };
};
