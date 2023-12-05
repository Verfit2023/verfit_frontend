import timeAgo from "../utils/timeAgo";


interface DataType {
    content: string,
    writer_nickname: string,
    created_at: string,
}

function Comment(props: { data: DataType }) {
    return (
        <div
            key={props.data.content}
            className="flex flex-col w-full mb-7"
        >
            <div className="flex flex-row items-center w-full mb-2">
                <p className="text-sm text-gray-600 mr-7">{props.data.writer_nickname}</p>
                <p className="text-sm text-gray-400 mr-0 ml-auto">{timeAgo(props.data.created_at)}</p>
            </div>
            <p className="text-base text-gray-900">{props.data.content}</p>
        </div>
    )
}

export default Comment;