import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <>
            <h1>Hooks App</h1>
            <hr /> <br />

            <Link to="/counter">
                Go to CounterApp
            </Link>
            <br/>

            <Link to="counter-custom-hook">
                Go to Counter with custom hook
            </Link>
            <br />

            <Link to="simple-form">
                Go to Simple Form
            </Link>
            <br />

            <Link to="form-custom-hook">
                Go to Form With custom hook
            </Link>
            <br />

            <Link to="multiple-custom-hooks">
                Go to Multiple custom hook
            </Link>
            <br />

            <Link to="search-character">
                Go to Search character
            </Link>
            <br />

            <Link to="focus-screen">
                Go to Focus Screen
            </Link>
            <br />

            <Link to="layout">
                Go to useLayoutEffect
            </Link>
            <br />

            <Link to="memorize">
                Go to Memorize
            </Link>
            <br />

            <Link to="memo-hook">
                Go to Memo hook
            </Link>
            <br />

            <Link to="callback-hook">
                Go to use Callback Hook
            </Link>
            <br />

            <Link to="tarea">
                Go to Tarea
            </Link>
            <br />
        </>
    )
};