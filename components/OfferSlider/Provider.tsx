"use client"
import { useKeenSlider } from 'keen-slider/react';
import React, { ReactNode } from 'react'

function Provider({children}:{children:ReactNode}) {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
      
        rtl:true,
      slides: { perView: "auto" , spacing: 5 },
    });
  return (
      <div ref={sliderRef} className='keen-slider min-h-full mr-6'>
          {children}
    </div>
  )
}

export default Provider