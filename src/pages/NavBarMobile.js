import React from 'react';
import { Link } from 'react-router-dom';

const NavBarMobile = () => {
  return (
    <div class="nav-mobile bg-black f6 fw6 ttu tracked pa4">
         <Link class=" link hover-light-blue white mr3" to="/" path="Home">Home</Link>
            <Link class="link hover-light-blue white mr3 " to="/product" path="Product">Products</Link>
        <Link  class="white hover-light-blue f6 link br2 ba bw1 ph3 pv2 mb2  near-black" to="/contact" path="Contact">Contact</Link>
    </div>
  )
}

export default NavBarMobile
