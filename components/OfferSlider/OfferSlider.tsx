import Image from 'next/image'
import React from 'react'
import Products from './Products'
import Provider from './Provider'

function OfferSlider() {
  return (
    <div className="w-full bg-red-500 my-4">
      <div className="container mx-auto flex items-center lg:px-5 pr-5 py-5">
        <div className="flex flex-col items-center">
          <Image src={"/Amazings.svg"} width={80} height={80} alt="text" />
          <Image src={"/box.png"} width={130} height={130} alt="text" />
        </div>
        <Provider>
          {/* @ts-expect-error Server Component */}
          <Products />
        </Provider>
      </div>
    </div>
  );
}

export default OfferSlider