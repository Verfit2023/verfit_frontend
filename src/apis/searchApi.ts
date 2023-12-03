import { apiGet } from ".";

const BASE_URL = "/home";

async function searchWorkbookApi(qs: string) {
    return await apiGet(BASE_URL + '/?' + qs);
}

export {
    searchWorkbookApi,
}