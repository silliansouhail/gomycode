import React from 'react'
import './ProfilePhoto.css'

import {CgProfile} from 'react-icons/cg'

const ProfilePhoto = () => {
  return (
    <div className='photo__card'>
        <CgProfile className='photo'/>
    </div>
  )
}

export default ProfilePhoto