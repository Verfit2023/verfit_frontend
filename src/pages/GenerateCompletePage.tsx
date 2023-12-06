import { useState } from 'react';
import Header from "../components/Header";
import Problem from "../components/Problem";
import { makeWorkbookApi, saveQuestionApi, saveSummaryApi } from '../apis/generateApi';
import { useNavigate } from 'react-router-dom';
import { getGenerateParams } from '../utils/getParams';
import LineBreak from '../components/LineBreak';

const mockSummary = "요약:\n이 슬라이드는 Roger S. Pressman에 의해 저술된 'Software Engineering: A Practitioner’s Approach' 8판(맥그로 힐, 2009년)의 부록으로, 소프트웨어 엔지니어링 원리와 실무를 안내합니다. 슬라이드에 따르면, 소프트웨어 개발 지식은 기술 분야의 지식보다는 '소프트웨어 공학 원칙'이라고 불리는 지식으로 개발자의 전문가 경력 동안 유용하다고 설명됩니다. 이는 소프트웨어 계획과 개발에 관련된 다양한 원칙, 개념, 방법 및 도구를 포함합니다. 소프트웨어 실무는 소프트웨어가 계획되고 개발될 때 고려해야 하는 원칙, 개념, 방법 및 도구의 폭넓은 집합이며, 소프트웨어 엔지니어 및 그들의 매니저들이 사용합니다. 슬라이드에는 '관행'이라고 불리는 소프트웨어 공학 프로세스와 실무를 안내하는 원칙들이 소개됩니다. 이러한 원칙은 '민첩성', '품질에 집중', '적응 가능성', '효과적인 팀 구축'과 같은 내용을 다룹니다. 또한 소프트웨어 모델링, 통신, 계획, 구축, 및 검증에 관한 다양한 원칙들도 제시됩니다.\n\n발췌:\n이 슬라이드는 맥그로 힐 출판사에서 2009년에 출간된 로저 S. 프레스만의 '소프트웨어 공학: 실무자의 접근법' 7판에 동봉된 것으로, 소프트웨어 엔지니어링 원리와 실무를 안내합니다. 소프트웨어 개발 지식은 기술 분야의 지식보다는 '소프트웨어 공학 원칙'이라고 불리는 지식으로 개발자의 전문가 경력 동안 유용하다고 설명됩니다. 이는 소프트웨어 계획과 개발에 관련된 다양한 원칙, 개념, 방법 및 도구를 포함합니다."

const mockProblem = [
    "Question:\n These software engineering principles are likely to serve a professional programmer throughout his or her career. According to Steve McConnell, these principles are often referred to as \"software engineering principles\" and have no three-year half-life. Who refers to these principles as \"software engineering principles\"?\n\n Answer:\n Steve McConnell\n\n Explanation:\n In the given excerpt, it's mentioned that software engineering principles have no three-year half-life, and they are likely to serve a professional programmer throughout his or her career, according to Steve McConnell. Therefore, the answer is that these principles are referred to as \"software engineering principles\" by Steve McConnell.",
    "Question:\n Principle #3 in the Deployment Principles states that a support regime must be established before the software is delivered. Why is this important?\n Answer:\n An end-user expects responsiveness and accurate information when a question or problem arises.\n Explanation:\n A support regime ensures that when a question or problem arises, the end-user gets the necessary help immediately. This responsiveness and provision of accurate information are crucial for a smooth experience with the software, enhancing user satisfaction. Therefore, setting up a support system before the software is delivered is important for a successful deployment process. Referenced principle #3 in the Deployment Principles from the provided lecture content.",
    "Question:\n Principle #3. The models that depict information, function, and behavior must be partitioned in a manner that uncovers detail in a layered (or hierarchical) fashion. Which principle does this statement refer to?\n Answer:\n Requirements Modeling Principles.\n Explanation:\n In the passage, it is mentioned that the principle #3 states, \"The models that depict information, function, and behavior must be partitioned in a manner that uncovers detail in a layered (or hierarchical) fashion.\" This statement aligns with the Requirements Modeling Principles outlined in the lecture. These principles are essential for representing customer requirements through analysis models. Therefore, the correct answer is Requirements Modeling Principles.",
    "Question:\n What advice does principle #7 in \"Communication Principles\" emphasize? \n Answer:\n Stay focused, modularize your discussion.\nExplanation:\n Principle #7 in \"Communication Principles\" states the importance of focusing and modularizing discussions, especially when involving more people, to prevent conversations from bouncing from one topic to the next. It emphasizes the necessity to maintain a structured and focused discussion.",
    "Question:\n What must be represented and understood in the information domain of a problem?\n Answer:\n The information domain of a problem must be represented and understood.\n Explanation:\n This is outlined in the Requirements Modeling Principles, where it emphasizes the importance of representing and understanding the information domain of a problem as a fundamental principle for successful software engineering. This principle lays the groundwork for establishing effective models that accurately portray the problem at hand.",
    "Question:\n In software engineering work, two classes of models can be created which include Requirements models and Design models. What part of the software industry are these models more associated with?\n Answer:\n The software modeling and construction process.\n Explanation:\n The description of requirements models and design models in the provided lecture suggests that they are created to represent the customer requirements and characteristics of the software, which are essential parts in the software industry's modeling and development process. These models help practitioners to construct the software effectively in different domains such as information, functionality, and design. They provide a systematic approach to understanding the software's needs and how it should be developed. Referencing the disclosed lecture content provides a direct and accurate response.",
    "Question:\n According to the lecture content, software engineering principles have a half-life of approximately how many years?\n Answer:\n Three years.\n Explanation:\n The lecture mentions that software development knowledge may have a 3-year half-life, meaning that half of the knowledge will be obsolete within 3 years. However, software engineering principles, referred to as \"software engineering principles,\" are likely to serve a professional programmer throughout their career. Therefore, these software engineering principles do not have a three-year half-life. Refer to the quote: \"You often hear people say that software development knowledge has a 3-year half-life: half of what you need to know today will be obsolete within 3 years. In the domain of technology-related knowledge, that's probably about right. But there is another kind of software development knowledge - a kind that I think of as 'software engineering principles' - that does not have a three-year half-life.\"",
    "Question:\n Before you meet with others, spend time to understand the problem. This aligns with which communication principle?\n Answer:\n Communication Principle #2.\n Explanation:\n Principle #2 states, \"Prepare before you communicate. Spend the time to understand the problem before you meet with others.\" This principle emphasizes the importance of thorough preparation before engaging in communication activities.",
    "Question:\n What are the different categories of software engineering work for which principles are outlined?\nAnswer:\n Requirements modeling, Design modeling, Agile modeling, Construction, Preparation, Coding, Validation, Testing, Deployment.\nExplanation:\n The lecture outlines different categories of software engineering work, including requirements modeling, design modeling, agile modeling, construction, preparation, coding, validation, testing, and deployment. Each category follows specific principles and concepts to guide the respective tasks. These principles are crucial for ensuring the successful engineering of software.",
    "Question:\n In the domain of technology-related knowledge, what are likely to serve a professional programmer throughout his or her career?\n Answer:\n Software engineering principles.\n Explanation:\nThe passage from the lecture states that software development knowledge has a 3-year half-life in the domain of technology-related knowledge. However, there is another kind of software development knowledge, namely \"software engineering principles,\" that does not have a three-year half-life and is likely to serve a professional programmer throughout his or her career. This highlights the enduring and foundational nature of software engineering principles in the field of software development. These principles are emphasized to be key for professional programmers."
]

function GenerateCompletePage() {
    const [title, setTitle] = useState('');
    const [subject, setSubject] = useState('');
    const [description, setDescription] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const [isPending, setIsPending] = useState(false);

    const navigate = useNavigate();

    const generateProblems = JSON.parse(localStorage.getItem('generateProblems'));
    // console.log(generateProblems);
    const generateSummary = JSON.parse(localStorage.getItem('generateSummary'));
    // const generateSummary = 'ddd';

    function convertToObjects(problems: []) {
        const formattedProblems = [];
        let id = 1;
    
        problems.forEach(problem => {
            const [notUsed, questionPart, answerPart, explanationPart] = problem.split(':');
            const formattedObject = {
                "Id": id,
                "Question": questionPart.replace('Answer', '').replace('answer:', '').trim().trim('\n'),
                "Answer": answerPart.replace('Explanation', '').replace('explanation:', '').trim().trim('\n'),
                "Explanation": explanationPart.trim().trim('\n')
            };
    
            formattedProblems.push(formattedObject);
            id += 1;
        });
    
        return formattedProblems;
    }
    
    // 변환된 객체 배열 출력
    const formattedProblems = convertToObjects(generateProblems);
    console.log(formattedProblems);

    const formattedSummary = generateSummary.replace('요약:\n', '');


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
        if (imgUrl == '') {
            alert("표지 이미지 URL을 입력하세요.");
            setIsPending(false);
            return;
        }
        try {
            const queryString = getGenerateParams(title, subject, description, imgUrl);
            const response = await makeWorkbookApi(queryString)
            console.log(response);
            const workbookId = response.data.id;
            await saveQuestionApi(workbookId, JSON.stringify(formattedProblems));
            await saveSummaryApi(workbookId, JSON.stringify(formattedSummary));
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
                        <div className="flex flex-row text-base mb-2">
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
                        <div className="flex flex-row text-base">
                            <label htmlFor="imgUrl" className="mr-3">
                                표지 이미지 URL:
                            </label>
                            <input
                                id="imgUrl"
                                name="imgUrl"
                                type="text"
                                value={imgUrl}
                                onChange={e => setImgUrl(e.target.value)}
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
                    <LineBreak text={formattedSummary} />
                </div>
                <div className="h-px w-full bg-gray-200 mb-7" />
                {formattedProblems.map((x) => (
                    <Problem data={x} />
                ))}
            </div>
        </div>
    );
}

export default GenerateCompletePage;