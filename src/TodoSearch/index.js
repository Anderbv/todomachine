import React from "react";
import './TodoSearch.css'
import { TodoContext } from "../TodoContext";

function TodoSearch() {

    const {searchValue, setSearchValue} = React.useContext(TodoContext)

    const onSearchValueChangue = (e) => {

        console.log(e.target.value)

        setSearchValue(e.target.value)


    }

    return (

        <input
        className="TodoSearch"
        placeholder="Writeee" 
        value={searchValue}
        onChange={onSearchValueChangue}
        />

    )



};

export { TodoSearch };