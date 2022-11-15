import dynamic from "next/dynamic";
import { MainWrapperPropsInterface } from "./main-wrapper.types";
import styles from "./main-wrapper.module.scss";
import Footer from "@components/footer";
import Header from "@components/header";

const PopupCookie = dynamic(() => import("@components/popup-cookie"), {
  ssr: false,
});
const ModalFeedback = dynamic(() => import("@components/modal-feedback"), {
  ssr: false,
});

const MainWrapper = ({
  children,
  style,
}: MainWrapperPropsInterface): JSX.Element => {
  return (
    <>
      <Header />
      <main style={style} className={styles.main}>
        {children}
      </main>
      <Footer />
      <ModalFeedback />
      <PopupCookie />
    </>
  );
};

export default MainWrapper;
