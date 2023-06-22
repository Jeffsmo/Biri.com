import { Card } from ".";
import { useContext } from 'react';
import { ApiContext } from "../../Context";
import './styles.css';
import logo from "../../Assets/logo.jpeg";


function HomeCard (){
    
       const context = useContext(ApiContext);
    

    return(
        <div id="Home-page--card-container" className="block justify-center text-center"> 
            <label className="text-lg" 
                style={{
                    fontFamily: "'Bungee', cursive",
                }}>
                Productos Destacados
            </label> 
                <div id="Fatured-products" className="flex gap-8 mt-10 mb-5 w-full 
                    max-w-screen-lg overflow-x-auto py-8 overflow-y-hidden scrollbar-thin scrollbar-thumb-stone-500
                     scrollbar-track-zinc-200">
                {
                        context.products?.filter((product)=> product.rating.rate >=4.0).map((product) =>{
                        return (<Card 
                            key= {product.id}
                            data= {product}
                        /> )
                        })
                    }
                </div>              

            <div id="new-collections" className="mb-5 pb-10">
                <label className="text-lg" 
                style={{
                    fontFamily: "'Bungee', cursive",
                }}> Nuevas Colecciones </label>

                <div 
                    className="flex  w-2/5 mt-10 mb-5 max-w-screen-lg  justify-between" >
                        <div className="flex"
                        style={{
                            gridTemplateColumns: "1fr 1fr",
                        }}>
                            <div className="biri-logo w-full">
                                <img src={logo} alt="" />
                            </div>
                            {/*grid gap-8 grid-cols-4 w-full max-w-screen-lg max-h-screen*/}
                            {/* <div className="new-items grid gap-8 grid-rows-2 w-full max-w-screen-lg max-h-screen"> */}
                                <div className="slider flex justify-items-center max-w-screen-lg align-center  text-lg ">
                                    <div className="slide-track flex gap-8 justify-items-center align-center py-4 px-8 text-lg overflow-x-auto overflow-y-hidden max-w-screen-sm
                                     scrollbar-none"> 
                                        {
                                            context.products?.map((product) =>{
                                            return (<Card className="slide"
                                                key= {product.id}
                                                data= {product}
                                            /> )
                                            })
                                        }
                                    </div>
                                </div>
                            {/* </div> */}
                        </div>
                </div>

            </div>

            <div id="best-seller-products">
                <label className="text-lg"
                style={{
                    fontFamily: "'Bungee', cursive",
                }}> Los más vendidos</label>
                    <div id="Fatured-products"
                    className="flex gap-8 mt-10 w-full 
                    max-w-screen-lg overflow-x-auto py-8 overflow-y-hidden scrollbar-thin  scrollbar-thumb-stone-500
                     scrollbar-track-zinc-200">
                    {
                            context.products?.filter((product)=> product.rating.count>=200).map((product) =>{
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