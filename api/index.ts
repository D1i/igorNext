import axios from 'axios';
import {IPosts} from '../types/posts.types';
import {EmployeesInterface} from '../types/employees.types';

type Callback = {
    (data: any): void
}

class Api {
    generateIdParams(id?: number): string {
        return id ? '/' + id : '';
    }

    async getPosts(id?: number): Promise<IPosts[]> {
        const url = 'http://localhost:1337/api/posts' + this.generateIdParams(id);
        const {data} = await axios.get(url);

        return data;
    }

    async getEmployees(id?: number): Promise<EmployeesInterface> {
        const url = 'http://localhost:1337/api/employees' + this.generateIdParams(id) + '?populate=*';
        const {data} = await axios.get(url);

        return data;
    }

    async getUserCity() {
        const url = 'https://ipapi.co/json/';
        const {data} = await axios.get(url);

        return data.city;
    }
}

const api = new Api();

export default api;
