import { apiPost } from ".";

const BASE_URL = "/generation";

async function uploadFile(formData: FormData) {
    return await apiPost(BASE_URL + '/upload-file', formData);
}

async function makeQuestionApi(problemType: number, text: string) {
    return await apiPost(BASE_URL + '/question?problemType=' + problemType, { text });
}

export {
    uploadFile,
    makeQuestionApi,
}