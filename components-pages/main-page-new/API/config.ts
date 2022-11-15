let url: string = '';

const LOCAL = 'localhost:9990';
const SERVER = '109.166.76.149:9990';
const LOCAL_NETWORK = '192.168.0.13:9990';

function mode(modeName: any) {
    url = modeName;
}

mode(SERVER);//SELECT MODE!

export default url;