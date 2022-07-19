import React from "react";
import { LayoutProps } from "../../models/layout";

const Layout = ({ children }: LayoutProps) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default Layout;
