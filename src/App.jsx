import './App.css'
import Navbar from './Components/Navbar/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Shop/>}/>
            <Route path="/mens" element={<ShopCategory banner={'/assets/banner_mens.png'} category="men"/>}/>
            <Route path="/womens" element={<ShopCategory banner={'/assets/banner_women.png'} category="women"/>}/>
            <Route path="/Kids" element={<ShopCategory banner={'/assets/banner_kids.png'} category="kid"/>}/>
            <Route path="/product" element={<Product/>}>
              <Route path=':productId' element={<Product/>}/>
            </Route>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/login' element={<LoginSignup/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
