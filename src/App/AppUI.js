import React from "react";
import { TodoCounter } from "../TodoCounter";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoItem } from "../TodoItem";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoContext } from '../TodoContext'
import { Modal } from '../Modal'
import { TodoForm } from '../TodoForm'


function AppUI() {

    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext);

    return (

        <React.Fragment>
            <TodoCounter />
            <TodoSearch />
            {/*para poder gozar de lo que se encuentra dentro del value de TodoContext.Provider
            tenemos que envolver los componentes dentro de TodoContext.consumer
            //y para acceder a cada una de la propiedades podriamos utilizar una arrow function que
            destructure las propiedades que se necesiten
            */}

            <TodoList>
                {loading && <p>Tu informacion esta siendo traida desde el backend</p>}
                {error && <p>Hubo un error</p>}
                {(!loading && !searchedTodos.length) && <p>Adelante.. Crea tu 1er todo compañero</p>}
                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />

                ))}
            </TodoList>

            {!!openModal && ( //preguntamos si openModal es true
                //si es true se ejecuta lo siguiente
                <Modal >
                    <TodoForm 
                    setOpenModal={setOpenModal}
                    />
                </Modal>


            )}

            <CreateTodoButton
                setOpenModal={setOpenModal}
            />

        </React.Fragment>

    )


}

export { AppUI };