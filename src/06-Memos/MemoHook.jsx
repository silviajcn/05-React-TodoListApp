import { useMemo, useState } from 'react';
import { useCounter } from '../hooks';

const heavyStuff = (iterationNumber = 100) => {
    for (let i = 0; i < iterationNumber; i++) {
        console.log('Ahi vamos...');

        return `${iterationNumber} iteraciones realizadas`;
    }
}

export const MemoHook = () => {

    const { counter, increment } = useCounter(1);
    const [show, setShow] = useState(true);

    const memorizeValue = useMemo(() => heavyStuff(counter), [counter]);

    return (
        <div>
            <h2>MemoHook</h2>
            <br />

            <h3>Counter: <small>{counter}</small></h3>

            <p>{memorizeValue}</p>
            

            <button
                className="btn btn-primary"
                onClick={() => increment()}
            >
                +1
            </button>

            
            <button
                className="btn btn-outline-danger"
                onClick={() => setShow(!show)} 
            >
                Show/ Hide {JSON.stringify(show)}
            </button>

        </div>
    )
};