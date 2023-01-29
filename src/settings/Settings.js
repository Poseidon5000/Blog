import React from 'react';
import './Settings.css';
import Sidebar from '../Sidebar/Sidebar';
import pfp from './pphoto.jpg'

const Settings = () => {
  return (
    <div className='settings'>
        <div className='settingsWrapper'>
           <div className='settingsTitle'>
            <span className='settingsUpdateTitle'>Update Your Account</span>
            <span className='settingsDeleteTitle'>Delete Account</span>
           </div>

           <form 
           className='settingsForm'>
            <label className=''>Profile Picture</label>
            <div className='settingsPP'>
                <img
                src={pfp}
                alt= 'profilep'
                />
                <label htmlFor='fileInput'>
                    <i className="settingsPPIcon fa-solid fa-user"></i>
                </label>
                <input type='file' id='fileInput' style={{display:'none'}}/>
            </div>
            <label>Username</label>
            <input type='text' placeholder='Poseidon'/>

              <label>Email</label>
            <input type='email' placeholder='poseidon@gmail.com'/>

              <label>Password</label>
            <input type='password'/>

            <button className='settingsButton'>Update</button>


           </form>
        </div>
         <Sidebar/>
    </div>
  )
}

export default Settings