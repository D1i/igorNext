import {Icon} from "../../../../components";

import s from './style.module.scss';

export function SliderReview(props) {
    // const reviewsGeted = new Services().reviews().get();

    console.log(props.current)

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
                <div className={s.apruvDocumentImage}><img
                    width="220px" src={require('../../img/araviaDocuments.png')}
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