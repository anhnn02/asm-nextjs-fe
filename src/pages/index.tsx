import Button from "@/components/Button";
import Header from "@/components/Header";
import { NextPage } from "next";
import styles from "../styles/client/Home.module.scss";

const Home: NextPage = () => {
    return (
        <>
            <h1 className={styles['demo']}>Home</h1>
            <i className="bi bi-wrench-adjustable-circle-fill"></i>
            <Button.Transparent content={"Add"} />
            <Button.Fill content={"Add"} />
        </>
    )
};
export default Home;
