import cn from "classnames";
import serviceCardData from "mock-data/service-card-data";
import {ServiceCardDataInterface} from "@components/service-card/service-card.types";
import ServiceCard from "@components/service-card";
import ScalesImg from "@components/scales-img";

import styles from "./our-services.module.scss";

const OurServices = () => {
    return (
        <section>
            <div className={cn(styles.container, "container")}>
                <h2 className={styles.title}>Наши услуги</h2>
                <ScalesImg/>
                <div className={styles.servicesCardsWrapper}>
                    {serviceCardData.map((element: ServiceCardDataInterface) => (
                        <ServiceCard key={element.title} {...element} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurServices;
