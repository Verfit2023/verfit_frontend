import { useState, useEffect } from 'react';
import Header from '../components/Header';
import { useNavigate, useParams } from 'react-router-dom';
import Problem from '../components/Problem';
import { BookmarkIcon } from '@heroicons/react/24/outline';
import { getWorkbookApi } from '../apis/workbookApi';

function WorkbookDetailPage() {
    const [title, setTitle] = useState('');
    const [subject, setSubject] = useState('');
    const [description, setDescription] = useState('');
    const [createdAt, setCreatedAt] = useState('');
    const [problems, setProblems] = useState([]);
    const [summary, setSummary] = useState('');

    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    const fetchData = async () => {
        try {
            const response = await getWorkbookApi(parseInt(id));
            const data = response.data.workbook;
            setTitle(data.title);
            setSubject(data.subject);
            setDescription(data.description);
            setCreatedAt(data.created_at.slice(0, 10));
            const problems = JSON.parse(data.problems[0][1].text).problems;
            setProblems(problems);
            const summary = JSON.parse(data.summaries[0].text);
            setSummary(summary);
        } catch (e) {
            alert("정보를 가져올 수 없습니다.");
        }
    };

    useEffect(() => {
        fetchData();
    }, [id])


    return (
        <div className="flex flex-col min-h-full">
            <Header />
            <div className="w-3/4 mx-auto">
                <div className="text-xl font-medium leading-6 text-gray-900 mt-6">문제집</div>
                <div className="flex flex-row items-center mt-10 py-4 my-7 border-y border-gray-200">
                    <div className="font-medium">
                        <div className="text-lg">제목: {title}</div>
                        <div className="flex flex-row gap-10 text-base">
                            <span>과목: {subject}</span>
                            <span>설명: {description}</span>
                            <span>생성일: {createdAt}</span>
                        </div>
                    </div>
                    <button className="ml-auto mr-0 px-4 py-2">
                        <BookmarkIcon className="h-6 w-6 fill-sky-500 hover:fill-sky-400" />
                    </button>
                </div>
                {summary}
                {problems.map((x) => (
                    <Problem data={x} />
                ))}
            </div>
        </div>
    );
}

export default WorkbookDetailPage;
