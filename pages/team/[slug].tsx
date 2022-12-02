import LawyerPage from "@components-pages/lawyer-page";
import {
  lawyersPagesData,
  LawyersPagesDataInterface,
} from "@mock-data/lawyers-pages-data";
import { Params } from "next/dist/server/router";
import {
  GetStaticPathsResult,
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next/types";
import Head from "next/head";

export default function Lawyer(props: LawyersPagesDataInterface): JSX.Element {
  return (
    <>
      <Head>
        <title>{props.seoTitle}</title>
        <meta name="description" content={props.seoDescription} />
        <meta name="keywords" content={props.keywords} />
      </Head>
      <LawyerPage {...props} />
    </>
  );
}

export async function getStaticPaths(): Promise<GetStaticPathsResult | Params> {
  return {
    fallback: true,
    paths: lawyersPagesData?.map((element: LawyersPagesDataInterface) => ({
      params: { slug: element.slug },
    })),
  };
}

export const getStaticProps: GetStaticProps<
  LawyersPagesDataInterface,
  Params
> = async ({
  params,
}: GetStaticPropsContext<Params>): Promise<
  GetStaticPropsResult<LawyersPagesDataInterface>
> => {
  const pageProps = lawyersPagesData.find(
    (element: LawyersPagesDataInterface) => element.slug === params?.slug
  );
  if (!pageProps) {
    return { notFound: true };
  }
  return { props: { ...pageProps } };
};
