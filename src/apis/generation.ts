import { apiPost } from ".";

const BASE_URL = "/generation";

async function uploadFile(formData: FormData) {
    return await apiPost(BASE_URL + '/upload-file', formData);
}

async function makeQuestionApi(problemType: number, text: string) {
    return await apiPost(BASE_URL + '/question?problemType=' + problemType, { text });
}

async function makeSummary(text: string) {
    return await apiPost(BASE_URL + '/summary', { text });
}

async function makeWorkbookApi(qs: string) {
    return await apiPost(BASE_URL + '/newworkbook?' + qs, {});
}

async function saveQuestionApi(workbookId: number, text: string) {
    return await apiPost(BASE_URL + '/question/save?workbook_id=' + workbookId, { text });
}

async function saveSummaryApi(workbookId: number, text: string) {
    return await apiPost(BASE_URL + '/summary/save?workbook_id=' + workbookId, { text });
}

export {
    uploadFile,
    makeQuestionApi,
    makeSummary,
    makeWorkbookApi,
    saveQuestionApi,
    saveSummaryApi,
}