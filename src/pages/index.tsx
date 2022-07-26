import Button from "@/components/Button";
import Icon from "@/components/Icon";
import { NextPage } from "next";
import styles from "../styles/client/Home.module.scss";

const Home: NextPage = () => {
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
