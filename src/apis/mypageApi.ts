import { apiGet, apiPost } from ".";

const BASE_URL = "/mypage";

async function getMypageApi() {
    return await apiGet(BASE_URL);
}

export {
    getMypageApi,
}