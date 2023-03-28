import Image from 'next/image';
import React from 'react'

async function Products() {
    const res = await fetch("https://fakestoreapi.com/products");
    const products = await res.json();
    if(!products)return <div>loading ... </div>
    
  return (
      products.map((p:{image:string,price:string|number}, i: React.Key | null | undefined) => {
          return (
              <div key={i} className='keen-slider__slide w-full h-52 flex flex-col justify-between p-4 bg-white rounded-lg'>
                  <div className='w-40 h-40 rounded-lg'>
                     <Image src={p.image} fill alt="product" className='rounded-lg object-contain'/> 
                  </div>
                      <b className='text-lg'>{p.price}</b>
            </div>
        )
    })
  )
}

export default Products