import { useEffect, useState } from 'react';


const Message = () => {

    const [coords, setCoords] = useState({x: 0, y: 0});

    useEffect(() => {
        //console.log('Messaage mounted');

        const onMouseMove = ({ x, y }) => {
            //const coords = { x, y };
            //console.log(coords);
            setCoords({ x, y });
        }

        window.addEventListener('mousemove', onMouseMove);

        // window.addEventListener('mousemove', (event) => {

            // Ver las coordenadas de X y Y cuando se mueve el mouse
        //     console.log(event.x, event.y);
        // });
    
        return () => {
            //console.log('Messaage unmounted');
            window.removeEventListener('mousemove', onMouseMove);
        }
    }, []);
    
    return (
        <>
            <h3>Usuario ya existe</h3>
            {JSON.stringify(coords)}
        </>
    )
};

export default Message;