import { useNavigate } from "react-router-dom";
import { useRecentViewStore } from "../stores/recentViewStore";
import timeAgo from "../utils/timeAgo";


interface DataType {
    id: number,
    img: string,
    title: string,
    description: string,
    createdAt: string,
}

function Workbook(props: { data: DataType }) {
    const { setRecentViewsStore } = useRecentViewStore(state => ({ setRecentViewsStore: state.setRecentViewsStore }));

    const navigate = useNavigate();

    const onWorkbookClick = () => {
        setRecentViewsStore(props.data.id);
        navigate(`/workbook/${props.data.id}`)
    };

    return (
        <div
            key={props.data.id}
            onClick={onWorkbookClick}
            className="bg-white rounded-xl shadow-sm shadow-gray-400 flex flex-row hover:scale-105 p-1 items-center"
        >
            <img src={props.data.img} alt="문제집 이미지" className="h-24" />
            <div className="px-3 py-1">
                <h3 className="text-lg font-semibold">
                    {props.data.title}
                </h3>
                <p className="text-md text-gray-600 mt-0 mb-3">{props.data.description}</p>
                <p className="text-sm text-gray-400">{timeAgo(props.data.createdAt)}</p>
            </div>
        </div>
    )
}

export default Workbook;