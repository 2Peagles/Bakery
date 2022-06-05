import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link,  } from 'react-router-dom';
import About from './About';
import Product from './Product';
import Contact from './Contact';
import Home from './Home';
import 'tachyons';

export default function NavBar ( ) {
  return (
      <Router>
          <div>
          <header class="bg-black sticky w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
             <nav class="f6 fw6 ttu tracked">
                <Link class="link hover-light-blue white dib mr3" to="/" path="Home">Home</Link>
                <Link class="link hover-light-blue white dib mr3" to="/about" path="About">About</Link>
                <Link class="link hover-light-blue white dib mr3" to="/Product" path="Product">Product</Link>
                <Link  class="white hover-light-blue f6 link br2 ba bw1 ph3 pv2 mb2 dib near-black" to="/Contact" path="Contact">Contact</Link>
            </nav>
        </header>
        <Routes>
                <Route exact path='/' element={ <Home />}/>
                <Route path ='about' element={ <About />}/>
                <Route path ='product' element={ <Product />}/>
                <Route path ='contact' element={ <Contact />}/>
        </Routes>
        </div>
    </Router>
  )
};
