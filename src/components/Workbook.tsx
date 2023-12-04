import { useNavigate } from "react-router-dom";
import { useRecentViewStore } from "../stores/recentViewStore";
import timeAgo from "../utils/timeAgo";


interface DataType {
    workbook_id: number,
    img: string,
    title: string,
    subject: string,
    description: string,
    created_at: string,
}

const mockImg = [
    "https://image.yes24.com/goods/107893287/XL",
    "https://image.yes24.com/goods/107640162/XL",
    "https://image.yes24.com/goods/90464363/XL",
    "https://image.yes24.com/goods/102200740/XL",
    "https://image.yes24.com/goods/78225791/XL",
]

function Workbook(props: { data: DataType }) {
    const { setRecentViewsStore } = useRecentViewStore(state => ({ setRecentViewsStore: state.setRecentViewsStore }));

    const navigate = useNavigate();

    const onWorkbookClick = () => {
        setRecentViewsStore({id: props.data.workbook_id, img: mockImg[props.data.workbook_id % 5], title: props.data.title});
        navigate(`/workbook/${props.data.workbook_id}`)
    };

    return (
        <div
            key={props.data.workbook_id}
            onClick={onWorkbookClick}
            className="bg-white rounded-xl shadow-sm shadow-gray-400 flex flex-row hover:scale-105 p-2 items-center h-32"
        >
            <img src={mockImg[props.data.workbook_id % 5]} alt="문제집 이미지" className="h-24" />
            <div className="px-3 py-1">
                <h3 className="text-lg font-semibold">
                    {props.data.title}
                </h3>
                <p className="text-base text-gray-600 mt-0 mb-3">{props.data.description}</p>
                <p className="text-sm text-gray-400">{timeAgo(props.data.created_at)}</p>
            </div>
        </div>
    )
}

export default Workbook;