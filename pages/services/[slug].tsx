import {
  GetStaticPathsResult,
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";
import {
  ServicePageInterface,
  servicePageMockData,
} from "@mock-data/service-page";
import Head from "next/head";
import ServicePage from "@components-pages/service-page";

type Params = {
  slug: string;
};

export default function Service(props: ServicePageInterface): JSX.Element {
  return (
    <>
      <Head>
        <title>{props.seoTitle}</title>
        <meta name="description" content={props.seoText} />
        <meta name="keywords" content={props.keywords} />
      </Head>
      <ServicePage {...props} />
    </>
  );
}

export async function getStaticPaths(): Promise<GetStaticPathsResult | Params> {
  return {
    fallback: true,
    paths: servicePageMockData?.map((element: ServicePageInterface) => ({
      params: { slug: element.slug },
    })),
  };
}

export const getStaticProps: GetStaticProps<
  ServicePageInterface,
  Params
> = async ({
  params,
}: GetStaticPropsContext<Params>): Promise<
  GetStaticPropsResult<ServicePageInterface>
> => {
  const pageProps = servicePageMockData.find(
    (element: ServicePageInterface) => element.slug === params?.slug
  );
  if (!pageProps) {
    return { notFound: true };
  }
  return { props: { ...pageProps } };
};
