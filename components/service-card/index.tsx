import cn from "classnames";
import Link from "next/link";
import React from "react";

import styles from "./service-card.module.scss";

import {ServiceCardPropsType, WrapperCardType} from "./service-card.types";
import s from "@components-pages/main-page-new/blocks/turn-professionals/style.module.scss";
import sNew from '@components-pages/main-page-new/blocks/turn-professionals/style.module.scss';
import {Icon} from "@components/icon";

const WrapperTag = ({children, href, className, ...props}: WrapperCardType): JSX.Element =>
    href ? (
        <Link href={"/services" + href} {...props}>
            <a className={cn(styles.card, className)}>{children}</a>
        </Link>
    ) : (
        <div className={cn(styles.card, className)}>{children}</div>
    );

function Рyphen() {
    return (
        <div className={sNew.hyphen}>
            <Icon name="pyphen"/>
        </div>
    )
}

const ServiceCard = ({title, className, Icon, href, description, ...props}: ServiceCardPropsType): JSX.Element => {

    return (
        <div className={sNew.listParaghraf}>
            <div className={sNew.paraghrafHeader}>
                <div>{title}</div>
                <Icon
                    className={styles.svg}
                    width={75}
                    height={75}
                    viewBox="0 0 512 512"
                />
            </div>
            <div className={sNew.list}>
                {description.map((element: string) => (
                    <div key={element}><Рyphen/>{element}</div>
                ))}
                {href && <span className={styles.fakeLink}>Подробнее</span>}
            </div>
        </div>
    )


    return (
        <WrapperTag href={href} {...props}>
            <div className={styles.icon}>
                <Icon
                    className={styles.svg}
                    width={75}
                    height={75}
                    viewBox="0 0 512 512"
                />
            </div>
            <div className={styles.title}>{title}</div>
            <ul className={styles.list}>
                {description.map((element: string) => (
                    <li key={element}>{element}</li>
                ))}
            </ul>
            {href && <span className={styles.fakeLink}>Подробнее</span>}
        </WrapperTag>
    );
};

export default ServiceCard;
