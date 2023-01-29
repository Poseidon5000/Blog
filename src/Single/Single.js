import React from 'react'
import './Single.css'
import Sidebar from '../Sidebar/Sidebar'
import Singlepost from '../singlepost/Singlepost'

const Single = () => {
  return (
    <div className='single'>
        <Singlepost/>
        <Sidebar/>
    </div>
  )
}

export default Single