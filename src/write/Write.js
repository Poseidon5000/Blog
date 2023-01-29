import React from 'react'
import './Write.css';
import img7 from './img7.jpg'


const Write = () => {
  return (
    <div className='write'>
        <img src={img7}
        alt="notepad"
        className='writeImage'/>
        <form className='writeForm'>
            <div className='writeFormGroup'>
                <label htmlFor='fileInput'>
                    <i class="writeIcon fa-solid fa-plus"></i>
                </label>
                <input type='file' id='fileInput' style={{display:'none'}}/>
                <input file='text' placeholder='Title' className='writeInput' autoFocus={true}/> 
            </div>

            <div className='writeFormGroup'>
                <textarea placeholder='Tell us your story....' className='writeInput writeText' type='text'>

                </textarea>
            </div>
            <button className='writeSubmit'>PUBLISH</button>
        </form>
    </div>
  )
}

export default Write