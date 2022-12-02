import classNames from "classnames";

import {BreadcrumbsInterface} from "@components/page-title/page-title.types";
import MainWrapper from "@components/main-wrapper";
import PageTitle from "@components/page-title";
import {ServicePageData, ServicePageInterface} from "@mock-data/service-page";

import styles from "./service-page.module.scss";

const ServicePage = (props: ServicePageInterface): JSX.Element => {
    const breadcrumbs: BreadcrumbsInterface[] = [
        {name: "Услуги", href: "/services"},
        {name: props.title},
    ];
    return (
        <MainWrapper>
            <PageTitle title={props.title} breadcrumbs={breadcrumbs}/>
            {props.data?.map((element: ServicePageData, index: number) => (
                <section key={index} className={classNames("container", styles.page)}>
                    {element.subtitle && <h2>{element.subtitle}</h2>}
                    <div dangerouslySetInnerHTML={{__html: element.description}}/>
                </section>
            ))}
        </MainWrapper>
    );
};

export default ServicePage;
