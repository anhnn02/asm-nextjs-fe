import "../styles/globals.scss";
import { SWRConfig } from "swr";
import instance from "@/api/instance";
import Layout from "@/components/Layout";
import { AppPropsWithLayout } from "@/models/layout";
import Head from "next/head";
import 'antd/dist/antd.css'; //Ant Design

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const LayoutWrapper = Component.Layout ?? Layout;
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"/>
            </Head>
            <LayoutWrapper>
                <SWRConfig value={{ fetcher: async (url) => await instance.get(url) }}>
                    <Component {...pageProps} />
                </SWRConfig>
            </LayoutWrapper>
        </>

    );
}
export default MyApp;
