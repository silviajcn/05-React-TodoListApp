import { useState } from 'react';
import { useCounter } from '../hooks';
import Small from './Small';


export const Memorize = () => {

    const { counter, increment } = useCounter(1);
    const [show, setShow] = useState();

    return (
        <div>
            <h2>Memorize</h2>
            <br />

            <h3>Counter: <Small value={counter} /></h3>
            

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