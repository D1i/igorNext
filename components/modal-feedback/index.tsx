import React, { useContext } from "react";
import styles from "./modal-feedback.module.scss";
import { JSX } from "@babel/types";
import { AppContext } from "@context/app.context";
import ContactForm from "@components/contact-form";
import ModalContainer from "@components/modal-container";

const ModalFeedback: React.FC = (): JSX.Element => {
  const { feedbackModal, setFeedbackModal } = useContext(AppContext);

  return (
    <ModalContainer
      role={"dialog"}
      onClick={() => setFeedbackModal(!feedbackModal)}
      open={feedbackModal}
      aria-label={"Закрыть форму обратной связи"}
    >
      <div className={styles.container}>
        <ContactForm />
      </div>
    </ModalContainer>
  );
};

export default ModalFeedback;
