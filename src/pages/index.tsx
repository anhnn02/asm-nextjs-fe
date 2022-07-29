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
            <div className={styles['homepage']}>
                <div className={styles['section']}>
                    Slide
                </div>
                <div className={styles['section']}>
                    Slide
                </div>
                <div className={styles['section']}>
                    Slide
                </div>
                <div className={styles['section']}>
                    Slide
                </div>
                <div className={styles['section']}>
                    Slide
                </div>
            </div>
        </>
    )
};
export default Home;
