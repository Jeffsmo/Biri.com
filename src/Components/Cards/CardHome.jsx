import { Card } from ".";
import { useContext } from 'react';
import { ApiContext } from "../../Context";
import './styles.css';
import logo from "../../Assets/logo.jpeg";
import { Slideshow } from "../SlideShow";
import { LongSlider } from "../SlideShow/LongSlider";


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
                    <LongSlider>
                        { context.products?.filter((product)=> product.rating.rate >=4.0).map((product) =>{
                            return (<Card 
                                key= {product.id}
                                data= {product}
                            /> )
                            })
                        }
                    </LongSlider>

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
                                <Slideshow>
                                    {  context.products?.map((product) =>{
                                        return (<Card className="slide"
                                            key= {product.id}
                                            data= {product}
                                        /> )
                                        })    }                                
                                </Slideshow>
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
                    <LongSlider>
                        { context.products?.filter((product)=> product.rating.count>=200).map((product) =>{
                            return (<Card 
                                key= {product.id}
                                data= {product}
                            /> )
                            })
                        }
                    </LongSlider>
                    </div>        
            </div>
        </div>
        
    );
}

export {HomeCard}