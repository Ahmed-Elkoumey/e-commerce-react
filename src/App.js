import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/about';
import Products from './components/allProducts';
import Cart from './components/myCart';
import NavBar from './components/navbar';
import Details from './components/productDetails';
import ShoppingCart from './components/shopping';



function App() {

  const [cartShopping, setCartShopping] = useState(0)

 const  handelAddToCart=()=>{
setCartShopping(prev=>  prev + 1)
console.log('cartShopping')
 }

  return (
<BrowserRouter>
 <NavBar number={cartShopping}/>

<Routes>
  <Route path='/' element={<Products event={handelAddToCart}/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/details/:id' element={<Details/>}/>
  <Route path='/mycart' element={<ShoppingCart/>}/>
  <Route path='/cart' element={<Cart/>}/>
</Routes>

</BrowserRouter>
  );
}

export default App;
