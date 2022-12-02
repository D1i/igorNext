import {useEffect, useState} from "react";

import {APILogin, APILogOut} from './API/API';

import s from './style.module.scss'
import {ServicesAPI} from "./panel/services";

export function AdminLogin(props) {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [authStatus, setAuthStatus] = useState(false);

    function startedLogin() {
        APILogin({login, password}).then(p =>
            setAuthStatus(p))
    }

    function startedLogOut() {
        APILogOut({token: sessionStorage.getItem("token")}).then();
        setAuthStatus(false);
    }

    useEffect(() => setAuthStatus(Boolean(sessionStorage.getItem("token"))), []);

    console.log(authStatus)
    if (authStatus) {
        console.log('EDITED')

        return (
            <div>
                Админ панель
                <button onClick={startedLogOut}>Выйти</button>
                <div>
                    <h1>Услуги</h1>
                    <ServicesAPI />
                </div>
            </div>
        )
    } else {
        return (
            <div className={s.adminLoginContainer}>
                <input onChange={(event) => setLogin(event.target.value)} type='text' placeholder='Имя'/>
                <input onChange={(event) => setPassword(event.target.value)} type='password' placeholder='Пароль'/>
                <button onClick={startedLogin}>Войти</button>
            </div>
        )
    }
}