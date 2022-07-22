import Button from "@/components/Button";
import styles from "../styles/Home.module.scss";

const Home = () => {
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
