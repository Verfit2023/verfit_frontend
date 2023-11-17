import axios from 'axios'
import { HOST_URL } from '../constants';
import { getCookie } from '../commons/cookie';

const baseAxios =  axios.create({
    baseURL: HOST_URL,
});

async function apiPost(url: string, data: object) {
    return await baseAxios.post(url, data,
        {
            headers: {
                Authorization: "Bearer " + await getCookie('accessToken'),
            },
        }
    )
    .then((res) => {
        return res;
    });
}

async function apiPut(url: string, data: object) {
    return await baseAxios.put(url, data,
        {
            headers: {
                Authorization: "Bearer " + await getCookie('accessToken'),
            },
        }
    )
    .then((res) => {
        return res;
    });
}

async function apiGet(url: string) {
    return await baseAxios.get(url, 
        {
            headers: {
                Authorization: "Bearer " + await getCookie('accessToken'),
            },
        }
    )
    .then((res) => {
        return res;
    });
}

async function apiDelete(url: string) {
    return await baseAxios.delete(url, 
        {
            headers: {
                Authorization: "Bearer " + await getCookie('accessToken'),
            },
        }
    )
    .then((res) => {
        return res;
    });
}

export default baseAxios;
export { apiPost, apiPut, apiGet, apiDelete };
