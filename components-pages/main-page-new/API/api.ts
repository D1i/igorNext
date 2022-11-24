import url from './config';
import axios from "axios";

class API {
    sessionOut() {
        const token = sessionStorage.getItem("token");
        axios.post(`http://${url}/sessionOut`, token).then(p => {
            sessionStorage.removeItem("token");
        });
    }

    auth(data: any, callback: any) {
        const token = sessionStorage.getItem("token");
        axios.post(`http://${url}/auth`, data).then(p => {
            if (typeof p.data.token !== "number") {
                return;
            }
            sessionStorage.setItem("token", p.data.token);
            callback(true);
        });
    }

    GET(endpoint: any, callback: any) {
        axios.get(`http://${url}/${endpoint}`).then(p =>
            callback(p.data)
        )
    }

    POST(endpoint: any, data: any, callback: any) {
        const token = sessionStorage.getItem("token");
        const extendsData = {token};
        // @ts-ignore
        extendsData[endpoint] = data;
        axios.post(`http://${url}/${endpoint}`, extendsData).then(p => {
            callback(p.data)
        })
    }

    // @ts-ignore
    DELETE(endpoint, data, callback) {
        // const token = sessionStorage.getItem("token");
        // const extendsData = {token};
        // extendsData[endpoint] = data;
        // axios.post(`http://${url}/${endpoint}`, ).then(p => {
        //     callback(p.data)
        // })
    }

    // @ts-ignore
    PUT(endpoint, data, callback) {
        // axios.get(`http://${url}/${endpoint}`).then(p =>
        //     callback(p.data)
        // )
    }
}

export const api = new API();

export const endpoints = {
    auth: 'auth',
    sessionOut: 'sessionOut',
    accaunts: 'accaunts',
    QA: 'QA',
    services: 'services',
}