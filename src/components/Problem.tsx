import { useState } from "react";

interface DataType {
    Id: number,
    Question: string,
    Answer: string,
    Explanation: string,
}

function Problem(props: { data: DataType }) {
    const [showAnswer, setShowAnswer] = useState(false);

    return (
        <div className="my-10">
            <div className="font-medium text-base mb-3">{props.data.Id}. {props.data.Question}</div>
            {/* <div className="font-semibold text-lg mb-3">{props.data.Question}</div> */}
            {showAnswer? (
                <>
                    <div className="font-regular text-base">답: {props.data.Answer}</div>
                    <div className="font-regular text-base">해설: {props.data.Explanation}</div>
                    <button onClick={() => setShowAnswer(false)} className="font-regular text-sm text-sky-500 hover:text-sky-400">Hide Answer</button>
                </>
            ) : (
                <button onClick={() => setShowAnswer(true)} className="font-regular text-sm text-sky-500 hover:text-sky-400">Show Answer</button>
            )}
        </div>
    )
}

export default Problem;