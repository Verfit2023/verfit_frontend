import { apiGet, apiPost } from ".";

const BASE_URL = "/workbook";

async function getWorkbookApi(workbookId: number) {
    return await apiGet(BASE_URL + '/' + workbookId);
}

async function likeWorkbookApi(workbookId: number) {
    return await apiPost(BASE_URL + '/' + workbookId + '/like', {});
}

export {
    getWorkbookApi,
    likeWorkbookApi,
}