import { apiPost } from ".";

async function loginApi(email: string, password: string) {
    return await apiPost('/login', { email, password });
}

export { loginApi }