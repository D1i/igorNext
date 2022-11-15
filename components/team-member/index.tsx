import cn from "classnames";
import Image from "next/image";
import Link from "next/link";

import styles from "./team-member.module.scss";

import { TeamMemberPropsType } from "./team-member.types";

const TeamMember = ({
  firstname,
  lastname,
  className,
  position,
  patronymic,
  href,
  ...props
}: TeamMemberPropsType): JSX.Element => (
  <Link href={"/team" + href}>
    <a className={styles.linkWrapper}>
      <div className={cn(className, styles.wrapper)}>
        <Image
          layout={"responsive"}
          alt={firstname + " " + lastname}
          width={270}
          height={320}
          objectFit="cover"
          objectPosition="top"
          {...props}
        />
        <div className={styles.name}>
          <span>
            {lastname}
            <br />
            {firstname} {patronymic}
          </span>
        </div>
        <span className={styles.position}>{position}</span>
      </div>
    </a>
  </Link>
);

export default TeamMember;
