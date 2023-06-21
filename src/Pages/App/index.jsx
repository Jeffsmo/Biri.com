import {  BrowserRouter } from 'react-router-dom';
import { ShopingCartProvider, ApiContextProvider, ModalProvider } from '../../Context';
import './App.css'
import { AppUI } from './AppUI';



function App() {

  return (
    <ApiContextProvider>
      <ModalProvider>
        <ShopingCartProvider>
          <BrowserRouter>
            <AppUI/>
          </BrowserRouter>
        </ShopingCartProvider>
      </ModalProvider>
    </ApiContextProvider>


  )
}

export default App
