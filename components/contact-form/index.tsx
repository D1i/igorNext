import {
  ChangeEvent,
  FormEvent,
  KeyboardEvent,
  useContext,
  useRef,
  useState,
} from "react";
import { AppContext } from "@context/app.context";
import Button from "@ui/button";

import styles from "./contact-form.module.scss";

const initialState = { name: "", email: "", phone: "", description: "" };

const ContactForm = () => {
  const [{ name, email, phone, description }, setDataForm] = useState<{
    name: string;
    email: string;
    phone: string;
    description: string;
  }>(initialState);

  const [successForm, setSuccessForm] = useState<boolean>(false);
  const { setFeedbackModal } = useContext(AppContext);
  const ref = useRef<null | HTMLDivElement>(null);

  const changeName = (e: ChangeEvent<HTMLInputElement>) => {
    setDataForm((data) => ({ ...data, name: e.target.value }));
  };
  const changeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setDataForm((data) => ({ ...data, email: e.target.value }));
  };
  const changePhone = (e: ChangeEvent<HTMLInputElement>) => {
    setDataForm((data) => ({ ...data, phone: e.target.value }));
  };
  const changeDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDataForm((data) => ({ ...data, description: e.target.value }));
  };

  const submit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, phone, description }),
    });

    const { status } = response;
    if (status === 200) {
      setDataForm(initialState);
      setSuccessForm(true);
      ref.current?.focus();
    }
    (e.target as HTMLFormElement).reset();
  };

  const closeModalWrapperEsc = (
    e: KeyboardEvent<HTMLDivElement | HTMLButtonElement>
  ) => {
    if (e.key === "Escape") {
      setFeedbackModal(false);
    }
  };

  return (
    <>
      {successForm ? (
        <div
          className={styles.title}
          onKeyDown={closeModalWrapperEsc}
          tabIndex={0}
          ref={ref}
        >
          Ваше сообщение отправлено и скоро будет обработано. <br />
          Спасибо за интерес к нашему сайту, заходите к нам почаще!
        </div>
      ) : (
        <form className={styles.form} method="post" onSubmit={submit}>
          <label htmlFor="GETName">Ваше имя:</label>
          <input
            required
            onChange={changeName}
            id="GETName"
            type="text"
            placeholder="Введите имя"
          />
          <label htmlFor="GETEmail">Ваш e-mail:</label>
          <input
            pattern="^\S+@\S+\.\S+$"
            required
            onChange={changeEmail}
            id="GETEmail"
            type="email"
            placeholder="Введите почту"
          />
          <label htmlFor="GETPhone">Ваш телефон:</label>
          <input
            pattern="^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"
            required
            onChange={changePhone}
            id="GETPhone"
            type="tel"
            placeholder="Введите телефон"
          />
          <label htmlFor="GETDescription">Ваше сообщение:</label>
          <textarea
            placeholder="Введите текст"
            required
            id="GETDescription"
            onChange={changeDescription}
          />
          <Button type="submit">Отправить</Button>
        </form>
      )}
    </>
  );
};

export default ContactForm;
