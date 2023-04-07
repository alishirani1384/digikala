import Slider from '@/components/ProductSlider/Slider';
import { client } from '@/lib';
import Image from 'next/image';
import React from 'react'

async function page({ params }: { params: {id:string} }) {
  const data = await client.fetch(
    `*[_type == "product" && _id == "${params.id}"]{
      title,
        image{
            asset{
                _ref
            }
        }
      }`
  );
  return (
    <main className="my-auto">
      <div className="flex gap-2">
        <Slider img={data[0].image.asset._ref} />
        <p className='text-2xl'>{data[0].title}</p>
      </div>
    </main>
  );
}

export default page