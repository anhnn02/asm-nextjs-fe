import { sign } from "crypto";
import { listenerCount } from "process";
import useSWR, { useSWRConfig } from "swr";
import { list, signup, signin } from "../api/auth";

export const useAuth = (options?) => {
  const { data, error, mutate } = useSWR("/users", { ...options });

  //register
  const register = async (user) => {
    const account = await signup(user);
    mutate([...data, account]);
  };

  const profile = (id) => {
    mutate(`/users/${id}`);
  };
  //login
  const login = async (user) => {
    const account = await signin(user);
    return account
  };
  //logout

  return {
    data,
    error,
    register,
    profile,
    login
  };
};

