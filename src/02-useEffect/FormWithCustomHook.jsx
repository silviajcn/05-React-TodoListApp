import { useEffect } from 'react';
import { useForm } from '../hooks/useForm';

export const FormWithCustomHook = () => {

    const { formState, onInputChange, username, email, password, onResetForm } = useForm({
        username: '',
        email: '',
        password: ''
    });

    // const { username, email, password } = formState;

    useEffect(() => {
        // console.log('useEffect');
    }, []);

    return (
        <>
            <h2>Form With Custom Hook</h2>
            <br />
            
            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />

            <input
                type="email"
                className="form-control mt-2"
                placeholder="Email"
                name="email"
                value={email}
                onChange={onInputChange}
            /> 

            <input
                type="password"
                className="form-control mt-2"
                placeholder="Password"
                name="password"
                value={password}
                onChange={onInputChange}
            /> 

            <button
                onClick={onResetForm}
                className='btn btn-primary mt-3'
            >
                Reset form
            </button>

        </>
    )
};