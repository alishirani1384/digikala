"use client"
import React from 'react'
import { useKeenSlider } from "keen-slider/react";


function Provider({children}:{
  children: React.ReactNode;
}) {
    const [sliderRef] = useKeenSlider<HTMLDivElement>(
      {
        loop: true,
      },
      [
        (slider) => {
          let timeout: ReturnType<typeof setTimeout>;
          let mouseOver = false;
          function clearNextTimeout() {
            clearTimeout(timeout);
          }
          function nextTimeout() {
            clearTimeout(timeout);
            if (mouseOver) return;
            timeout = setTimeout(() => {
              slider.next();
            }, 2000);
          }
          slider.on("created", () => {
            slider.container.addEventListener("mouseover", () => {
              mouseOver = true;
              clearNextTimeout();
            });
            slider.container.addEventListener("mouseout", () => {
              mouseOver = false;
              nextTimeout();
            });
            nextTimeout();
          });
          slider.on("dragStarted", clearNextTimeout);
          slider.on("animationEnded", nextTimeout);
          slider.on("updated", nextTimeout);
        },
      ]
    );
  return (
      <div className='keen-slider' ref={sliderRef}>
          {children}
    </div>
  )
}

export default Provider