import TodoAdd from './components/TodoAdd';
import TodoList from './components/TodoList';
import { useTodo } from './hooks/useTodo';

const TodoApp = () => {

    const { todos, handleNewTodo, handleDeleteTodo, handleToggleTodo, todosCount, pendingTodosCount} = useTodo();

    return (
        <>
            <h1>TodoApp {todosCount}. <small>Pendientes: {pendingTodosCount}</small></h1>
            <br />

            <div>
                <div className='col-5'>
                    <h4>Agregar TODO</h4>
                    <hr />

                    <TodoAdd
                        onNewTodo={handleNewTodo}
                    />
                </div>

                <div className='col-7'>
                    <TodoList
                        todos={todos}
                        onDeleteTodo={handleDeleteTodo}
                        onToggleTodo={handleToggleTodo}
                    />
                </div>
            </div>

        </>
    )
};

export default TodoApp;