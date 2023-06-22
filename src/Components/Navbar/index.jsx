import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { shopingCartContext } from "../../Context";
import { SideMenu } from "../SideMenu";


function NavBar (){
    const context = useContext(shopingCartContext);
    const activeStyle = 'underline underline-offset-4'
    
    const [clicked, setClicked] = useState(false);
  

    const handleClick = () => {
      setClicked(!clicked);
      context.setOpenSideMenu(!context.openSideMenu)
  
    };
    return(
        <nav className="flex justify-between item-center fixed z-10 w-full py-4 px-8 text-sm font-light bg-neutral-900 text-white top-0">
            <ul className="flex items-center gap-4">
                <li className={`nav-biri font-bold text-lg ${({isActive})=> isActive?activeStyle:undefined}`}
                style={{
                    fontFamily: "'Bungee', cursive",
                }}>
                    <NavLink 
                    to='/'>
                        Biri.com
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/all'
                            className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/mens-clothing'
                            className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Men{"'"}s Clothing
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/women-clothing'
                            className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                            }
                    >
                        Women{"'"}s Clothing
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/electronics'
                            className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/Jewerely'
                            className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Jewerely
                    </NavLink>
                </li>

            </ul>
            <ul className="flex items-center gap-4">
                <li className="text-white/60">
                        Alguien@example.com
                </li>
                <li>
                    <NavLink to='/my-orders'
                            className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/my-account'
                            className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        My Account 
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/sign-in'
                            className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Sign In
                    </NavLink>
                </li>
                <li>
                    <NavLink onClick={handleClick}>
                        🛒 {context.count}

                    </NavLink>
                        {context.openSideMenu && (
                                <SideMenu/>
                            )}
                </li>
            </ul>
        </nav>
    )
}

export {NavBar}