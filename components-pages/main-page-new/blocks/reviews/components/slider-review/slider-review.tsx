import {Icon} from "@components/index";

import Image from "next/image";

import s from './style.module.scss';

export function SliderReview(props) {
    // const reviewsGeted = new Services().reviews().get();

    function handleSwitchLeft() {
        if (props.current === 0) {
            return;
        }
        props.setCurrent(props.current - 1);
    }

    function handleSwitchRight() {
        if (props.current === props.reviews.length - 1) {
            return;
        }
        props.setCurrent(props.current + 1);
    }

    return (
        <div className={s.reviewContainer}>
            <div className={s.reviewText}>{props.reviews[props.current].review}</div>
            <div className={s.apruvDocument}>
                <div className={s.apruvDocumentImage}><Image
                    placeholder='blur'
                    width="400" src={require('../../img/araviaDocuments.png')}
                    alt="docs"/></div>
                <div className={s.nameApruver}>
                    <div>{props.reviews[props.current].reviewer}</div>
                    <div>{props.reviews[props.current].role}</div>
                </div>
            </div>
            <div className={s.controllerContainer}>
                <div onClick={handleSwitchLeft}><Icon name="switch"/></div>
                <div onClick={handleSwitchRight}><Icon name="switch"/></div>
            </div>
        </div>
    )
}

// TODO вкладку контакты не добавлять
// TODO на мобилке отключить hover
// TODO Блок услуг перенести на страницу услуг, убрать с главной | OK
// TODO Блок контактов перенести на другую страницу
// TODO по ip определять регион
// TODO бд для IP
// TODO НЕ ДЕЛАТЬ СКИДКУ ЧЕРЕЗ 30 СЕКУНД