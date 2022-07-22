import React from "react";
import { LayoutProps } from "../../models/layout";
import styles from "./Layout.module.scss";
import Footer from "../Footer";
import Header from "../Header";

const Layout = ({ children }: LayoutProps) => {
    return (
        <div>
            <Header />
            <div className={styles['bgr']}>
                <div className={styles['container-main']}>
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
