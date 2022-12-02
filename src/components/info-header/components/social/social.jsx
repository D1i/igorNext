import {Telegramm, Viber, Whatsapp, Youtube} from "./icons";

import s from './style.module.scss';

export function Social(props) {
    return (
        <div className={s.socialContainer}>
            <Youtube/>
            <Whatsapp/>
            <Viber/>
            <Telegramm/>
        </div>
    )
}