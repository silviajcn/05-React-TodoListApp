import { todoReducer } from "../../src/00-todoApp/todoReducer";

describe('Pruebas en todoReducer.js', () => {

    const initialState = [{
        id: 1,
        description: 'Demo todo',
        date: '3/8/2022',
        done: false
    }];

    test('debe regresar el estado inicial', () => {

        const newState = todoReducer(initialState, {});
        expect(newState).toBe(initialState);
    });

    test('debe agregar un todo', () => {

        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 1,
                description: 'Add new todo',
                date: '4/9/2022',
                done: false
            }
        };

        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);

    });

    test('debe eliminar un todo', () => {

        const action = {
            type: '[TODO] Remove Todo',
            payload: 1
        };

        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(0);

    });
    
    test('debe realizar el toggle del todo', () => {

        const action = {
            type: '[TODO] Toggle Todo',
            payload: 1
        };

        const newState = todoReducer(initialState, action);
        expect(newState[0].done).toBe(true);

    });

});