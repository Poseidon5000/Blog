import React from 'react';
import img5 from './img5.jpg'
import './Posts.css'

const Posts = () => {
  return (
    <div className='posts'>
        <img src={img5} className='postImage'
        alt='categories'/>





    <div className='postInfo'>
        <div className='postCates'>
            <span className='postCate'>MUSIC</span>
            <span className='postCate'>LIFE</span>
        </div>

        <span className='postTitle'>Lorem ipsum dolor sit amet.</span>
        <hr/>

        <span className='postDate'>1 hour ago</span>

         <p className='postDescr'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </p>
    </div>
       
    </div>
    
    
  )
}

export default Posts