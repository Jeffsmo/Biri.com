import { useContext, useRef } from "react"
import { Card } from "../Cards"
import { ApiContext } from "../../Context"


function Slideshow (){
    const context = useContext(ApiContext)
    let productSlider = context.products?.slice();
    const slideshow = useRef(null) //para acceder a referencias
    const siguiente = ()=>{
        if(slideshow.current.children.length > 0){
            const children = Array.from(slideshow.current.children);
            children.forEach((child) => {
                const childChildren = child.children;
                Array.from(childChildren).forEach((element) =>{
                    const classes = element.classList;

                    classes.add('-translate-x-64');
                    classes.add('transition');
                    classes.add('ease-out');
                })
            });
          }
    }
    const anterior = ()=>{
        console.log('anterior')
    }

    return(
        <div className=" tra relative ">

                <div  className="slider flex justify-items-center max-w-screen-lg align-center  text-lg ">
                    <div ref={slideshow} className="  slide-track flex gap-8 justify-items-center align-center py-4 px-8 text-lg overflow-x-auto overflow-y-hidden max-w-screen-sm
                        scrollbar-none"
                        style={{
                            transition:".3s ease all",
                            zIndex: 0,
                            position:"relative",
                        }}>
                        {
                            productSlider?.map((product) =>{
                            return (<Card className="slide"
                                key= {product.id}
                                data= {product}
                            /> )
                            })
                        }
                    </div>
                </div>

            <div className="controles absolute gap-8 top-0 z-2 w-full h-full pointer-events-none"
            style={{
                pointerEvents:"none",
            }}>
                <button onClick={anterior}
                className="Izq bg-none  hover:bg-zinc-400/20 border-none cursor-pointer outline-none w-12 h-full absolute"
                    style={{
                        transition: ".3s ease all",
                        pointerEvents: "all",
                        textAlign:"center",
                        left:0,
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" filter="drop-shadow(2px 0px 0px #fff)" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>
                <button onClick={siguiente}
                className="Der bg-none hover:bg-zinc-400/20 border-none outline-none cursor-pointer w-12 h-full absolute"
                style={{
                    transition: ".3s ease all",
                    pointerEvents: "all",
                    textAlign: "center",
                    right:0,

                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" filter="drop-shadow(-2px 0px 0px #fff)" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export{Slideshow}