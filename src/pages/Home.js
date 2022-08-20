import React from 'react';
import { Link } from 'react-router-dom';
import cake2 from '../photo/cake2.jpg';
import video2 from'../video/video2.mp4';
import '../about.css';

function Home( ) {
    return (
      <>
        <div className='video-container'>
            <video src={video2} muted loop autoPlay />
        </div>
        <div className='about-container f6 fw6 ttu tracked'>
            <div className='about-content'>
              <div className='about-img ma5'>
                <img src={cake2} alt='...' className='about-img-home'/>
                </div>
                <div className='about-text ma5'>
                  <h1 className='pa0 ma1'>About Us Example</h1>
                    <h3 className='pa0 ma1'>About us Subtitle</h3>
                    <p className='pa0 ma1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p className='ma1'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                      nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
              </div>
              <div className='about-content'>
                <div className='about-text ma5'>
                  <h1 className='pa0 ma1'>Service Example</h1>
                    <h3 className='pa0 ma1'>Serivce Subtitle</h3>
                    <p className='pa0 ma1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p className='ma1'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                      nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                     <Link to='/contact'> <button className='contactbtn pa3 ma1 bg-white hover-bg-black grow hover-light-blue br2 ttu'>Contact for info</button></Link>
              </div>
              <div className='about-img ma5'>
                <img src={cake2} alt='...' className='about-img-home'/>
                </div>
          </div>
      </div>
      <div className='testimonials-container db f6 fw6 ttu tracked'>
        <div className='testimonials-title'><h1 className='pa0 ma0 '>Testimonials</h1></div>
        <div className='testimonials-content-box'>
          <div className='tsbox'>
           “[Product name] had a great [product advantage]. I was a bit worried about [objection], 
            but it wasn’t a problem at all. I love using [product name] when I’m [best use scenario].”
          </div>
          <div className='tsbox'>
            “[Business name] was [positive attribute]. The team helped me [problem the business solved]. 
            I had a problem with [key challenge], but they took care of it right away.”
          </div>
          <div className='tsbox'>
            “I immediately knew I had a [customer problem]. I needed this resolved 
            [product or service competitive advantage]. [Your business name] did it, and I [overall satisfaction].”
          </div>
          <div className='tsbox'>
            “I visited [business name] and tried [product or service the customer used]. The experience was great, it
             [advantage enjoyed by the customer]. I’d highly recommend them to anyone.”
          </div>
        </div>
      </div>
      </>
    );
  }
  export default Home;