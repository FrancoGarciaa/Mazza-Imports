import NavBar from './components/Navbar/NavBar'
import Down from './components/Footer/Down'
import ItemListContainerWithHoc from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Cart from './components/Cart/Cart'
import './App.css'

function App() {

  return (
    <div>
      <BrowserRouter>
      <CartProvider>
      <NavBar />

        <Routes>
        <Route path="/" element={  <ItemListContainerWithHoc /> }/>
        <Route path="/category/:idCategory" element={  <ItemListContainerWithHoc /> }/>
        <Route path="/detail/:idProduct" element={ <ItemDetailContainer/> } />
        <Route path="/cart" element={ <Cart /> } />
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