import NavBar from './components/Navbar/NavBar'
import Down from './components/Footer/Down'
import ItemListContainerWithHoc from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Cart from './components/Cart/Cart'
import Checkout from './components/checkout/checkout'
import { ToastContainer } from 'react-toastify';
import './App.css'
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div>
      <BrowserRouter>
      <CartProvider>
      <NavBar />
        <ToastContainer background='dark' 
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover></ToastContainer>
        <Routes>
        <Route path="/" element={  <ItemListContainerWithHoc /> }/>
        <Route path="/category/:idCategory" element={  <ItemListContainerWithHoc /> }/>
        <Route path="/detail/:idProduct" element={ <ItemDetailContainer/> } />
        <Route path="/cart" element={ <Cart /> } />
        <Route path="/checkout" element={ <Checkout/> } />
        </Routes> 

      <Down />
      </CartProvider>
      </BrowserRouter>
    </div>
  )
}

export default App

{/* <ItemListContainerWithHoc />
<ItemDetailContainer/> */}