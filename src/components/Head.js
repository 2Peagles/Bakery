import React from 'react';
import video2 from'../video/video2.mp4';
import '../App.css';

function Head( ) {
    return (
        <div className='video-container'>
            <video src={video2} muted autoPlay>
             </video>
        </div>
    );
  }
  export default Head;