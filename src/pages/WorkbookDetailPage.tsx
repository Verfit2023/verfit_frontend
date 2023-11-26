import Header from '../components/Header';
import { useNavigate, useParams } from 'react-router-dom';
import Problem from '../components/Problem';

const mockImg = "https://search.pstatic.net/sunny/?src=http%3A%2F%2Fwww.bookmouse.co.kr%2Fshopimages%2Fbookmouse%2F338002000229.jpg%3F1495377842&type=sc960_832";

const mockWorkbook = { 
    title: "재료 공학 midterm 대비",
    textbook: "Introduction to Algorithms",
    range: "CH-3",
    img: mockImg,
    type: "서술형 3문제",
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
};

function WorkbookDetailPage() {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();


    return (
        <div className="flex flex-col min-h-full">
            <Header />
            <div className="w-3/4 mx-auto">
                <div className="text-xl font-medium leading-6 text-gray-900 mt-6">문제집</div>
                <div className="flex flex-row items-center mt-10 py-4 my-7 border-y border-gray-200">
                    <img src={mockWorkbook.img} className="h-16 w-16 rounded-full mr-4" />
                    <div className="font-medium">
                        <div className="text-lg">{mockWorkbook.title}</div>
                        <div className="flex flex-row gap-10 test-md">
                            <span>원본 교재: {mockWorkbook.textbook}</span>
                            <span>문제 구성: {mockWorkbook.type}</span>
                            <span>범위: {mockWorkbook.range}</span>
                        </div>
                    </div>
                </div>
                {mockWorkbook.problems.map((x) => (
                    <Problem data={x} />
                ))}
            </div>
        </div>
    );
}

export default WorkbookDetailPage;
