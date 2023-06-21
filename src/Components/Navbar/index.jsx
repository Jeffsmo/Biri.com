import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { shopingCartContext } from "../../Context";


function NavBar (){
    const context = useContext(shopingCartContext)
    const activeStyle = 'underline underline-offset-4'
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
                    <NavLink to='/trousers'
                            className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Trousers
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/shoes'
                            className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                            }
                    >
                        Shoes
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/shirts'
                            className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Shirts
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/tshirts'
                            className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        T-Shirts
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/caps'
                            className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Caps
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/others'
                            className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-4">
                <li className="text-black/60">
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
                    <NavLink to='/shirts'>
                        🛒 {context.count}
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export {NavBar}