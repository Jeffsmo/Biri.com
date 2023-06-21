//Es necesario crear una excepcion en Eslint para que no envié una advertencia 
//al importar {children}

function Layout ({children}){
    return(
        <div className='flex flex-col items-center mt-20'>
            {children}
        </div>
    )

}


export {Layout}