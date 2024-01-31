import './App.css'
import Cart from './Components/Cart'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import {BrowserRouter , Routes , Route} from "react-router-dom"
import Orders from './Components/Orders'

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/orders' element={<Orders/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
