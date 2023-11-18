import { apiPost } from ".";

const BASE_URL = "/accounts";

async function loginApi(email: string, password: string) {
    return await apiPost(BASE_URL + '/login', { email, password });
}

async function signupApi(nickname: string, email: string, password: string) {
    return await apiPost(BASE_URL + '/signup', { nickname, email, password });
}

export {
    loginApi,
    signupApi,
}