import { apiGet, apiPost } from ".";

const BASE_URL = "/workbook";

async function getWorkbookApi(workbookId: number) {
    return await apiGet(BASE_URL + '/' + workbookId);
}

async function likeWorkbookApi(workbookId: number) {
    return await apiPost(BASE_URL + '/' + workbookId + '/like', {});
}

async function pubprivWorkbookApi(workbookId: number) {
    return await apiPost(BASE_URL + '/' + workbookId + '/pubpriv', {});
}

async function addCommentApi(workbookId: number, comment: string) {
    return await apiPost(BASE_URL + '/' + workbookId + '/addcomment?' + comment, {})
}

async function generatePdfApi(workbookId: number) {
    return await apiPost(BASE_URL + '/' + workbookId + '/generate-pdf', {})
}

export {
    getWorkbookApi,
    likeWorkbookApi,
    pubprivWorkbookApi,
    addCommentApi,
    generatePdfApi,
}