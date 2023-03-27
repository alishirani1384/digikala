"use client"
import React from 'react'
import { IconType } from 'react-icons'

interface ArrowInt {
  Icon: IconType;
  onClick: () => void | undefined;
}

function Arrow({Icon,onClick}:ArrowInt) {
    return (
      <button onClick={onClick} className='btn btn-circle'>
          <Icon size={30}/>
    </button>
  )
}

export default Arrow