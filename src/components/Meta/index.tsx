import Head from "next/head";
import type { NextPage } from "next";
import image from "@/../public/images";

interface MetaProps {
    title: string;
    description: string;
}
const Meta: NextPage<MetaProps> = ({ title, description}) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="description" content={description} />

            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={'https://bonik-react.vercel.app/assets/images/logos/shopping-bag.svg'} />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={'https://bonik-react.vercel.app/assets/images/logos/shopping-bag.svg'} />
        </Head>
    );
};

export default Meta;
