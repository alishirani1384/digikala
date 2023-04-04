import { builder, client } from '@/lib';
import Link from 'next/dist/client/link';
import Image from 'next/image';
import React from 'react'

async function Products() {
    const products = await client.fetch(`*[_type == "product"]{
title,
_id,
  price,
  discount,
  image{
  asset{
_ref
  }
}
}`);
    
  return (
      products.map((p:{image:{asset:{_ref:string}},_id:string,price:string|number,discount:number}, i: React.Key | null | undefined) => {
          return (
            <Link href={`/product/${p._id}`}
              key={i}
              className="keen-slider__slide bg-white max-w-full min-w-min min-h-full first:rounded-r-xl last:rounded-l-lg">
              <div className="flex flex-col min-h-full items-stretch min-w-full justify-between p-4 h-full">
                <div className="flex items-center justify-center">
                  <Image
                    src={builder.image(p.image.asset._ref).url()}
                    width={130}
                    height={130}
                    alt="product"
                  />
                </div>
                <div className="flex items-center justify-between mt-4 min-w-[180px]">
                  <p className="bg-red-500 text-xs text-white rounded-full font-bold flex items-center justify-center text-center px-3 py-1">
                    {p.discount}%
                  </p>
                  <b>
                    {p.price.toLocaleString("fa-IR")}
                    تومان
                  </b>
                </div>
              </div>
            </Link>
          );
    })
  )
}

export default Products