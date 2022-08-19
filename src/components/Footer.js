import React from 'react';

export const Footer = ( ) => {
  return (
    <div className='footer bg-black '>
        <footer class="pv4 ph3 ph5-m ph6-l mid-gray">
            <small class="f6 db tc white">© 2016 <b class="ttu">SOME COMPANY Inc</b>, All Rights Reserved</small>
             <div class="tc mt3">
                <a href="/language/" title="Language" class="f6 dib ph2 link white hover-light-blue">Language</a>
                <a href="/terms/"    title="Terms" class="f6 dib ph2 link white hover-light-blue">Terms of Use</a>
                <a href="/privacy/"  title="Privacy" class="f6 dib ph2 link white hover-light-blue">Privacy</a>
             </div>
        </footer>
    </div>
  )
}
