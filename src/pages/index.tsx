import Button from "@/components/Button";
import Icon from "@/components/Icon";
import Product from "@/features/products/product.component";
import { NextPage } from "next";
import { ToastContainer, toast } from "react-toastify";
import styles from "../styles/client/Home.module.scss";

const Home: NextPage = () => {
    const notify = () => {
        // toast.error('🦄 Wow so easy!', {
        //     position: "top-center",
        //     autoClose: 5000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        // });
    };
    return (
        <>
        <div className="tw-bg-green-30 tw-h-[1000px]"></div>
            <h1 className={styles['demo']}>Home</h1>
            <i className="bi bi-wrench-adjustable-circle-fill"></i>
            <Button.Transparent content={"Add"} />
            <Button.Fill content={<Icon.Search />} />
            <Product/>
            <button onClick={notify}>abc</button>
        </>
    )
};
export default Home;
