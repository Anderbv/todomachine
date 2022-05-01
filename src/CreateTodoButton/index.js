import React from "react";
import './CreateTodoButton.css'

function CreateTodoButton({setOpenModal}) {

    
    const onClickButton = () => {

        setOpenModal(verdad => !verdad)
        //si es verdad es false y si es false es verdad y asi infinitamente
        

    }
    return (

        <button
        className="CreateTodoButton"
        onClick={onClickButton}

        >

            +
        </button>

    )

}

export { CreateTodoButton }