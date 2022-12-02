import {
  BreadcrumbsInterface,
  PageTitlePropsInterface,
} from "./page-title.types";
import styles from "./page-title.module.scss";
import cn from "classnames";
import Link from "next/link";
import { transformBreadcrumbs } from "@shared/transform-breadcrumbs";

const PageTitle = ({
  title,
  breadcrumbs,
  isTitle = true,
}: PageTitlePropsInterface) => {
  const pageBreadcrumbs: BreadcrumbsInterface[] =
    transformBreadcrumbs(breadcrumbs);
  return (
    <section className={styles.section}>
      <div className={cn("container")}>
        {isTitle ? (
          <h1>{title}</h1>
        ) : (
          <div className={styles.title}>{title}</div>
        )}
        <ul className={"resetUl"}>
          {pageBreadcrumbs.map(
            ({ name, href }: BreadcrumbsInterface, key: number) => (
              <li key={name}>
                {key > 0 && <span className={styles.separator}> / </span>}
                {href ? (
                  <Link href={href}>
                    <a>{name}</a>
                  </Link>
                ) : (
                  <span>{name}</span>
                )}
              </li>
            )
          )}
        </ul>
      </div>
    </section>
  );
};

export default PageTitle;
