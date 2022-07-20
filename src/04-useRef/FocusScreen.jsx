import { useRef } from 'react';


const FocusScreen = () => {

    const inputRef = useRef();
    //console.log(ref);

    const onClick = () => {
        //console.log(inputRef);
        inputRef.current.select();
    }
    
    return (
        <div>
            <h2>FocusScreen</h2>
            <br />

            <input
                ref={inputRef}
                type="text"
                placeholder="Enter a name"
                className="form-control"
            />

            <button
                onClick={onClick}
                className="btn btn-primary mt-2"
            >
                Set focus
            </button>
        </div>
    )
};
    
export default FocusScreen;