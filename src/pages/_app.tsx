import "../styles/globals.scss";
import { SWRConfig } from "swr";
import instance from "@/api/instance";
import Layout from "@/components/Layout";
import { AppPropsWithLayout } from "@/models/layout";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const LayoutWrapper = Component.Layout ?? Layout;
    return (
        <LayoutWrapper>
            <SWRConfig value={{ fetcher: async (url) => await instance.get(url) }}>
                <Component {...pageProps} />
            </SWRConfig>
        </LayoutWrapper>
    );
}
export default MyApp;
