import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();
//Esta es la herramienta de React que nos permite crear contextos
//que son las herramientas que nos van a dar los providers y consumers
//para compartir el estado por todos los componentes de nuestra aplicacion
//lo que en realidad tenemos en React.createContext() son dos componentes
{/* <TodoContext.Provider>
    //este TodoContext.Provider lo vamos a utilizar para envolver tooda nuestra aplicacion
    //en nuestro componente App.js
</TodoContext.Provider>
<TodoContext.Consumer>
//y ademas este TodoContext.Consumer lo vamos a utilizar en todas partes siempre que necesitemos
informacion de ese estado compartido en cualquiera de nuestros componentes
</TodoContext.Consumer> */}
//PERO NOS ESTAREMOS PREGUNTANDO COMO COMPARTIMOS ESA INFORMACION desde TodoContext.Provider 
//HACIA TodoContext.Consumer
//para eso lo q vamos a crear es un puente(una funcion)
const defaultTodos = [

    { text: 'Cortar Cebolla', completed: false },
    { text: 'Fumar mota con mota', completed: false },
    { text: 'Hacer moneyman', completed: true },

]
function TodoProvider(props) {
    //RECORDEMOS QUE ESTE COMPONENTE va hacer un atajo para llegar a este TodoContext.Provider
    //PERO DE UNA VEZ VAMOS A DARLES LOS VALORES, EL ESTADO QUE QUEREMOS COMPARTIR ENTONCES ESTE
    //VA A HACER UN COMPONETE QUE VA A RECIBIR SUS PROPS EN EL FUTURO

    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error

    } = useLocalStorage('TODOs_v1', []);

    const [openModal, setOpenModal] = React.useState(false)

    const [searchValue, setSearchValue] = React.useState('')
    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;
    let searchedTodos = [];

    if (!searchValue.length >= 1) {
        searchedTodos = todos;
    } else {
        searchedTodos = todos.filter(todo => {
            const todoText = todo.text.toLowerCase()
            const searchText = searchValue.toLowerCase();
            return todoText.includes(searchText);
        })
    }

    const addTodo = (text) => {

        // const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos]
        newTodos.push({
            completed: false,
            text
        })
        saveTodos(newTodos);

    }

    const completeTodo = (text) => {

        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos)

    }

    const deleteTodo = (text) => {

        const todoIdex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIdex, 1)
        saveTodos(newTodos)

    }


    return (

        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            addTodo,
            deleteTodo,
            setOpenModal,
            openModal
            /*AQUI DENTRO PODEMOS ENVIAR CUALQUIER CANTIDAD DE VALORES QUE QUERAMOS COMPARTIR POR
            TODAS PARTES  */
        }
        /*
        todas las propiedades que queramos compàrtir en nuestro contexto deben estar dentro de la propiedad value
         */}>
            {/*ESTE COMPONENTE VA ENVOLVER A TODA NUESTRA APLICACION ES DECIR NECESITAMOS
            QUE ESTE TodoContext.Provider tenga por dentro a cualquier component Dentro de los
            componentes que sea donde llamemos al consumidor(TodoContext.Consumer)
            //del contexto
            */}
            {props.children} {/*de esta forma cualquier componente que llame a nuestro componente TodoProvider
            sin impoartar que componente llamemos vamos a enviarlo aqui {props.children}
            y estos componentes van a poder utilizar nuestro consumidor */}
        </TodoContext.Provider>

    )

};

export { TodoContext, TodoProvider };