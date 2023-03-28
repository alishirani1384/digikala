import Image from 'next/image';
import React from 'react'

async function Products() {
    const res = await fetch("https://fakestoreapi.com/products");
    const products = await res.json();
    
  return (
      products.map((p:{image:string,price:string|number}, i: React.Key | null | undefined) => {
          return (
              <div key={i} className="keen-slider__slide bg-white min-w-max min-h-full first:rounded-r-xl last:rounded-l-lg">
                  <div className='flex flex-col min-h-full items-stretch min-w-full justify-between p-4 h-full'>
                      <div className='flex items-center justify-center'>
                          <Image src={p.image} width={130} height={130} alt="product"/>
                      </div>
                      <div>
                          <b>{p.price}$</b>
                      </div>
                  </div>
              </div>
        )
    })
  )
}

export default Products