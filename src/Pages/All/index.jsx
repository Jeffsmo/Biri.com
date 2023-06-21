
import { useContext } from 'react';
import { Layout } from "../../Components/Layout";
import { Card } from "../../Components/Cards";
import { ApiContext } from '../../Context';
//import { HomeCard } from "../../Components/Cards/CardHome";
//import { data } from 'autoprefixer';
function All() {

  const context = useContext(ApiContext)

  return (
    <>
      <Layout>
            <span id="all-products" 
            className='flex justify-items-center align-center py-4 px-8 text-lg'
            style={{fontFamily: "'Bungee', cursive"  }}>Todos nuestros productos</span>
            <div className='grid gap-8 grid-cols-4 w-full max-w-screen-lg max-h-screen'>
                {
                    context.products?.map((product) =>{
                    return (<Card 
                        key= {product.id}
                        data= {product}
                    /> )
                    })
                }
            </div>
            {/* <HomeCard/> */}
            
            {/* <Card/> */}
      </Layout>

    </>
  )
}

export {All} 
