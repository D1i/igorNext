import s from './style.module.scss';

export function Button(props) {
    return (
        <div onClick={props.onClick} className={s.buttonContainer}>
            {props.children}
        </div>
    )
}