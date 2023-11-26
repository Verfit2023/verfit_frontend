import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import { BookOpenIcon } from '@heroicons/react/24/outline';
import { useSearchParams } from "react-router-dom";
import Workbook from "../components/Workbook";

function WorkbookPage() {
    const [searchParams] = useSearchParams();

    const type = searchParams.get('type');
    const keyword = searchParams.get('keyword');

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

    return (
        <div className="flex flex-col min-h-full bg-white">
            <Header />
            <SearchBar />
            <div className="flex flex-row w-3/4 mx-auto items-center gap-3">
                <BookOpenIcon className="h-6 w-6" />
                <div className="text-2xl font-semibold">
                    {keyword == ''? '전체 문제집' : '검색된 문제집'}
                </div>
            </div>
            <div className="w-3/4 h-px bg-gray-200 mt-2 mb-7 mx-auto" />
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 w-3/4 mx-auto mb-7">
                {mockProblemSets.map((problemSet) => (
                    <Workbook data={problemSet} />
                ))}
            </div>
        </div>
    );
}

export default WorkbookPage;
