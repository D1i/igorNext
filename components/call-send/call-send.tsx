import {useEffect, useState} from "react";
import Link from "next/link";
import Image from "next/image";
import {Store} from "react-notifications-component";
import axios from "axios";
import disableScroll from "disable-scroll";

import {PhoneField} from "../phone-field";

import avatar from './img/avatar.png';

import s from './style.module.scss';

export function CallSend(props: any) {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [showError, setShowError] = useState(false);

    useEffect(() => {
        disableScroll.on();

        return () => disableScroll.off();
    }, [])

    function handleChangeName(event: any) {
        setName(event.target.value);
    }

    function handleSend() {
        if (!name || !phone || phone.length !== 18) {
            setShowError(true);
            return;
        }

        axios.post('http://localhost:9990/contactData', {name, phone, sell: false}).then(() => {
            // console.log(Store)
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
            props.onClose();
        }).catch(() => {
            console.log(Store.addNotification)
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
        <div className={s.callSendContainer}>
            <div className={s.leftBlock}>
                <div>
                    <div className={props.hasSell ? s.profileUrist : s.hideBlock}>
                        <div className={s.img}>
                            <Image placeholder="blur" width={150} height={150} src={avatar}/>
                        </div>
                        <div>
                            <div className={s.description}>На все вопросы ответит юрист по интеллектуальной
                                собственности
                            </div>
                            <div className={s.name}>Ермолаева Мария Сергеевна</div>
                        </div>
                    </div>
                    <div className={props.hasSell ? s.hideBlock : s.callHeaderDarkTheme}>
                        <div>Обратитесь</div>
                        <div>к профессионалам</div>
                    </div>
                    <div className={s.bonusList}>
                        <div>
                            <div className={s.bonusListHeader}>до 20 минут</div>
                            <div>Онлайн-консультация эксперта</div>
                        </div>
                        <div>
                            <div className={s.bonusListHeader}>Скидка 5%</div>
                            <div>на услуги при оставлении заявки на сайте</div>
                        </div>
                    </div>
                    <div className={s.sell}>
                        <div className={props.hasSell || s.hideBlock}>
                            <div className={s.sellHeader}>До конца акции осталось:</div>
                            <div className={s.timerContainer}>
                                <div className={s.timerCountContainer}>
                                    <div className={s.timerCountBlock}>00</div>
                                    <div className={s.timerCountUnit}>Дни</div>
                                </div>
                                <div className={s.timerCountContainer}>
                                    <div className={s.timerCountBlock}>00</div>
                                    <div className={s.timerCountUnit}>Часы</div>
                                </div>
                                <div className={s.timerCountContainer}>
                                    <div className={s.timerCountBlock}>00</div>
                                    <div className={s.timerCountUnit}>Минуты</div>
                                </div>
                                <div className={s.timerCountContainer}>
                                    <div className={s.timerCountBlock}>00</div>
                                    <div className={s.timerCountUnit}>Секунды</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.rightBlock}>
                <div className={props.hasSell ? s.callHeader : s.hideBlock}>
                    <div>Обратитесь</div>
                    <div>к профессионалам</div>
                </div>
                <div className={s.callDescription}>
                    Оставьте заявку и получите бесплатную консультацию юриста
                </div>
                <div className={s.callFieldBlock}>
                    <div>
                        <input value={name} onChange={handleChangeName} placeholder="Представьтесь, пожалуйста"/>
                        <div></div>
                    </div>
                    <div>
                        <PhoneField validVisibly={showError} value={phone} onChange={setPhone} type="tel"
                                    placeholder="Номер телефона"/>
                        <div></div>
                    </div>
                </div>
                <div>
                    <div onClick={handleSend} className={s.callButtonSend}>Отправить заявку</div>
                </div>
                <div className={s.politicleConfirm}>
                    <div>Нажимая на кнопку, вы соглашаетесь</div>
                    <div><Link href="https://ermolaeva-patent.ru/documents/polzovatelskoe-soglashenie.pdf">с политикой
                        обработки персональных данных</Link></div>
                </div>
            </div>
        </div>
    )
}