import {useState} from "react";
import Image from "next/image";
import axios from "axios";
import {Store} from "react-notifications-component";

import {PhoneField} from "@components/phone-field";

import avatar from './img/avatar.png';
import background from './img/Rectangle 11.png';

import s from './style.module.scss';

export function GetQuestion(props: any) {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [name, setName] = useState('');
    const [question, setQuestion] = useState('');

    function handleSend() {

        axios.post('http://localhost:9990/contactData', {name, phone: phoneNumber, question, sell: false}).then(() => {
            Store.addNotification({
                title: "",
                message: "Сообщение отправленно",
                type: "success",
                insert: "top",
                container: "bottom-left",
                animationIn: ["animate__animated", "animate__fadeIn"],
                animationOut: ["animate__animated", "animate__fadeOut"],
                dismiss: {
                    duration: 5000,
                    onScreen: false
                }
            });
        }).catch(() => {
            Store.addNotification({
                title: "",
                message: "Ошибка при отправке",
                type: "danger",
                insert: "top",
                container: "bottom-left",
                animationIn: ["animate__animated", "animate__fadeIn"],
                animationOut: ["animate__animated", "animate__fadeOut"],
                dismiss: {
                    duration: 5000,
                    onScreen: false
                }
            });
        });
    }

    return (
        <div className={s.getQuestionWrapper}>
            <div className={s.background}>
                <Image src={background} layout='fixed' objectFit='fill'/>
            </div>
            <div className={s.getQuestionContainer}>
                <div className={s.leftBlock}>
                    <div className={s.header}>Задать вопрос <div className={s.goldHeader}>эксперту</div></div>
                    <div className={s.profilBlock}>
                        <div className={s.avatar}><Image placeholder='blur' src={avatar}/></div>
                        <div>
                            <div className={s.headerDescription}>На все вопросы ответит юрист по интеллектуальной
                                собственности
                            </div>
                            <div className={s.description}>Ермолаева Мария Сергеевна</div>
                        </div>
                    </div>
                </div>
                <div className={s.rightBlock}>
                    <input onChange={(event) => {setName(event.target.value)}} className={s.textField} placeholder='Представьтесь, пожалуйста'/>
                    <PhoneField onChange={setPhoneNumber} value={phoneNumber} className={s.textField}
                                placeholder='Номер телефона'/>
                    <textarea onChange={(event) => {setQuestion(event.target.value)}} className={s.textField} placeholder='Опишите суть вопроса или предложения'/>
                    <button onClick={handleSend} className={s.button}>Отправить заявку</button>
                    <div>
                        <div>Нажимая на кнопку, вы соглашаетесь</div>
                        <div>c политикой обработки персональных данных</div>
                    </div>
                </div>
            </div>
        </div>
    )
}