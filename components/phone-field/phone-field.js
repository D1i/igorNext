import {useEffect, useState} from "react";

import s from './style.module.scss';

export function PhoneField(props) {
    const [error, setError] = useState('');

    function valid(value) {
        if (!value) {
            setError('Поле обязательно для заполнения');
            return;
        }

        if (value.length < 18) {
            setError('Слишком короткий номер телефона');
            return;
        }

        setError('');
    }

    useEffect(() => {
        if (props.validVisibly) {
            valid(props.value);
        }
    }, [props.validVisibly])

    function handleChange(event) {
        event.data;

        if (props.validVisibly) {
            valid(event.target.value);
        }

        if (event.nativeEvent.data === null) {
            props.onChange(event.target.value);
            return;
        }

        if (event.target.value.length < props.value.length) {
            if (
                event.nativeEvent.data === '0' ||
                event.nativeEvent.data === '1' ||
                event.nativeEvent.data === '2' ||
                event.nativeEvent.data === '3' ||
                event.nativeEvent.data === '4' ||
                event.nativeEvent.data === '5' ||
                event.nativeEvent.data === '6' ||
                event.nativeEvent.data === '7' ||
                event.nativeEvent.data === '8' ||
                event.nativeEvent.data === '9'
            ) {
                if (event.target.value.length === 1) {
                    props.onChange(`+${event.target.value}`);
                    return;
                }

                const cupValue = props.value.slice(0, event.target.value.length - 1)

                if (event.target.value.length === 3) {
                    props.onChange(`${cupValue} (${event.nativeEvent.data}`);
                    return;
                }

                if (event.target.value.length === 8) {
                    props.onChange(`${cupValue}) ${event.nativeEvent.data}`);
                    return;
                }

                if (event.target.value.length === 13) {
                    props.onChange(`${cupValue}-${event.nativeEvent.data}`);
                    return;
                }

                if (event.target.value.length === 16) {
                    props.onChange(`${cupValue}-${event.nativeEvent.data}`);
                    return;
                }

                props.onChange(event.target.value);
            }
        }

        if (props.value.length >= 18) {
            return;
        }

        if (
            event.nativeEvent.data === '0' ||
            event.nativeEvent.data === '1' ||
            event.nativeEvent.data === '2' ||
            event.nativeEvent.data === '3' ||
            event.nativeEvent.data === '4' ||
            event.nativeEvent.data === '5' ||
            event.nativeEvent.data === '6' ||
            event.nativeEvent.data === '7' ||
            event.nativeEvent.data === '8' ||
            event.nativeEvent.data === '9'
        ) {
            if (props.value.length === 0) {
                props.onChange(`+${event.nativeEvent.data}`);
                return;
            }

            if (props.value.length === 2) {
                props.onChange(`${props.value} (${event.nativeEvent.data}`);
                return;
            }

            if (props.value.length === 7) {
                props.onChange(`${props.value}) ${event.nativeEvent.data}`);
                return;
            }

            if (props.value.length === 12) {
                props.onChange(`${props.value}-${event.nativeEvent.data}`);
                return;
            }

            if (props.value.length === 15) {
                props.onChange(`${props.value}-${event.nativeEvent.data}`);
                return;
            }

            props.onChange(props.value + event.nativeEvent.data);
        }
    }


    return (
        <>
            <div className={s.errorNotification}>{error}</div>
            <input {...props} onChange={handleChange} value={props.value} type="tel"/>
        </>
    )
}