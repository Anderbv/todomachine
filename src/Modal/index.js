import React from "react";
import  ReactDOM  from "react-dom";
import './modal.css'

function Modal({children}) {



    return ReactDOM.createPortal(
        <div className="ModalBackgorund">
            {children}
        </div>,
        document.getElementById('modal')
        //Este componente Modal nos va a permitir ser reutilizado
        //para que enviemos los que sea que querramos a nuestro modal
        //de esta forma vamos a poder enviar un formulario. una aleta de error
        //lo que nosotros queramos para eso lo que haremos es cuando llamemos a
        //nuestro componente modal vamos a enviarle a algun hijo(algun contenido)
        //y eso lo hacemos con la propiedad children
        //Como segundo argumento tenemos que colocar el nodo de HTML que vamos a mandar
        //a nuestro hijo de nuestro componente Modal
    )

};

export { Modal }