import cn from "classnames";

import styles from "./our-team.module.scss";

import ScalesImg from "@components/scales-img";
import TeamMember from "@components/team-member";

import MariaImg from "@public/images/person/ermolaeva-mariya.jpg";
import NataliaImg from "@public/images/person/ermolaeva-natalia.jpeg";

const OurTeam = (): JSX.Element => {
  return (
    <section className={cn("container", styles.section)}>
      <h2 className={styles.title}>Наша команда</h2>
      <ScalesImg />
      <div className={styles.teamWrapper}>
        <TeamMember
          firstname={"Мария"}
          patronymic={"Сергеевна"}
          lastname={"Ермолаева"}
          src={MariaImg}
          alt={"Мария Ермолаева"}
          position={"Юрист по интеллектуальной собственности"}
          href={"/ermolaeva-mariya-sergeevna"}
        />
        <TeamMember
          firstname={"Наталья"}
          patronymic={"Васильевна"}
          lastname={"Ермолаева"}
          src={NataliaImg}
          alt={"Наталья Ермолаева"}
          position={"Юрист по интеллектуальной собственности"}
          href={"/ermolaeva-naliya-vasilevna"}
        />
      </div>
    </section>
  );
};

export default OurTeam;
