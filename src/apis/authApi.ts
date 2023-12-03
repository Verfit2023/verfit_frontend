import { apiPost } from ".";

const BASE_URL = "/accounts";

async function loginApi(email: string, password: string) {
    return await apiPost(BASE_URL + '/login', { useremail: email, password: password });
}

async function signupApi(nickname: string, email: string, password: string) {
    return await apiPost(BASE_URL + '/signup', { username: nickname, useremail: email, userpassword: password });
}

export {
    loginApi,
    signupApi,
}