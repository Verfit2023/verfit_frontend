import { useState, useEffect } from 'react';
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import { BookOpenIcon } from '@heroicons/react/24/outline';
import { useSearchParams } from "react-router-dom";
import Workbook from "../components/Workbook";
import RecentViewBanner from "../components/RecentViewBanner";
import { searchWorkbookApi } from '../apis/searchApi';
import { getParams } from '../utils/getParams';

function WorkbookPage() {
    const [searchParams] = useSearchParams();
    const [data, setData] = useState([]);

    const type = searchParams.get('type');
    const keyword = searchParams.get('keyword');

    const fetchData = async () => {
        try {
            const queryString = getParams(type, keyword);
            const response = await searchWorkbookApi(queryString);
            console.log(response);
            setData(response.data.workbooks);
        } catch (e) {
            alert("정보를 가져올 수 없습니다.");
        }
    };

    useEffect(() => {
        fetchData();
    }, [type, keyword])

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
            <div className="flex flex-row w-3/4 mx-auto">
                {data.length == 0 ? (
                    <div className="w-full lg:w-3/4 mb-7">
                        문제집을 찾을 수 없습니다.{' '}
                        <a href="/generate" className="font-semibold text-sky-500 hover:text-sky-400">
                            직접 만들기 <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-7 w-full lg:w-3/4 mb-7">
                        {data.map((problemSet) => (
                            <Workbook data={problemSet} />
                        ))}
                    </div>
                )}
                <div className="hidden lg:flex lg:w-1/4">
                    <RecentViewBanner />
                </div>
            </div>
        </div>
    );
}

export default WorkbookPage;
