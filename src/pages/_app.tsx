import "../styles/globals.scss";
import { SWRConfig } from "swr";
import instance from "@/api/instance";
import Layout from "@/components/Layout";
import { AppPropsWithLayout } from "@/models/layout";
import Head from "next/head";
import { Provider } from "react-redux";
import { persistor, store } from "../app/store";
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const LayoutWrapper = Component.Layout ?? Layout;
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Head>
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css" />
                </Head>
                <LayoutWrapper>
                    <SWRConfig value={{ fetcher: async (url) => await instance.get(url) }}>
                        <Component {...pageProps} />
                        <ToastContainer />
                    </SWRConfig>
                </LayoutWrapper>
            </PersistGate>
        </Provider>

    );
}
export default MyApp;
