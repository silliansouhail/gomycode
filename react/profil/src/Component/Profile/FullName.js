import React from 'react'
import './FullName.css'

import {FiPenTool} from 'react-icons/fi'

const FullName = () => {
  return (
    <div className='name__card'>
      <FiPenTool className='tool'/>
      <p className='name' >Laihous</p>
    </div>
  )
}

export default FullName