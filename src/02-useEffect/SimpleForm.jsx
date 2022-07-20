import { useEffect, useState } from "react";
import Message from "./Message";


export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'Silvi',
        email: 'silvi@gmail.com'
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;

        setFormState({
            ...formState,
            [name]: value
        });
    }

    //La documentacion recomienda tener los eseEffects separados ppor cada cambio que necesitemos disparar:
    
    // con el arreglo de dependencia le decimos que se dispare una unica vez
    useEffect(() => {
        // console.log('useEffect');
    }, []);

    // cuando queremos que se deispare cada vez que haya un cambio en el form
    useEffect(() => {
        // console.log('formState changed!');
    }, [formState]);

    // cuando queremos que se deispare cada vez que haya un cambio en el email
    useEffect(() => {
        // console.log('formState changed!');
    }, [email]);


    return (
        <>
            <h2>SimpleForm</h2>
            <br />
            
            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />

            <p>El usuario 'Silvis' esxite en nuestra base de datos, no lo puedes repetir!</p>

            {
                username === 'Silvis' && <Message />
            }

            <input
                type="email"
                className="form-control mt-2"
                placeholder="Email"
                name="email"
                value={email}
                onChange={onInputChange}
            /> 

        </>
    )
};