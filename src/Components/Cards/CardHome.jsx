import { Card } from ".";
import { useContext } from 'react';
import { ApiContext } from "../../Context";

function HomeCard (){

    const context = useContext(ApiContext)

    // const [products, setProducts] = useState(null);

    // useEffect(()=>{
    //   fetch('https://api.escuelajs.co/api/v1/products')
    //     .then(res => res.json())
    //     .then(data => setProducts(data))
    // }, [])


    return(
        <div id="Home-page--card-container" className="block"> 
            <label className="text-lg" >
                Productos Destacados
            </label> 
                <div id="Fatured-products" className="flex gap-8 mt-10 w-full 
                    max-w-screen-lg overflow-x-auto py-4 scrollbar  scrollbar-thumb-stone-500
                     scrollbar-track-zinc-200">
                {
                        context.products?.map((product) =>{
                        return (<Card 
                            key= {product.id}
                            data= {product}
                        /> )
                        })
                    }
                </div>              

            <div id="new-collections">
                <label className="text-lg" > Nuevas Colecciones </label>

            </div>

            <div id="best-seller-products">
                <label className="text-lg"> Los más vendidos</label>
                    <div id="Fatured-products"
                    className="flex gap-8 mt-10 w-full 
                    max-w-screen-lg overflow-x-auto py-4 scrollbar  scrollbar-thumb-stone-500
                     scrollbar-track-zinc-200">
                    {
                            context.products?.map((product) =>{
                            return (<Card 
                                key= {product.id}
                                data= {product}
                            /> )
                            })
                        }
                    </div>        
            </div>
        </div>
        
    );
}

export {HomeCard}