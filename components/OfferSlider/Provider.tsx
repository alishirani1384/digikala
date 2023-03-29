"use client"
import { useKeenSlider } from 'keen-slider/react';
import React, { ReactNode, useEffect, useState } from 'react'

function Provider({ children }: { children: ReactNode }) {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [sliderRef,slider] = useKeenSlider<HTMLDivElement>({
      
        rtl:true,
      slides: { perView: "auto" , spacing: 5 },
  });
  
  useEffect(() => {
    if (slider) {
      setIsLoaded(true);
    }
  }, [slider]);
  return (
    isLoaded &&
      <div ref={sliderRef} className='keen-slider min-h-full mr-6'>
          {children}
    </div>
  )
}

export default Provider