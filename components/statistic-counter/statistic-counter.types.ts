import { DetailedHTMLProps, HTMLAttributes } from "react";
import { ImageProps } from "next/image";

export interface StatisticCounterPropsInterface
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  title: string;
  count: number;
  visible: boolean;
}

export type StatisticCounterPropsType = StatisticCounterPropsInterface &
  ImageProps;
