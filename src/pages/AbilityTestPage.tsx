import { useState } from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import AbilityQuestion from '../components/AbilityQuestion';
import { abilityTestApi } from '../apis/mypageApi';

function AbilityTestPage() {
    const [test1, setTest1] = useState([-1, -1, -1]);
    const [test2, setTest2] = useState([-1, -1, -1]);
    const [test3, setTest3] = useState([-1, -1, -1]);
    const [test4, setTest4] = useState([-1, -1, -1]);
    const [test5, setTest5] = useState([-1, -1, -1]);

    const navigate = useNavigate();

    const onSubmitClick = async () => {
        if(test1.includes(-1)) {
            alert("모든 문항에 대해 답해주세요.")
            return
        }
        if(test2.includes(-1)) {
            alert("모든 문항에 대해 답해주세요.")
            return
        }
        if(test3.includes(-1)) {
            alert("모든 문항에 대해 답해주세요.")
            return
        }
        if(test4.includes(-1)) {
            alert("모든 문항에 대해 답해주세요.")
            return
        }
        if(test5.includes(-1)) {
            alert("모든 문항에 대해 답해주세요.")
            return
        }

        await abilityTestApi(test1, test2, test3, test4, test5);
        navigate('/mypage');
    }

    return (
        <div className="flex flex-col min-h-full">
            <Header />
            <div className="w-3/4 mx-auto">
                <div className="text-xl font-medium leading-6 text-gray-900 my-6">자기주도역량 검사</div>
                <div className="h-px w-full bg-gray-200 mb-10" />
                <div className="flex flex-col gap-7">
                    <AbilityQuestion name="ans1" index={0} value={test1} setValue={setTest1} question="1. 나는 나 자신의 학습을 위해 가장 적합한 방법을 선택할 수 있다." />
                    <AbilityQuestion name="ans2" index={1} value={test1} setValue={setTest1} question="2. 나는 나 자신의 학습에 대해 책임이 있다." />
                    <AbilityQuestion name="ans3" index={2} value={test1} setValue={setTest1} question="3. 나는 나의 학습 목표를 세우고 계획할 수 있다." />

                    <AbilityQuestion name="ans4" index={0} value={test2} setValue={setTest2} question="4. 나는 배우는 내용의 예시를 찾아보는 것이 도움이 된다고 생각한다." />
                    <AbilityQuestion name="ans5" index={1} value={test2} setValue={setTest2} question="5. 내 내적 동기는 학습에서 나를 더욱 발전시키고 향상시키는 방향으로 이끈다." />
                    <AbilityQuestion name="ans6" index={2} value={test2} setValue={setTest2} question="6. 나는 개념도가 학습에 효과적인 방법이라고 생각한다." />

                    <AbilityQuestion name="ans7" index={0} value={test3} setValue={setTest3} question="7. 나는 새로운 수업을 미리 연습하고 검토한다." />
                    <AbilityQuestion name="ans8" index={1} value={test3} setValue={setTest3} question="8. 나는 방대한 정보를 이해하는 유용한 방법으로 개념도나 개요작성을 사용한다." />
                    <AbilityQuestion name="ans9" index={2} value={test3} setValue={setTest3} question="9. 나는 계속 나의 모든 생각들, 성찰, 새로운 학습에 대해 메모를 달거나 요약한다." />

                    <AbilityQuestion name="ans10" index={0} value={test4} setValue={setTest4} question="10. 나는 성공과 실패가 모두 내가 더 많은 것을 학습하도록 영감을 준다고 생각한다." />
                    <AbilityQuestion name="ans11" index={1} value={test4} setValue={setTest4} question="11. 나는 나의 학습 목표를 달성했는지 여부를 모니터링한다." />
                    <AbilityQuestion name="ans12" index={2} value={test4} setValue={setTest4} question="12. 나는 나의 학습활동을 복습하고 성찰한다." />

                    <AbilityQuestion name="ans13" index={0} value={test5} setValue={setTest5} question="13. 집단 내에서 나의 역할을 분명히 알 수 있다." />
                    <AbilityQuestion name="ans14" index={1} value={test5} setValue={setTest5} question="14. 나는 언어적 의사소통을 잘한다." />
                    <AbilityQuestion name="ans15" index={2} value={test5} setValue={setTest5} question="15. 다른 사람들과의 상호작용은 내가 더 많은 학습을 계획할 수 있는 통찰력을 개발하는데 도움이 된다." />
                </div>
                <div className="h-px w-full bg-gray-200 mt-10" />
                <div className="my-6 flex items-center justify-end gap-x-6">
                    <button
                        type="button"
                        onClick={() => navigate(-1)}
                        className="text-sm font-semibold leading-6 text-gray-900"
                    >
                        취소
                    </button>
                    <button
                        type="button"
                        onClick={onSubmitClick}
                        className="w-14 h-9 rounded-md bg-sky-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
                    >
                        제출
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AbilityTestPage;
