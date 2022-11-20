import React from 'react'
import './Address.css'

import {FaAddressCard} from 'react-icons/fa'

const Address = () => {
  return (
    <div className='address__card'>
      <FaAddressCard className='card' />
      <p className='address'>lorem</p>
    </div>
  )
}

export default Address