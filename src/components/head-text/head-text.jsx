import s from './style.module.scss';

export function HeadText(props) {
    const {firstPart, secondPart} = props;
    return (
        <div className={s.headTextContainer}>
            <div className={s.firstPart}>{firstPart}</div>
            <div className={s.secondPart}>{secondPart}</div>
        </div>
    )
}