import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css'

function TodoForm() {

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext)

    const onCancel = (e) => {
        e.preventDefault()
        setOpenModal(false)

    }
    const onSubmit = (e) => {
        e.preventDefault();
        addTodo(newTodoValue)
        setOpenModal(false)

    }

    const onChangue = (e) => {

        console.log(e.target.value)
        //actualizamos el estado de newTodoValue con lo que el usuario
        //escriba dentro del textarea
        setNewTodoValue(e.target.value)

    }

    return (
        <form
        onSubmit={onSubmit}
        >
            <label>Write your new task</label>
            <textarea
            placeholder="Street Punks"
            value={newTodoValue}
            onChange={onChangue}
            />
            <div className="TodoForm-buttonContainer">
                <button
                className="TodoForm-button TodoForm-button--cancel"
                type="button"
                onClick={onCancel}
                >
                    Cancel
                </button>
                <button
                type="submit"
                className="TodoForm-button TodoForm-button-add"
                >
                    Add
                </button>
            </div>
        </form>
    )


}

export { TodoForm }