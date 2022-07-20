import { useState } from "react";


export const CounterApp = () => {

    const [state, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    });

    const { counter1, counter2, counter3 } = state;

    return (
        <>
            <h2>Counter 1: {counter1}</h2>
            <h2>Counter 2: {counter2}</h2>
            <h2>Counter 3: {counter3}</h2>

            <br />
            
            <button
                onClick={() => setCounter({
                    ...state,
                    counter1: counter1 + 1
                })}
                className="btn btn-primary"
            >+1</button>
        </>
    )
};