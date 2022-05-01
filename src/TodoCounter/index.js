import React from "react";
import './TodoCounter.css';
import { TodoContext } from "../TodoContext";

//LOS ESTILOS EN JAVASCRIPT Y EN REACT NO FUNCIONAN CON STRINGS O NO ALMENOS
//EN LA FORMA EN LA QUE LAS VAMOS A TRABAJAR EN ESTA CLASE
//SIMPLEMENTE TENEMOS QUE CREAR UN OBJETO 

const estilos = {

    color: 'red',
    backgroundColor: 'yellow',


}

    //Y SIGUIENDO UNA NOMENCLATURA DIFERENTE DEFINIR CADA UNA DE NUESTRAS PROPIEDADES DE "CSS"
    //Ademas nuestra propiedades de CSS que normalmente definiamos con - entre cada palabra
    //VAMOS A TENER QUE CAMBIARLOS POR INICAR CADA NUEVA PALABRA CON MAYUSCULA por ejm
    //antes = background-color ahora backgroundColor

    //Y ESTE OBJETO(estilos) SE LO VAMOS ENVIAR A NUESTRA ETIQUETA style={CON EL NOMBRE DE NUESTRA VARIABLE}
    //CUANDO QUERAMOS ENVIARLE UN OBJETO A ALGUNA PROPIEDAD O ATRIBUTO EN REACT TENEMOS QUE UTILIZAR LAS LLAVES
    //PARA DEFINIR QUE VAMOS A ESCRIBIR JS, NO HTML NORMAL Y YA QUE ESE JS QUE VAMOS A ESCRIBIR ES ALGUNAS LLAVES
    //LAS LLAVES EN ESTE CASO SON OBJETOS
    //PUES VAMOS A NECESITAR DOS LLAVES por ejm
    //<h2 style{primera llave que va indicar que aca introduciremos JS{segunda llava para indicar
    //que es un objeto}}>
    // Has completado 2 de 3 TODOs
    // </h2>
    // < h2 style = {{
    //     backgroundColor: 'red',
    //     color: 'blue'
    //     }}>
    // Has completado 2 de 3 TODOs
    //         </h2 >

    //const estilos = {

        //color: 'red',
        //backgroundColor: 'yellow',

    //}

    //SEGUNDA FORMA
    //         <h2 style={estilos}> 
    //             Has completado 2 de 3 TODOs
    //         </h2> 
    //         ESTA ES LAFORMA DE AGREGAR ESTILOS EN LINEA A NUESTRS ETIQUETAS


    function TodoCounter() {

        const {completedTodos, totalTodos} = React.useContext(TodoContext)

        return (

            <h2 className="TodoCounter"> 
                You have completed {completedTodos} of {totalTodos} TODOs
            </h2> 
            // ESTA ES LAFORMA DE AGREGAR ESTILOS EN LINEA A NUESTRS ETIQUETAS

        )

    };

export { TodoCounter }


//PERO HAY OTRA FORMA PARA TRABAJAR CON CSS PERO EN REALIDAD HAY UN MONTONNNN
//EN ESTE EJEMPLO REACT NOS DA UNA DE LAS MUCHAS OPCIONESS DE ESCRBIR CSS PARA JS
//EN ESTE CASO LO UNICO QUE TENEMOS Q HACER ES IMPORTAR UN ARCHIVO DE CSS
//Y ESE ARCHIVO DE CSS NOS VA A DAR NUESTROS ESTILOS PARA LAS ETIQUETAS
//EN ESTE CASO LO QUE VAMOS HACER ES CREAR UN ARCHIVO QUE SE LLAME TodoCounter.css 
//import '../styles/TodoCounter.css';
//LE ASIGNAMOS UNA CLASE A NUESTRA ETIQUETA
{/* <h2 className="TodoCounter"> 
    Has completado 2 de 3 TODOs
</h2>  */}
//dentro del css..
// .TodoCounter {

//     background-color: azure;
//     text-align: center;

// }
//Y ESTA SEGUNDA FORMA PODEMOS IMPORTARLO EN CUALQUIER ARCHIVO JS