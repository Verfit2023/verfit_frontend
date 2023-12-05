import { useState, useEffect } from 'react';
import Header from '../components/Header';
import { useNavigate, useParams } from 'react-router-dom';
import Problem from '../components/Problem';
import Comment from '../components/Comment';
import { BookmarkIcon, PaperAirplaneIcon, ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline';
import { addCommentApi, getWorkbookApi, likeWorkbookApi } from '../apis/workbookApi';
import { getCommentParams } from '../utils/getParams';

function WorkbookDetailPage() {
    const [title, setTitle] = useState('');
    const [subject, setSubject] = useState('');
    const [description, setDescription] = useState('');
    const [createdAt, setCreatedAt] = useState('');
    const [problems, setProblems] = useState([]);
    const [summary, setSummary] = useState('');
    const [isOwner, setIsOwner] = useState(false);
    const [isFav, setIsFav] = useState(false);
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');

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
            setIsOwner(response.data.isOwner);
            setIsFav(response.data.isFav);
            setComments(data.comments);
        } catch (e) {
            alert("정보를 가져올 수 없습니다.");
        }
    };

    useEffect(() => {
        fetchData();
    }, [id])

    const onLikeClick = async () => {
        await likeWorkbookApi(parseInt(id));
        setIsFav(!isFav);
    }

    const onSendCommentClick = async () => {
        if (comment == '') {
            alert("댓글을 작성해주세요");
            return;
        }
        const response = await addCommentApi(parseInt(id), getCommentParams(comment));
        setComments(response.data.comments);
    }


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
                    <button onClick={onLikeClick} className="ml-auto mr-0 px-4 py-2">
                        <BookmarkIcon className={`h-6 w-6 ${isFav? 'fill-sky-500' : 'fill-white'}`} />
                    </button>
                </div>
                {summary}
                {problems.map((x) => (
                    <Problem data={x} />
                ))}
            </div>
            <div className="w-3/4 mx-auto">
                <div className="h-px w-full bg-gray-200 mb-7" />
                {comments.map((c) => (
                    <Comment data={c} />
                ))}
                <div className="flex flex-row w-full mb-20 mt-10 items-center">
                    <ChatBubbleBottomCenterTextIcon className="w-7 h-7 mr-5" />
                    <textarea
                        id="comment"
                        name="comment"
                        rows={3}
                        placeholder='Add comment'
                        className="w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2sm:text-sm sm:leading-6"
                        value={comment}
                        onChange={e => setComment(e.target.value)}
                    />
                    <button onClick={onSendCommentClick} className="ml-5">
                        <PaperAirplaneIcon className="w-7 h-7" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default WorkbookDetailPage;
