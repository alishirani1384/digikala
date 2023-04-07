import { builder, client } from '@/lib'
import Image from 'next/image'
import React from 'react'

function Slider({img}:{img:string}) {
  
  return (
    <div className="w-full">
          <Image alt="image" src={builder.image(img).url()} width={200} height={300} />
    </div>
  );
}

export default Slider