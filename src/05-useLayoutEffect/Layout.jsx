import { useCounter, useFetch } from '../hooks';
import { Loading, Quote } from '../03-examples';

const Layout = () => {

    const { counter, increment } = useCounter(1);

    const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const { author, quote } = !!data && data[0];
    
    return (
        <>
            <h1>Breaking Bad</h1>
            <h3>Multiple Cutom Hooks</h3>
            <br />

            {
                isLoading
                    ? (
                        <Loading />
                    )
                    : (
                        <Quote quote={quote} author={author} />
                      )
            }

            <button
                className='btn btn-primary'
                onClick={() => increment()}
                disabled={isLoading}
            >
                Next quote
            </button>

        </>
    )
};

export default Layout;