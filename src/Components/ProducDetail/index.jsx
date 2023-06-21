import { useContext } from 'react';
import './styles.css';
import { ModalContext } from '../../Context';

function ProductDetail(){
    const {setOpenModal}= useContext(ModalContext);
    const onCancel = ()=>{
        setOpenModal(false);
    }
    return(
        <div className='Container'>
            <div className="product-detail">
                <button onClick={onCancel}>
                    Salir
                </button>
            </div>
        </div>

    )
}

export {ProductDetail}