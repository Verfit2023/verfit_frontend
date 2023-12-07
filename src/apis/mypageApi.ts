import { apiGet, apiPost } from ".";

const BASE_URL = "/mypage";

async function getMypageApi() {
    return await apiGet(BASE_URL);
}

async function abilityTestApi(test1: number[], test2: number[], test3: number[], test4: number[], test5: number[]) {
    return await apiPost(BASE_URL + '/ability-test/submit', {"인식능력": test1, "학습전략": test2, "학습활동": test3, "자기평가": test4, "의사소통과_협력": test5});
}

export {
    getMypageApi,
    abilityTestApi,
}