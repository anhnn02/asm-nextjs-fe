import Button from "@/components/Button";
import Icon from "@/components/Icon";
import { NextPage } from "next";
import styles from "../styles/client/Home.module.scss";

const Home: NextPage = () => {
    return (
        <>
        <div className="tw-bg-green-30 tw-h-[1000px]"></div>
            <h1 className={styles['demo']}>Home</h1>
            <i className="bi bi-wrench-adjustable-circle-fill"></i>
            <Button.Transparent content={"Add"} />
            <Button.Fill content={<Icon.Search />} />
        </>
    )
};
export default Home;
