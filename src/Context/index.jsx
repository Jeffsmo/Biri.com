import { createContext, useState, useEffect } from "react";

const shopingCartContext = createContext();
const ApiContext = createContext();
const ModalContext = createContext();

function ApiContextProvider({children}){

    const [products, setProducts] = useState(null);

    useEffect(()=>{
      fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => setProducts(json))
    }, [])
    return(
        <ApiContext.Provider
        value={{
            products,
            setProducts,
        }}>
            {children}
        </ApiContext.Provider>
    )
}

const ShopingCartProvider = ({children}) =>{
    
    const [count, setCount] = useState(0);
    const [openSideMenu, setOpenSideMenu]=useState(false);
    
    return(
        <shopingCartContext.Provider
        value={{
            count,
            setCount,
            openSideMenu,
            setOpenSideMenu,
        }}>
            {children}
        </shopingCartContext.Provider>
        )
};


function ModalProvider({children}){
    const [openModal, setOpenModal] = useState(false);

    return(
        <ModalContext.Provider
        value={{
            openModal,
            setOpenModal
        }}>
            {children}
        </ModalContext.Provider>
    )
}



export {ModalContext,shopingCartContext, ApiContext, ShopingCartProvider, ApiContextProvider, ModalProvider}