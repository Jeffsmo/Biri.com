import ReactDOM from "react-dom";


function Modal({children}){
    return ReactDOM.createPortal(
        <div className="flex justify-center w-screen h-screen fixed top-0 left-0 bg-black bg-opacity-50">
            {children}
        </div>,
        document.getElementById('modal'))
}

export {Modal}
