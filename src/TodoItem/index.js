import React from "react"
import './TodoItem.css'

function TodoItem(props) {
    //esta funcion la llamaremos cuando el usuario haga click en el check

    const onDelete = () => {

        alert('Borraste el todo' +  " " + props.text)

    }

    return (
        //RECORDEMOS QUE PARA AGREGA JS TENEMOS QUE ABRIR LLAVES
        //${props.completed && 'Icon-check--active'} es como si estuvieramos
        //haciendo ${(props.completed) ? 'Icon-check--active' : 'f'}
        //es decir que ${props.completed && 'Icon-check--active'} viene a evaluar
        //si props.completed es verdadero y si lo es se añadira la clase 'Icon-check--active'
        <li className="TodoItem">
            <span
            className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
            onClick={props.onComplete }
            > 
            ✓
            </span>
            <p
            className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}
            >
                {props.text}
            </p>
            <span
            className="Icon Icon-delete"
            onClick={props.onDelete}
            >
                X
            </span>
        </li>

    )

};

export { TodoItem }