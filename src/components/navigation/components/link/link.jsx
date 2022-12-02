import s from './style.module.scss';

export function Link(props) {
    return (
        <span className={s.linkContainer} onClick={props.onClick}>
            {props.children}
        </span>
    )
}