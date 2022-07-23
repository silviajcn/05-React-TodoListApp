import {TodoAdd, TodoList} from './components';
import { useTodo } from './hooks/useTodo';
import './todos.css';

const TodoApp = () => {

    const { todos, handleNewTodo, handleDeleteTodo, handleToggleTodo, todosCount, pendingTodosCount, isLoading} = useTodo();

    return (
        <div className='todo-app'>

            {
                isLoading && (<Loader />)
            }

            <header className=''>
                <h1>My ToDo App</h1>
            </header>
            

            <TodoAdd
                onNewTodo={handleNewTodo}
            />

            <h2>ToDos: {todosCount} / ToDos pendientes: {pendingTodosCount}</h2>

            <TodoList
                todos={todos}
                onDeleteTodo={handleDeleteTodo}
                onToggleTodo={handleToggleTodo}
            />

        </div>
    )
};

export default TodoApp;