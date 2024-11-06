import NavBar from './components/Navbar/NavBar'
import Down from './components/Footer/Down'
import ItemListContainerWithHoc from './components/ItemListContainer/ItemListContainer'
import './App.css'

function App() {

  return (
    <div>
        <NavBar />
        <ItemListContainerWithHoc />
        <Down />
    </div>
  )
}

export default App
