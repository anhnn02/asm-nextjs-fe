import React from "react";
import { LayoutProps } from "../../models/layout";
import styles from "./Layout.module.scss";
import Footer from "../client/Footer";
import Header from "../client/Header";
import CartSidebar from "../client/cart/CartSidebar";

const Layout = ({ children }: LayoutProps) => {
    return (
        <div>
            <div className="tw-drawer tw-drawer-end">
                <input id="my-drawer-4" type="checkbox" className="tw-drawer-toggle" />
                <div className="tw-drawer-content">
                    <Header />
                    <div className={styles['bgr']}>
                        <div className={styles['container-main']}>
                            {children}
                        </div>
                    </div>
                    <Footer />
                </div>
                <CartSidebar />
            </div>
            
        </div>
    );
};

export default Layout;
