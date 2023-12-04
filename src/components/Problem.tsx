import { useState } from "react";

interface DataType {
    // id: number,
    problem: string,
    answer: string,
    explanation: string,
}

function Problem(props: { data: DataType }) {
    const [showAnswer, setShowAnswer] = useState(false);

    return (
        <div className="my-10">
            {/* <div className="font-semibold text-lg mb-3">{props.data.id}. {props.data.problem}</div> */}
            <div className="font-semibold text-lg mb-3">{props.data.problem}</div>
            {showAnswer? (
                <>
                    <div className="font-medium text-base">답: {props.data.answer}</div>
                    <div className="font-medium text-base">해설: {props.data.explanation}</div>
                    <button onClick={() => setShowAnswer(false)} className="font-medium text-sm text-sky-500 hover:text-sky-400">Hide Answer</button>
                </>
            ) : (
                <button onClick={() => setShowAnswer(true)} className="font-medium text-sm text-sky-500 hover:text-sky-400">Show Answer</button>
            )}
        </div>
    )
}

export default Problem;