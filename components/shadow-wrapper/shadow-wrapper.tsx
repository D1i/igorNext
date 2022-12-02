import s from './style.module.css';
import {Props} from "react";
import {useAppDispatch} from "@store/hooks";

export function ShadowWrapper(props: Props<any>) {
    const dispatch = useAppDispatch();

    function handleClose() {
        console.log('asdasdasd')
        dispatch({type: 'isOpenCallSend', payload: false})
        // TODO dispatch
    }

    return (
        <div className={s.shadowWrapperContainer}>
            <div onClick={handleClose} className={s.closeZone}></div>
            {props.children}
        </div>
    )
}