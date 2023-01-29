import React from 'react';
import './Sidebar.css';
import img3 from './img3.jpg'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='sideBarItem'>
             <span className='sideBarTitle'>ABOUT ME</span>
             <img src={img3} alt='About-Me' className='sideBarImage'/>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lobortis tempor hendrerit. Fusce sed enim tincidunt quam tristique dictum.</p>
        </div>

        <div className='sideBarItem'>
                <span className='sideBarTitle'>CATEGORIES</span>
                <ul className='sideBarList'>
                    <li className='sideBarListItem'>LIFE</li>
                    <li className='sideBarListItem'>SPORTS</li>
                    <li className='sideBarListItem'>MUSIC</li>
                    <li className='sideBarListItem'>CULTURE</li>
                    <li className='sideBarListItem'>TECH</li>
                    <li className='sideBarListItem'>CINEMA</li>
                </ul>
        </div>
        
        <div className='sideBarItem'>
            <span className='sideBarTitle'>FOLLOW US</span>
            <div className='sideBarSocials'>
                  <i class="sideBarIcon fa-brands fa-square-facebook"></i>
                  <i class="sideBarIcon fa-brands fa-square-twitter"></i>
                  <i class="sideBarIcon fa-brands fa-linkedin"></i>
                  <i class="sideBarIcon fa-brands fa-square-github"></i>
            </div>
        </div>
    </div>
  )
}

export default Sidebar