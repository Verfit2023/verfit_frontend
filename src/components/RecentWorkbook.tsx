import { useNavigate } from "react-router-dom";
import { useRecentViewStore } from "../stores/recentViewStore";


interface DataType {
    id: number,
    img: string,
    title: string,
}

function RecentWorkbook(props: { data: DataType }) {
    const { setRecentViewsStore } = useRecentViewStore(state => ({ setRecentViewsStore: state.setRecentViewsStore }));

    const navigate = useNavigate();
    
    const onWorkbookClick = () => {
        setRecentViewsStore({id: props.data.id, img: props.data.img, title: props.data.title});
        navigate(`/workbook/${props.data.id}`)
    };

    return (
        <div
            key={props.data.id}
            onClick={onWorkbookClick}
            className="flex flex-col items-center space-x-2 hover:border hover:border-gray-300"
        >
            <img src={props.data.img} className="h-auto" />
            <div className="font-regular text-base self-start">
                {props.data.title.length > 10 ? props.data.title.slice(0, 10) + '...' : props.data.title}
            </div>
        </div>  
    );
}

export default RecentWorkbook;

