let url = null;

const LOCAL = 'localhost:9990';
const SERVER = '195.161.68.20:9990';

function mode(modeName) {
    url = modeName;
};

mode(LOCAL);//SELECT MODE!

export default url;