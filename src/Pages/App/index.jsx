import { useRoutes, BrowserRouter } from 'react-router-dom';
import { Home } from '../Home';
import { MyAccount } from '../MyAccount';
import { MyOrder } from '../MyOrder';
import { MyOrders } from '../MyOrders';
import { NotFound } from '../NotFound';
import { SignIn } from '../SignIn';
import { NavBar } from '../../Components/Navbar';
import './App.css'

/* <Home/>
        <MyAccount/>
        <MyOrder/>
        <MyOrders/>
        <NotFound/>
        <SignIn/> */


//Para utilizar enrutamiento con react-router-dom es necesario crear 
//una variable la cual retorne el hook useRoutes, y dentro del hook enviamos
//Cada una de las rutas en un Array de objetos en un atributo path y cada Elemento React en un atributo element


//Los componentes ejecutan lógica y los elementos se renderizan

const AppRoutes = ()=> {
  let routes =useRoutes([
    {
      path:'/',
      element: <Home/>
   },
   {
    path:'/my-account',
    element: <MyAccount/>
  },
  {
    path:'/my-order',
    element: <MyOrder/>
  },
  {
    path:'/my-orders',
    element: <MyOrders/>
  },
  {
    path:'/not-found-',
    element: <NotFound/>
  },
  {
    path:'/sign-in',
    element: <SignIn/>
  },

])

  return routes;
}

function App() {
  
  return (
    <BrowserRouter>
      <AppRoutes/>
      <NavBar/>
    </BrowserRouter>
  )
}

export default App
