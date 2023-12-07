function AbilityQuestion(props: {name: string, index: number, value: number[], setValue: (value: number[]) => void, question: string}) {
    const changeValue = (newValue: number) => {
        const newArray = [...props.value];
        newArray[props.index] = newValue;
        props.setValue(newArray);
    };

    return (
        <div>
            <div className="mb-3 text-lg font-semibold">{props.question}</div>

            <div className="flex flex-col gap-1">
                <div className="flex h-6 items-center">
                    <input
                        id="ans1"
                        name={props.name}
                        type="radio"
                        checked={props.value[props.index] == 1}
                        onChange={() => changeValue(1)}
                        className="h-4 w-4 rounded border-gray-300 text-sky-500 focus:ring-sky-500"
                    />
                    <label htmlFor="ans1" className="font-medium ml-2 text-gray-900">
                        매우 그렇지 않다
                    </label>
                </div>

                <div className="flex h-6 items-center">
                    <input
                        id="ans2"
                        name={props.name}
                        type="radio"
                        checked={props.value[props.index] == 2}
                        onChange={() => changeValue(2)}
                        className="h-4 w-4 rounded border-gray-300 text-sky-500 focus:ring-sky-500"
                    />
                    <label htmlFor="ans2" className="font-medium ml-2 text-gray-900">
                        조금 그렇지 않다
                    </label>
                </div>

                <div className="flex h-6 items-center">
                    <input
                        id="ans3"
                        name={props.name}
                        type="radio"
                        checked={props.value[props.index] == 3}
                        onChange={() => changeValue(3)}
                        className="h-4 w-4 rounded border-gray-300 text-sky-500 focus:ring-sky-500"
                    />
                    <label htmlFor="ans3" className="font-medium ml-2 text-gray-900">
                        보통이다
                    </label>
                </div>

                <div className="flex h-6 items-center">
                    <input
                        id="ans4"
                        name={props.name}
                        type="radio"
                        checked={props.value[props.index] == 4}
                        onChange={() => changeValue(4)}
                        className="h-4 w-4 rounded border-gray-300 text-sky-500 focus:ring-sky-500"
                    />
                    <label htmlFor="ans4" className="font-medium ml-2 text-gray-900">
                        조금 그렇다
                    </label>
                </div>

                <div className="flex h-6 items-center">
                    <input
                        id="ans5"
                        name={props.name}
                        type="radio"
                        checked={props.value[props.index] == 5}
                        onChange={() => changeValue(5)}
                        className="h-4 w-4 rounded border-gray-300 text-sky-500 focus:ring-sky-500"
                    />
                    <label htmlFor="ans1" className="font-medium ml-2 text-gray-900">
                        매우 그렇다
                    </label>
                </div>
            </div>
        </div>
    )
}

export default AbilityQuestion;