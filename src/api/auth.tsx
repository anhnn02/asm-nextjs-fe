
import instance from "./instance";

export const signup = (user) => {
    return instance.post("/register", user);
}
export const list = (url) => {
    return instance.get(url);
}
export const signin = (user) => {
    return instance.post("/login", user);
}

export const read = (id: any) => {
    return instance.get(`/users/${id}`);
}