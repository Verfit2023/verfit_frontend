import { useState } from 'react';
import Header from "../components/Header";
import Problem from "../components/Problem";
import { makeWorkbookApi, saveQuestionApi, saveSummaryApi } from '../apis/generateApi';
import { useNavigate } from 'react-router-dom';
import { getGenerateParams } from '../utils/getParams';

const mockProblem = {
    problems: [
        {
            id: 1,
            problem: 'this is problem 1',
            answer: 'this is answer 1',
            explanation: 'this is explanation 1',
        },
        {
            id: 2,
            problem: 'this is problem 2',
            answer: 'this is answer 2',
            explanation: 'this is explanation 2',
        },
        {
            id: 3,
            problem: 'this is problem 3',
            answer: 'this is answer 3',
            explanation: 'this is explanation 3',
        },
    ]
}

function GenerateCompletePage() {
    const [title, setTitle] = useState('');
    const [subject, setSubject] = useState('');
    const [description, setDescription] = useState('');
    const [isPending, setIsPending] = useState(false);

    const navigate = useNavigate();

    const generateProblems = JSON.parse(localStorage.getItem('generateProblems'));
    const generateSummary = JSON.parse(localStorage.getItem('generateSummary'));

    const onSaveClick = async () => {
        setIsPending(true);
        if (title == '') {
            alert("제목을 입력하세요.");
            setIsPending(false);
            return;
        }
        if (subject == '') {
            alert("과목을 입력하세요.");
            setIsPending(false);
            return;
        }
        if (description == '') {
            alert("설명을 입력하세요.");
            setIsPending(false);
            return;
        }
        try {
            const queryString = getGenerateParams(title, subject, description);
            const response = await makeWorkbookApi(queryString)
            console.log(response);
            const workbookId = response.data.id;
            await saveQuestionApi(workbookId, JSON.stringify(mockProblem));
            await saveSummaryApi(workbookId, JSON.stringify(generateSummary));
            navigate('/workbook/' + workbookId);
            setIsPending(false);
        } catch(e) {
            alert("문제 저장 중 오류가 발생하였습니다. 다시 시도해주세요.");
            setIsPending(false);
        }
    }

    return (
        <div className="flex flex-col min-h-full">
            <Header />
            <div className="w-3/4 mx-auto">
                <div className="text-xl font-medium leading-6 text-gray-900 mt-6">문제집 저장</div>
                <div className="flex flex-row items-center mt-10 py-4 my-7 border-y border-gray-200">
                    <div className="font-medium w-3/4">
                        <div className="flex flex-row text-lg w-full mb-2">
                            <label htmlFor="title" className="mr-3">
                                제목:
                            </label>
                            <input
                                id="title"
                                name="title"
                                type="text"
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                                className="w-1/2 border-b border-gray-900 px-1"
                            />
                        </div>
                        <div className="flex flex-row text-base">
                            <label htmlFor="subject" className="mr-3">
                                과목:
                            </label>
                            <input
                                id="subject"
                                name="subject"
                                type="text"
                                value={subject}
                                onChange={e => setSubject(e.target.value)}
                                className="w-1/4 border-b border-gray-900 px-1 mr-5"
                            />
                            <label htmlFor="description" className="mr-3">
                                설명:
                            </label>
                            <input
                                id="description"
                                name="description"
                                type="text"
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                                className="w-1/2 border-b border-gray-900 px-1"
                            />
                        </div>
                    </div>
                    {isPending ? (
                        <button
                            type="button"
                            disabled
                            className="ml-auto mr-0 py-2 w-14 h-9 rounded-md bg-sky-500 px-3 text-sm font-semibold text-white shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
                        >
                            <svg aria-hidden="true" role="status" className="inline w-4 h-6 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                            </svg>
                        </button>
                    ) : (
                        <button
                            type="button"
                            onClick={onSaveClick}
                            className="ml-auto mr-0 w-14 h-9 rounded-md bg-sky-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
                        >
                            저장
                        </button>
                    )}
                </div>
                <div className="mt-10 py-4 my-7 font-regular text-base">
                    {generateSummary}
                </div>
                {mockProblem.problems.map((x) => (
                    <Problem data={x} />
                ))}
            </div>
        </div>
    );
}

export default GenerateCompletePage;