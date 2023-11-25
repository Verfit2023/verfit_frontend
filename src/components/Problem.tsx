import { useState } from "react";

function Problem(props: { data }) {
    const [showAnswer, setShowAnswer] = useState(false);

    return (
        <div className="my-10">
            <div className="font-semibold text-lg mb-3">{props.data.id}. {props.data.problem}</div>
            {showAnswer? (
                <>
                    <div className="font-medium text-md">{props.data.answer}</div>
                    <div className="font-medium text-sm">{props.data.explanation}</div>
                    <div onClick={() => setShowAnswer(false)} className="font-medium text-md text-sky-500">Hide Answer</div>
                </>
            ) : (
                <div onClick={() => setShowAnswer(true)} className="font-medium text-md text-sky-500">Show Answer</div>
            )}
        </div>
    )
}

export default Problem;