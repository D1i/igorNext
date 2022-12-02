import {Icon} from "./components";

import s from './style.module.scss';

export function Location(props) {
    return (
        <div className={s.locationContainer}>
            <Icon/>
            <div className={s.city}>Самара</div>
            <div className={s.choose}>Выбрать</div>
        </div>
    )
}