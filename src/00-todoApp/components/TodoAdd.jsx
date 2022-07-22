import { useForm } from '../../hooks/useForm';

const current = new Date();
const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

const TodoAdd = ({ onNewTodo }) => {

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
        <form onSubmit={onFormSubmit}>
            <input
                type='text'
                placeholder="Add TODO"
                className='form-control'
                value={description}
                name='description'
                onChange={onInputChange}
            />

            <button
                type='submit'
                className='btn btn-outline-primary mt-1'
            >
                Agregar
            </button>
        </form>
    )
};

export default TodoAdd;