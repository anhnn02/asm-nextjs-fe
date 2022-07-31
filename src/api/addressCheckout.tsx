import axios from "axios";

export const URL_PROVINCE = "https://provinces.open-api.vn/api";

export const getProvinces = async  () => {
    const data = await axios.get(`${URL_PROVINCE}/p`);
    return data
}
export const getProvince = async (code: number | string) => {
    const data = await axios.get(`${URL_PROVINCE}/p/${code}`);
    return data
}
export const getDistrictByProvince = async (code: number | string) => {
    const data = await axios.get(`${URL_PROVINCE}/p/${code}/?depth=2`);
    return data
}
export const getDistrict = async (code: number | string) => {
    const data = await axios.get(`${URL_PROVINCE}/d/${code}`);
    return data
}
export const getWardByDistrict = async (code: number | string) => {
    const data = await axios.get(`${URL_PROVINCE}/d/${code}/?depth=2`);
    return data
}
export const getWard = async (code: number | string) => {
    const data = await axios.get(`${URL_PROVINCE}/w/${code}/`);
    return data
}