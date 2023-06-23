import { useContext, useState } from "react";
import { ModalContext, shopingCartContext } from "../../Context";


function Card(data){

    const context = useContext( shopingCartContext);
    const {openModal, setOpenModal } = useContext(ModalContext)
    
    const [clicked, setClicked] = useState(false);
  

    const handleClick = () => {
      setClicked(!clicked);
      setOpenModal(!openModal)
  
    };
 
    return(
        <div className="">
            <div className=" bg-white cursor-pointer w-56 h-80">
                <figure className="relative mb-4 w-full h-4/5">
                    <span className="m-2 px-3 py-0.5 absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs "
                    onClick={handleClick}>
                        {data.data.category}
                    </span>
                    <img className="w-full h-full object-cover rounded-lg" src={data.data.image} alt={data.data.title} onClick={handleClick}/>
                    <div 
                    className="absolute p-1 top-0 right-0 flex justify-center bg-white w-6 h-6 rounded-full m-2"
                    style={{
                        alignItems:"center",
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer"
                        onClick={()=> context.setCount(context.count+1)}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                </figure>
                <p className="flex justify-between" onClick={handleClick}>
                    <span className="text-sm font-light" onClick={handleClick}>{data.data.title} </span>
                    <span className="text-lg font-medium" onClick={handleClick}>${data.data.price}</span>
                </p>
            </div>

        </div>

        
   
    )
}

export {Card}


            {/* <div className="bg-white cursor-pointer w-56 h-60">
            <figure className="relative mb-4 w-full h-4/5">
                <span className="m-2 px-3 py-0.5 absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs">Trousers</span>
                <img className="w-full h-full object-cover rounded-lg" src="https://images.pexels.com/photos/1018911/pexels-photo-1018911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="headphones" />
                <div className="absolute p-1 top-0 right-0 flex justify-center bg-white w-6 h-6 rounded-full m-2">
                    +
                </div>
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light">Jeans</span>
                <span className="text-lg font-medium">$45</span>
            </p>
            </div>


            <div className="bg-white cursor-pointer w-56 h-60">
                    <figure className="relative mb-4 w-full h-4/5">
                        <span className="m-2 px-3 py-0.5 absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs">T-Shirts</span>
                        <img className="w-full h-full object-cover rounded-lg" src="https://images.pexels.com/photos/2220315/pexels-photo-2220315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="headphones" />
                        <div className="absolute p-1 top-0 right-0 flex justify-center bg-white w-6 h-6 rounded-full m-2">
                            +
                        </div>
                    </figure>
                    <p className="flex justify-between">
                        <span className="text-sm font-light">Oversize T-shirt</span>
                        <span className="text-lg font-medium">$30</span>
                    </p>
                </div> 

                <div className="bg-white cursor-pointer w-56 h-60">
                        <figure className="relative mb-4 w-full h-4/5">
                            <span className="m-2 px-3 py-0.5 absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs">Trousers</span>
                            <img className="w-full h-full object-cover rounded-lg" src="https://images.pexels.com/photos/2363825/pexels-photo-2363825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="headphones" />
                            <div className="absolute p-1 top-0 right-0 flex justify-center bg-white w-6 h-6 rounded-full m-2">
                                +
                            </div>
                        </figure>
                        <p className="flex justify-between">
                            <span className="text-sm font-light">Jeans</span>
                            <span className="text-lg font-medium">$60</span>
                        </p>
                    </div>                    */}