import { NavLink } from "react-router-dom";
import './NavBar.css'


function NavBar (){
    const activeStyle = 'underline underline-offset-4'
    return(
        <nav className="flex justify-between item-center fixed z-10 w-full py-4 px-8 text-sm font-light">
            <ul className="flex items-center gap-4">
                <li className="nav-biri font-bold text-lg">
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
                <li>
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
                        🛒 0
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export {NavBar}