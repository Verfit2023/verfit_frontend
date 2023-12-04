import { apiGet } from ".";

const BASE_URL = "/workbook";

async function getWorkbookApi(workbookId: number) {
    return await apiGet(BASE_URL + '/' + workbookId);
}

export {
    getWorkbookApi,
}