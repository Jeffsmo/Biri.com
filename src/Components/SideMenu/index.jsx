import './styles.css';
import ReactDOM from "react-dom";


function SideMenu ({children}){
    return ReactDOM.createPortal(
        <div className= "side-container flex justify-end fixed bottom-0 right-0 bg-black bg-opacity-50">
            {children}
            <aside className='side-menu block border border-black rounded-lg bg-white'>
                <div className='flex justify-between items-center'>
                    <h2 className='font-medium text-xl p-6'> CARRITO </h2>
                    <div className='mr-4 p-6'>X</div>
                </div>
        </aside>
        </div>,
        document.getElementById('side-menu'))
}

export {SideMenu}