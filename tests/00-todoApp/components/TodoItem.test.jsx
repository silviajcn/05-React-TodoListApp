import { fireEvent, render, screen } from '@testing-library/react';
import TodoItem from '../../../src/00-todoApp/components/TodoItem';


describe('Pruebas en <TodoItem />', () => {

    const todo = {
        id: 1,
        description: 'Demo todo',
        date: '3/8/2022',
        done: false
    };

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach(() => jest.clearAllMocks());
    
    test('debe mostrar el todo pendiente de completar', () => {

        render(<TodoItem
                    todo={todo}
                    onDeleteTodo={onDeleteTodoMock}
                    onToggleTodo={onToggleTodoMock}
                />
        );

        const liElement = screen.getByRole('listitem');
        expect(liElement.className).toBe('todo-row');

        const spanElement = screen.getByLabelText('p');
        expect(spanElement.className).toContain('text-todo');
        expect(spanElement.className).not.toContain('complete');


        screen.debug();

    });

    test('debe mostrar el todo completado', () => {

        todo.done = true;

        render(<TodoItem
                    todo={todo}
                    onDeleteTodo={onDeleteTodoMock}
                    onToggleTodo={onToggleTodoMock}
                />
        );

        const spanElement = screen.getByLabelText('p');
        expect(spanElement.className).toContain('complete');


        screen.debug();

    });

    test('el span debe llamar el ToggleTodo cuando se hace click', () => {

        render(<TodoItem
                    todo={todo}
                    onDeleteTodo={onDeleteTodoMock}
                    onToggleTodo={onToggleTodoMock}
                />
        );

        const spanElement = screen.getByLabelText('p');
        fireEvent.click(spanElement);

        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);

    });

    test('el boton debe llamar el DeleteTodo', () => {

        render(<TodoItem
                    todo={todo}
                    onDeleteTodo={onDeleteTodoMock}
                    onToggleTodo={onToggleTodoMock}
                />
        );

        // const deleteButton = screen.getByLabelText('delete todo');
        const deleteButton = screen.getByRole('button');
        fireEvent.click(deleteButton);

        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
        
    });

});