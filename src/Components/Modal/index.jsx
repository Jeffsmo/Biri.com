import ReactDOM from "react-dom";
import "./styles.css"

function Modal({children}){
    return ReactDOM.createPortal(
        <div className="modal-container flex justify-center w-screen h-screen fixed top-0 left-0 bg-black bg-opacity-50 p-20">
            {children}
        </div>,
        document.getElementById('modal'))
}

export {Modal}
