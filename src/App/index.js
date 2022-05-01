// import logo from './logo.svg';
// import './App.css';
import React, { Fragment } from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from "../TodoContext";

const defaultTodos = [

  { text: 'Cortar Cebolla', completed: false },
  { text: 'Fumar mota con mota', completed: false },
  { text: 'Hacer moneyman', completed: true },

]

function App() {

  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  )

}

export default App;
