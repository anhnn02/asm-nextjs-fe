// import React from "react";
// import useSWR from "swr";
// // import { add, removeItem, update , read} from "../api/slide";

// const useSlide = () => {
//   const { data, error, mutate } = useSWR(`/banners`);

//   const remove = async (id: any) => {
//         const confirmItem = window.confirm('Bạn có muốn xóa không?')
//         if (confirmItem) {
//             await removeItem(id)
//              mutate(data.filter((item: any) => item.id !== id));
//         }
//     }

//   const create = async (item: any) => {
//     const addSlide = await add(item);
//     mutate([...data, addSlide]);
//   };
//    const detail = async (id: any) => {
//     const detailSlide = await read(id);
//     return detailSlide;
//   };
  
//   const edit = async (slide: any) => {
//     await update(slide);
//     mutate(data.map((item: any) => (item._id === data._id ? slide : item)));
//   };

//   return {
//     data,
//     error,
//     remove,
//     create,
//     edit,
//     detail
//   };
// };

// export default useSlide