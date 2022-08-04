import PropTypes from 'prop-types';
import {
    FaTrashAlt,
    // FaEdit
} from "react-icons/fa";

const TodoItem = ({todo, onDeleteTodo, onToggleTodo}) => {
    return (
        <li className='todo-row'>
            <p
                className={`text-todo ${(todo.done) ? 'complete' : ''}`}
                onClick={() => onToggleTodo(todo.id)}
            >
                {todo.description} <br />
                <span className='date'>{ todo.date }</span>
            </p>

            <div className='containar-btns'>
                {/* <button
                    aria-label="edit todo"
                    className='btn btn-primary edit-icon'
                >
                    <FaEdit />
                </button> */}

                <button
                    aria-label="delete todo"
                    className='btn btn-danger'
                    onClick={() => onDeleteTodo(todo.id)}
                >
                    <FaTrashAlt/>
                </button>
            </div>
            
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