import url from './config';
import axios from "axios";

class API {
    sessionOut() {
        const token = sessionStorage.getItem("token");
        axios.post('http://localhost:9990/sessionOut', token).then(p => {
            sessionStorage.removeItem("token");
        });
    }

    GET(endpoint, callback) {
        axios.get(`http://${url}/${endpoint}`).then(p =>
            callback(p.data)
        )
    }

    POST(endpoint, data, callback) {
        const token = sessionStorage.getItem("token");
        const extendsData = {token};
        extendsData[endpoint] = data;
        axios.post(`http://${url}/${endpoint}`,).then(p => {
            callback(p.data)
        })
    }

    DELETE(endpoint, data, callback) {
        // const token = sessionStorage.getItem("token");
        // const extendsData = {token};
        // extendsData[endpoint] = data;
        // axios.post(`http://${url}/${endpoint}`, ).then(p => {
        //     callback(p.data)
        // })
    }

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