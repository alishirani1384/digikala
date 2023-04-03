import { builder, client } from '@/lib'
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import Image from 'next/image';
import React from 'react'

async function Categories() {
    const categories = await client.fetch(`*[_type == "categories"]{
title,
  image{
  asset{
_ref
  }
}
}`);
    
  return (
    <div className="w-full my-10">
          <h2 className='text-xl mx-auto w-fit my-6'>دسته‌بندی‌های دیجی‌کالا</h2>
          <div className='grid grid-cols-3 gap-4 lg:grid-cols-6'>
              {categories.map((c: { image: { asset: { _ref: SanityImageSource; }; }; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; },i: React.Key | null | undefined)=> {
                  return (
                    <div key={i} className="text-center flex flex-col items-center">
                      <Image
                        src={builder.image(c.image.asset._ref).url()}
                              alt="image"
                              width={200}
                              height={200}
                          />
                          <p>{c.title}</p>
                    </div>
                  );
              })}
          </div>
    </div>
  );
}

export default Categories