import axios from "axios";

export async function APILogin(data) {
    return await axios.post('http://localhost:9990/auth', data).then(p => {
        if (p.data.token) {
            sessionStorage.setItem("token", p.data.token);
            return true
        }
    });
}

export async function APILogOut(token) {
    return await axios.post('http://localhost:9990/sessionOut', token).then(p => {
        sessionStorage.removeItem("token");
    });
}

export async function GetAPIServices(callback) {
    axios.get("http://localhost:9990/services").then(p => {
        callback(p.data)
    })
}

export async function PostAPIServices(data, callback) {
    const token = sessionStorage.getItem("token");
    await axios.post('http://localhost:9990/services', {token: token, services: data}).then(p => {
        callback(p.data);
    })
}