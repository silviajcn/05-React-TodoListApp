import { TodoAdd, TodoList} from './components';
import { useTodo } from './hooks/useTodo';
// import './todos.css';

const TodoApp = () => {

    const { todos, handleNewTodo, handleDeleteTodo, handleToggleTodo, todosCount, pendingTodosCount } = useTodo();

    return (
        <section className='todo-app'>

            <TodoAdd
                onNewTodo={handleNewTodo}
            />

            <h2>ToDos: {todosCount} / ToDos pendientes: {pendingTodosCount}</h2>

            <TodoList
                todos={todos}
                onDeleteTodo={handleDeleteTodo}
                onToggleTodo={handleToggleTodo}
            />

        </section>
    )
};

export default TodoApp;