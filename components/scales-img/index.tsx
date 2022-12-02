import Image from "next/image";
import Img from "@public/icons/scales-min.png";

const ScalesImg = (): JSX.Element => (
  <Image
    alt={"Иконка весы"}
    src={Img}
    width={108}
    height={26}
    quality={50}
    layout="fixed"
  />
);

export default ScalesImg;
