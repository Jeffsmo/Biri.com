import { shopingCartContext } from '../../Context';
import './styles.css';
import { useContext } from 'react';
import ReactDOM from "react-dom";


function SideMenu ({children}){
    const {setOpenSideMenu}= useContext(shopingCartContext);
    const onCancel = ()=>{
        setOpenSideMenu(false);
    }
    return ReactDOM.createPortal(
        <div className= "side-container flex justify-end fixed bottom-0 right-0 bg-black bg-opacity-50">
            {children}
            <aside className='side-menu block border border-black rounded-lg bg-white'>
                <div className='flex justify-between items-center'>
                    <h2 className='font-medium text-xl p-6'> CARRITO </h2>
                    <div className='mr-4 p-6'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer" onClick={onCancel}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>                       
                    </div>
                </div>
        </aside>
        </div>,
        document.getElementById('side-menu'))
}

export {SideMenu}