import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoList = ({todos, onDeleteTodo, onToggleTodo}) => {

    return (
        <ul className='list-group'>
            {
                todos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onDeleteTodo={onDeleteTodo}
                        onToggleTodo={onToggleTodo}
                    />
                ))
            }
        </ul>
    )
};

export default TodoList;

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    onDeleteTodo: PropTypes.func.isRequired,
    onToggleTodo:PropTypes.func.isRequired
}

TodoList.defaultProps = {
    todos: [],
}