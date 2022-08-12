import { render, screen } from '@testing-library/react';
import { useTodo } from '../../src/00-todoApp/hooks/useTodo';
import TodoApp from '../../src/00-todoApp/TodoApp';

jest.mock('../../src/00-todoApp/hooks/useTodo');

describe('Pruebas en <TodoApp />', () => {

    useTodo.mockReturnValue({
        todos: [
            { id: 1, description: 'Demo todo 1', date: '3/8/2022', done: false },
            { id: 2, description: 'Demo todo 2', date: '5/10/2022', done: true }
        ],
        handleNewTodo: jest.fn(),
        handleDeleteTodo: jest.fn(),
        handleToggleTodo: jest.fn(),
        todosCount: 2,
        pendingTodosCount: 1
    })

    test('debe mostrar el componente correctamente', () => {

        render(<TodoApp />);
        screen.debug();

        expect(screen.getByText('Demo todo 1')).toBeTruthy();
        expect(screen.getByText('Demo todo 2')).toBeTruthy();
        expect(screen.getByRole('textbox')).toBeTruthy();
        
    });
});