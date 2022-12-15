
import { IUser } from "@/models/user";
import instance from "./instance";

export const signup = (user : IUser) => {
    return instance.post("/register", user);
}
export const list = (url) => {
    return instance.get(url);
}
export const signin = (user : IUser) => {
    return instance.post("/login", user);
}

export const read = (id: any) => {
    return instance.get(`/user/${id}`);
}