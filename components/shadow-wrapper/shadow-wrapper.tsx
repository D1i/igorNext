import s from './style.module.css';

export function ShadowWrapper(props: any) {
    return (
        <div className={s.shadowWrapperContainer}>
            <div onClick={() => props.onCloseCallSend(false)} className={s.closeZone}></div>
            {props.children}
        </div>
    )
}