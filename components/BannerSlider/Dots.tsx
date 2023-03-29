"use client"
import { KeenSliderHooks, KeenSliderInstance } from "keen-slider/react";
import React, { useEffect, useState } from "react";

interface Props {
  slider: React.MutableRefObject<KeenSliderInstance<
    {},
    {},
    KeenSliderHooks
      > | null>;
    index: number;
}

function Dots({ slider,index }: Props) {
    const [dots,setDots]=useState<null|undefined[]>()
    useEffect(() => {
        const arr = [...Array(slider.current?.track.details.slides.length)];
        setDots(arr)
    },[slider])
    
    
  return (
    <div dir="ltr" className="absolute flex gap-2 bottom-2 left-1/2 -translate-x-1/2">
          {dots?.map((a,i) => {
              return <div key={i} className={`block rounded-full opacity-80 bg-gray-200 w-2 h-2` + (index == i ? " !bg-white w-4 !opacity-100":"")}></div>
      })}
    </div>
  );
}

export default Dots;
