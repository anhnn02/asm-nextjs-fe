import axios from "axios";

const instance = axios.create({
    baseURL: "https://asm-nextjs-be.vercel.app/api",
});
instance.interceptors.response.use(
    function (response) {
        return response.data;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export default instance


