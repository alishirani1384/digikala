"use client"
import { useKeenSlider } from 'keen-slider/react';
import React, { ReactNode } from 'react'

function Provider({children}:{children:ReactNode}) {
    const [sliderRef] = useKeenSlider<HTMLDivElement>({
      breakpoints: {
        "(min-width: 400px)": {
          slides: { perView: 3, spacing: 5 },
        },
        "(min-width: 1000px)": {
          slides: { perView: 6, spacing: 5 },
        },
        },
        rtl:true,
      slides: { perView: 2 },
    });
  return (
      <div ref={sliderRef} className='keen-slider'>
          {children}
    </div>
  )
}

export default Provider