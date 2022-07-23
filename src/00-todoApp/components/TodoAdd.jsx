import { useForm } from '../../hooks/useForm';

const current = new Date();
const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

export const TodoAdd = ({ onNewTodo }) => {

    const { formState, onInputChange, onResetForm, description } = useForm({
        description: "",
    });

    const onFormSubmit = (e) => {
        e.preventDefault();

        if (description.length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            description: description,
            date: date,
            done: false
        }

        onNewTodo(newTodo);
        onResetForm();
    }

    return (
        <form onSubmit={onFormSubmit} className='todo-form'>
            <label htmlFor="add_todo" className='label-search' >Search GIFs</label>
            <input
                autoComplete='off'
                id='add_todo'
                type='text'
                placeholder="Add New ToDo"
                className='todo-input'
                value={description}
                name='description'
                onChange={onInputChange}
            />

            <button
                type='submit'
                className='todo-button'
            >
                Add
            </button>
        </form>
    )
};