import { useState } from "react";
import timeAgo from "../utils/timeAgo";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";

function HomePage() {
    const [searchQuery, setSearchQuery] = useState('');

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
        <div className="flex flex-col min-h-full">
            <Header />

            <div className="p-6">
                <SearchBar />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 px-6 py-6 bg-gray-100">
                {mockProblemSets.map((problemSet) => (
                    <div
                        key={problemSet.id}
                        className="bg-white rounded-md shadow-md flex flex-col hover:scale-105"
                    >
                        <img src={problemSet.img} alt="문제집 이미지" className="h-40 rounded-t-md" />
                        <div className="px-3 py-2">
                            <h3 className="text-lg font-semibold">
                                {problemSet.title}
                            </h3>
                            <p className="text-md text-gray-600 mb-2">{problemSet.description}</p>
                            <p className="text-sm text-gray-400">{timeAgo(problemSet.createdAt)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HomePage;
