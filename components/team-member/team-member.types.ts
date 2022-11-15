import { DetailedHTMLProps, HTMLAttributes } from "react";
import { ImageProps } from "next/image";

export enum SocialsTypeEnum {
  vk,
  twitter,
  facebook,
  instagram,
  telegram,
  youtube,
}

export interface SocialsInterface {
  type: SocialsTypeEnum;
  link: string;
}

export interface TeamMemberPropsInterface
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  firstname: string;
  lastname: string;
  patronymic: string;
  position: string;
  socials?: SocialsInterface[];
  href: string;
}

export type TeamMemberPropsType = TeamMemberPropsInterface & ImageProps;
