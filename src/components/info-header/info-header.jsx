import {Logo} from "../adaptive-logo";
import {Phrase, Location, Social} from "./components";
import {Button} from "../button";

import s from './style.module.scss';

export function InfoHeader(props) {
    return (
        <div className={s.infoHeaderContainer}>
            <Logo/>
            <Phrase/>
            <Location/>
            <div className={s.button}>
                <Button>Бесплатная консультация</Button>
            </div>
            <Social/>
        </div>
    );
}