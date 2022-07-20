import { useCallback, useState } from 'react';
import ShowIncrement from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    //sirve para memorizar funciones
    const increment = useCallback(
        (value) => {
            setCounter((c) => c + value);
        },
        [],
    );

    // const increment = () => {
    //     setCounter(counter + 1);
    // }

    return (
        <>
            <h2>use Callback Hook: {counter}</h2>
            <br />

            <ShowIncrement increment={increment}/>
        </>
    )
};