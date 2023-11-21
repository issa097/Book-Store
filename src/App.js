import './App.css';
import Header from './componants/header/Header.jsx';
import {BrowserRouter,Route,Routes}from "react-router-dom"
import Footer from './componants/footer/Footer';
import Homepage from './Pages/Home/Homepage';
import About from './Pages/Aboute/About';
import Authors from './Pages/Authers/Authors';
import Cart from './Pages/cart/Cart';
import Login from "./Pages/forms/Login"
import Register from "./Pages/forms/Register"
import Contact from './Pages/contact/Contact';
import Book from './Pages/book/Book';


function App() {
  return (
    <BrowserRouter >
      <Header />
     <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/authors' element={<Authors/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/book/:id' element={<Book/>}/>
      
     
     </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
