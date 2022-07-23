import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <>
            <h1 style={{textAlign: 'center'}}>Hooks App</h1>
            <hr /> <br />

            <Link to="/" className='links'>
                Go to ToDoApp
            </Link>
            <br/>

            <Link to="/counter" className='links'>
                Go to CounterApp
            </Link>
            <br/>

            <Link to="counter-custom-hook" className='links'>
                Go to Counter with custom hook
            </Link>
            <br />

            <Link to="simple-form" className='links'>
                Go to Simple Form
            </Link>
            <br />

            <Link to="form-custom-hook" className='links'>
                Go to Form With custom hook
            </Link>
            <br />

            <Link to="multiple-custom-hooks" className='links'>
                Go to Multiple custom hook
            </Link>
            <br />

            <Link to="search-character" className='links'>
                Go to Search character
            </Link>
            <br />

            <Link to="focus-screen" className='links'>
                Go to Focus Screen
            </Link>
            <br />

            <Link to="layout" className='links'>
                Go to useLayoutEffect
            </Link>
            <br />

            <Link to="memorize" className='links'>
                Go to Memorize
            </Link>
            <br />

            <Link to="memo-hook" className='links'>
                Go to Memo hook
            </Link>
            <br />

            <Link to="callback-hook" className='links'>
                Go to use Callback Hook
            </Link>
            <br />

            <Link to="tarea" className='links'>
                Go to Tarea
            </Link>
            <br />
        </>
    )
};