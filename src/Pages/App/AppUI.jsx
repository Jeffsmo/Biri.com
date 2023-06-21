import {useRoutes} from 'react-router-dom'
import { Home } from '../Home';
import { MyAccount } from '../MyAccount';
import { MyOrder } from '../MyOrder';
import { MyOrders } from '../MyOrders';
import { NotFound } from '../NotFound';
import { SignIn } from '../SignIn';
import { All } from '../All';
import { useContext } from 'react';
import { Modal } from '../../Components/Modal';
import { ModalContext } from '../../Context';
import { NavBar } from '../../Components/Navbar';
import { ProductDetail } from '../../Components/ProducDetail';


const AppRoutes = ()=> {
    let routes =useRoutes([
      {
        path:'/',
        element: <Home/>
     },
     {
      path:'/all',
      element: <All/>
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

  
  function AppUI(){

    const {openModal} = useContext(ModalContext)
    return(
        <>
        <AppRoutes/>
        <NavBar/>
        {openModal && (
            <Modal>
                <ProductDetail/>
            </Modal>
        )}     
    </>
    )
  }

  export {AppUI}