import { useContext } from 'react';
import './styles.css';
import { ModalContext } from '../../Context';



function ProductDetail(){
    const {setOpenModal}= useContext(ModalContext);
    const onCancel = ()=>{
        setOpenModal(false);
    }
    return(
            <div className="product-detail gap-20 flex ">
                
                <div className=''>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer" onClick={onCancel}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>

                <h2 className='font-medium text-xl p-6'>Details</h2>

            </div>
    

    )
}

export {ProductDetail}