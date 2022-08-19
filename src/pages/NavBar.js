import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Product from './Product';
import Contact from './Contact';
import Home from './Home';
import 'tachyons';
import '../about.css';

export default function NavBar ( ) {
  // const[moveNav, setMoveNav]=useState(false);
  // const handleClick = ()=> setMoveNav(!moveNav)

  // useEffect(() => {
  //   if (window.scrollX < 500){
  //     setMoveNav(true)
  //   } else {
  //     setMoveNav(false)
  //   }
  // }, [])

  // const OnHomePage = () =>{
  //        <div class=" nav bg-black f6 fw6 ttu tracked pa4">
  //               <Link class="link hover-light-blue white mr3" to="/" path="Home">Home</Link>
  //               <Link class="link hover-light-blue white mr3" to="/Product" path="Product">Product</Link>
  //               <Link  class="white hover-light-blue f6 link br2 ba bw1 ph3 pv2 mb2  near-black" to="/Contact" path="Contact">Contact</Link>
  //           </div> 
  // }
  // const OnOtherPages = ()=> {
  //           <div class="bg-black f6 fw6 ttu tracked pa4">
  //               <Link class="link hover-light-blue white mr3" to="/" path="Home">Home</Link>
  //               <Link class="link hover-light-blue white mr3" to="/Product" path="Product">Product</Link>
  //               <Link  class="white hover-light-blue f6 link br2 ba bw1 ph3 pv2 mb2  near-black" to="/Contact" path="Contact">Contact</Link>
  //           </div> 
  // }

  return ( 
    <>
    {/* <div >
          <div class="nav-mobile bg-black f6 fw6 ttu tracked pa4 ">
              <Link class=" link hover-light-blue white mr3" to="/" path="Home">Home</Link>
              <Link class="link hover-light-blue white mr3 " to="/product" path="Product">Products</Link>
              <Link  class="white hover-light-blue f6 link br2 ba bw1 ph3 pv2 mb2  near-black" to="/contact" path="Contact">Contact</Link>
        </div> 
       <div class="nav bg-black f6 fw6 ttu tracked pa4 fr">
          <Link class=" link hover-light-blue white mr3" to="/" path="Home">Home</Link>
          <Link class="link hover-light-blue white mr3 " to="/product" path="Product">Products</Link>
          <Link  class="white hover-light-blue f6 link br2 ba bw1 ph3 pv2 mb2  near-black" to="/contact" path="Contact">Contact</Link>
      </div> 
       </div> */}


       {/* desktop */}
            <div class="nav f6 fw6 ttu tracked pa4 fr ">
              <div class="overlay fr">
               <Link class=" link hover-light-blue white mr3" to="/" path="Home">Home</Link>
                <Link class="link hover-light-blue white mr3 " to="/product" path="Product">Products</Link>
                <Link  class="link hover-light-blue white mr3" to="/contact" path="Contact">Contact</Link>
                </div>
            </div>
        <Routes>
                <Route exact path='/' element={ <Home />}/>
                <Route path ='product' element={ <Product />}/>
                <Route path ='contact' element={ <Contact />}/>
        </Routes>
        </>
  )
};
