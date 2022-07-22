import PropTypes from 'prop-types';

const TodoItem = ({todo, onDeleteTodo, onToggleTodo}) => {
    return (
        <li className='list-group-item d-flex justify-content-between'>
            <span
                className={`align-self-center ${(todo.done) ? 'text-decoration-line-through' : ''}`}
                onClick={() => onToggleTodo(todo.id)}
            >
                {todo.description}
            </span>

            <button
                className='btn btn-danger'
                onClick={() => onDeleteTodo(todo.id)}
            >
                Delete
            </button>
        </li>
    )
};

export default TodoItem;

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    onDeleteTodo: PropTypes.func.isRequired,
    onToggleTodo:PropTypes.func.isRequired
}

TodoItem.defaultProps = {
    todo: {},
}