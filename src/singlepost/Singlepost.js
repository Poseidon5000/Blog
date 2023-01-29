import React from 'react';
import './Singlepost.css';
import img6 from './img6.jpg'
// import imgalt from './img6alt.jpg'

const Singlepost = () => {
  return (
    <div className='singlepost'>
        <div className='singlePostWrapper'>
            <img src={img6}
            alt=''
            className='singlePostImage'
            />

            <h1 className='singlePostTitle'>
                Lorem ipsum dolor sit amet.
                <div className='singlePostEdit'>
                    <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                   <i className="singlePostIcon fa-solid fa-trash-can"></i>
                </div>
            </h1>

            <div className='singlePostInfo'>
                <span className='singlePostAuthor'>
                    Author: <b>Poseidon</b>
                </span>

                <span className='singlePostDate'>1 hour ago</span>
            </div>

            <p className='singlePostDescr'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
        </div>
    </div>
  )
}

export default Singlepost