import React from 'react';
import cake2 from '.././../photo/cake2.jpg';
import blue from '.././../photo/blue.jpg';
// import fruit from '.././../photo/fruit.jpg';
import leaf from '.././../photo/leaf.jpg';
// import lemon from '.././../photo/lemon.jpg'; 
import pink from '.././../photo/pink.jpg'; 
import wedding from '.././../photo/wedding.jpg'; 
import smallcake from '.././../photo/smallcake.jpg'; 
import '../.././App.css';

 export default function Card ( ) {
  return (
    <div className=' card'>
      <div className='cards flex flex-wrap'>
        <article class="br2 ba dark-gray b--black-10 mv5 w-100 w-50-m w-25-l mw5 center ">
          <img src={cake2} class="db w-100 br2 br--top" alt=""/>
      <div class="pa2 ph3-ns pb3-ns">
    <div class="dt w-100 mt1">
    <div class="dtc">
        <h1 class="f5 f4-ns mv0"> Classic Fruit Cake</h1>
    </div>
      <div class="dtc tr">
        <h2 class="f5 mv0">$100</h2>
      </div>
    </div>
    <p>
      This is your traditional vanilla cake with a nice chocolate icing and with some berries on top.
    </p>
  </div>
</article>
<article class="br2 ba dark-gray b--black-10 mv5 w-100 w-50-m w-25-l mw5 center ">
          <img src={blue} class="db w-100 br2 br--top" alt=""/>
      <div class="pa2 ph3-ns pb3-ns">
    <div class="dt w-100 mt1">
    <div class="dtc">
        <h1 class="f5 f4-ns mv0">Cookie Cake</h1>
    </div>
      <div class="dtc tr">
        <h2 class="f5 mv0">$500</h2>
      </div>
    </div>
    <p>
      The cookie monster cake, has a nice chocolate cake with chocolate filling followed up with a chocolate icing. 
    </p>
  </div>
</article>
{/* <article class="br2 ba dark-gray b--black-10 mv5 w-100 w-50-m w-25-l mw5 center ">
          <img src={fruit} class="db w-100 br2 br--top" alt=""/>
      <div class="pa2 ph3-ns pb3-ns">
    <div class="dt w-100 mt1">
    <div class="dtc">
        <h1 class="f5 f4-ns mv0">Jelly Fruit</h1>
    </div>
      <div class="dtc tr">
        <h2 class="f5 mv0">$250</h2>
      </div>
    </div>
    <p>
    Lorem ipsum dolor sit amet, alia sanctus ea eam, eu sint scripta epicuri sea. Ius ipsum mundi 
  
    </p>
  </div>
</article> */}
{/* <article class="br2 ba dark-gray b--black-10 mv5 w-100 w-50-m w-25-l mw5 center ">
          <img src={lemon} class="db w-100 br2 br--top" alt=""/>
      <div class="pa2 ph3-ns pb3-ns">
    <div class="dt w-100 mt1">
    <div class="dtc">
        <h1 class="f5 f4-ns mv0">Lime Cake</h1>
    </div>
      <div class="dtc tr">
        <h2 class="f5 mv0">$600</h2>
      </div>
    </div>
    <p>
    Lime
    </p>
  </div>
</article> */}
<article class="br2 ba dark-gray b--black-10 mv5 w-100 w-50-m w-25-l mw5 center ">
          <img src={leaf} class="db w-100 br2 br--top" alt=""/>
      <div class="pa2 ph3-ns pb3-ns">
    <div class="dt w-100 mt1">
    <div class="dtc">
        <h1 class="f5 f4-ns mv0">Mint with a hint</h1>
    </div>
      <div class="dtc tr">
        <h2 class="f5 mv0">$660</h2>
      </div>
    </div>
    <p>
    Lorem ipsum dolor sit amet, alia sanctus ea eam, eu sint scripta epicuri sea. Ius ipsum mundi 
    urbanitas at
    </p>
  </div>
</article>
<article class="br2 ba dark-gray b--black-10 mv5 w-100 w-50-m w-25-l mw5 center ">
          <img src={smallcake} class="db w-100 br2 br--top" alt=""/>
      <div class="pa2 ph3-ns pb3-ns">
    <div class="dt w-100 mt1">
    <div class="dtc">
        <h1 class="f5 f4-ns mv0">Small and Sweet</h1>
    </div>
      <div class="dtc tr">
        <h2 class="f5 mv0">$1,000</h2>
      </div>
    </div>
    <p>
    Lorem ipsum dolor sit amet, alia sanctus ea eam, eu sint scripta epicuri sea. Ius ipsum mundi 
    urbanitas at, tantas partem causae eu mei, sit laudem laoreet .
    </p>
  </div>
</article>
<article class="br2 ba dark-gray b--black-10 mv5 w-100 w-50-m w-25-l mw5 center ">
          <img src={wedding} class="db w-100 br2 br--top" alt=""/>
      <div class="pa2 ph3-ns pb3-ns">
    <div class="dt w-100 mt1">
    <div class="dtc">
        <h1 class="f5 f4-ns mv0">Classic wedding Cake</h1>
    </div>
      <div class="dtc tr">
        <h2 class="f5 mv0">$1,500</h2>
      </div>
    </div>
    <p>
    Lorem ipsum dolor sit amet, alia sanctus ea eam, eu sint scripta epicuri sea. 
    </p>
  </div>
</article>
<article class="br2 ba dark-gray b--black-10 mv5 w-100 w-50-m w-25-l mw5 center ">
          <img src={pink} class="db w-100 br2 br--top" alt=""/>
      <div class="pa2 ph3-ns pb3-ns">
    <div class="dt w-100 mt1">
    <div class="dtc">
        <h1 class="f5 f4-ns mv0">Pink Tropical </h1>
    </div>
      <div class="dtc tr">
        <h2 class="f5 mv0">$1,000</h2>
      </div>
    </div>
    <p>
    Lorem ipsum dolor sit amet, alia sanctus ea eam, eu sint scripta epicuri sea. Ius ipsum mundi 
    urbanitas at, tantas partem causae eu mei.
    </p>
  </div>
</article>
</div>
    </div>
  )
}

