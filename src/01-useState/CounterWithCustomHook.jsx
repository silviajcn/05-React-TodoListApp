import { useCounter } from '../hooks/useCounter';


export const CounterWithCustomHook = () => {

    const { counter, increment, decrement, reset } = useCounter();

    return (
        <>
            <h2>Counter With Custom Hook: {counter}</h2>
            <br />
            
            <button
                onClick={decrement}
                className="btn btn-primary"
            >
                -1
            </button>

            <button
                onClick={reset}
                className="btn btn-primary"
            >
                Reset
            </button>

            <button
                onClick={() => increment(3)}
                className="btn btn-primary"
            >
                +1
            </button>
        </>
    )
};