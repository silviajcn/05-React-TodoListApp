import { useEffect } from 'react';
import { useFetch, useForm } from '../hooks';
import { Loading } from './Loading';

export const SearchCharacter = () => {

    const { formState, onInputChange, number, onResetForm } = useForm({
        number: ""
    });

    const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/characters/${number}`);

    const { name, img, occupation, status } = !!data && data[0];

    useEffect(() => {

    }, []);

    return (
        <>
            <h1>Search Breaking Bad Character</h1>
            <br />

            <input
                type="text"
                className="form-control"
                placeholder="Enter a number between 1 and 57"
                name="number"
                value={number}
                onChange={onInputChange}
            />


            {
                isLoading
                    ?
                    (
                        <Loading />
                    )
                    :
                    (
                        <>
                            <img src={img} alt={name} className='img-breaking-bad'/>
                            <h3>Nombre: {name}</h3>
                            <p>Ocupacion: {occupation}</p>
                            <p>Status: {status}</p>
                        </>
                    )
            }
        </>
    )
};