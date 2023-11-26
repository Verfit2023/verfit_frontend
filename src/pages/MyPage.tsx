import Header from "../components/Header";
import { BookOpenIcon } from '@heroicons/react/24/outline';
import Workbook from "../components/Workbook";

const mockProfileImg = 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg';

const mockImg = "https://search.pstatic.net/sunny/?src=http%3A%2F%2Fwww.bookmouse.co.kr%2Fshopimages%2Fbookmouse%2F338002000229.jpg%3F1495377842&type=sc960_832";

const mockProblemSets = [
    { id: 1, title: "재료 공학 midterm 대비", description: "Introduction to Algorithms CH1-CH3", img: mockImg, createdAt: "2022-10-15T12:00:00Z" },
    { id: 2, title: "알고리즘 분석", description: "Introduction to Algorithms CH1-CH3", img: mockImg, createdAt: "2023-10-15T12:00:00Z" },
    { id: 3, title: "컴퓨터 네트워크", description: "Introduction to Algorithms CH1-CH3", img: mockImg, createdAt: "2023-10-20T12:00:00Z" },
    { id: 4, title: "시스템 프로그래밍", description: "Introduction to Algorithms CH1-CH3", img: mockImg, createdAt: "2023-11-2T12:00:00Z" },
    { id: 5, title: "컴퓨터 구조론", description: "Introduction to Algorithms CH1-CH3", img: mockImg, createdAt: "2023-11-10T12:00:00Z" },
    { id: 6, title: "선대", description: "Introduction to Algorithms CH1-CH3", img: mockImg, createdAt: "2023-11-17T12:00:00Z" },
    { id: 7, title: "확률과 통계", description: "Introduction to Algorithms CH1-CH3", img: mockImg, createdAt: "2023-11-18T12:00:00Z" },
    { id: 8, title: "이산구조", description: "Introduction to Algorithms CH1-CH3", img: mockImg, createdAt: "2023-11-18T14:00:00Z" },
    { id: 9, title: "오토마타 기말", description: "Introduction to Algorithms CH1-CH3", img: mockImg, createdAt: "2023-11-18T14:20:00Z" },
    { id: 10, title: "오토마타 기말", description: "Introduction to Algorithms CH1-CH3", img: mockImg, createdAt: "2023-11-18T14:20:00Z" },
    { id: 11, title: "오토마타 기말", description: "Introduction to Algorithms CH1-CH3", img: mockImg, createdAt: "2023-11-18T14:20:00Z" },
    { id: 12, title: "오토마타 기말", description: "Introduction to Algorithms CH1-CH3", img: mockImg, createdAt: "2023-11-18T14:20:00Z" },
    { id: 13, title: "오토마타 기말", description: "Introduction to Algorithms CH1-CH3", img: mockImg, createdAt: "2023-11-18T14:20:00Z" },
    { id: 14, title: "오토마타 기말", description: "Introduction to Algorithms CH1-CH3", img: mockImg, createdAt: "2023-11-18T14:20:00Z" },
    { id: 15, title: "오토마타 기말", description: "Introduction to Algorithms CH1-CH3", img: mockImg, createdAt: "2023-11-18T14:20:00Z" },
];

function MyPage() {


    return (
        <div className="flex flex-col min-h-full bg-white">
            <Header />
            <div className="w-3/4 mx-auto">
                <div className="text-xl font-medium leading-6 text-gray-900 mt-6">마이페이지</div>
                <div className="flex flex-row justify-start py-4 mt-10 mb-7 border-y border-gray-200">
                    <img src={mockProfileImg} className="w-16 h-16 rounded-full" />
                    <div className="flex flex-col justify-center ml-4 font-medium">
                        <p className="text-lg">닉네임</p>
                        <p className="text-base">한 줄 소개</p>
                    </div>
                </div>
                <div className="flex flex-row items-center gap-3 mb-3">
                    <BookOpenIcon className="h-6 w-6" />
                    <div className="text-2xl font-semibold">나의 문제집</div>
                </div>
            </div>
            <div className="flex flex-row w-3/4 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7 w-full lg:w-3/4 mb-7">
                    {mockProblemSets.map((problemSet) => (
                        <Workbook data={problemSet} />
                    ))}
                </div>
                <div className="hidden lg:flex lg:w-1/4">
                    <div className="ml-auto mr-0 flex flex-row items-center justify-between border-gray-200 border rounded-md px-4 py-3 w-40 h-fit">
                        <div className="flex flex-col items-end">
                            <div className="font-regular text-sm text-gray-400">문제집</div>
                            <div className="font-semibold text-lg">2</div>
                        </div>
                        <div className="flex flex-col items-end">
                            <div className="font-regular text-sm text-gray-400">문제 개수</div>
                            <div className="font-semibold text-lg">15</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyPage;
