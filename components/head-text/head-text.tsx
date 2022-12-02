import s from './style.module.scss';

export function HeadText(props: any) {
    const {firstPart, secondPart} = props;
    return (
        <h2 className={s.headTextContainer}>
            <div className={s.firstPart}>{firstPart}</div>
            <div className={s.secondPart}>{secondPart}</div>
        </h2>
    )
}