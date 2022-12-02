import s from './style.module.scss';

export function ContactInfo(props) {
    return (
        <div className={s.container}>
            <div className={s.number}>+7 (937) 177-02-10</div>
            <div className={s.email}>info@ermolaeva-patent.ru</div>
        </div>
    )
}