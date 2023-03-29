import Image from 'next/image'
import React from 'react'
import { HiArrowLeft } from "react-icons/hi";

function Supermarket() {
  return (
      <div className='bg-green-100 md:rounded-xl my-3'>
          <div className='items-center justify-between flex px-10 py-8'>
              <div className='flex items-start flex-col md:flex-row md:items-center'>
                  <Image src={"/fresh.png"} width={66} height={66} alt="basket" />
                  <Image src={"/fresh.svg"} width={250} height={30} alt="text"/>
              </div>
              <button className='bg-white flex items-center gap-6 rounded-full p-3 text-green-600'>
                 <p className='hidden md:block'> بیش از 80 کالا </p>
                  <HiArrowLeft color='green'/>
              </button>
          </div>
    </div>
  )
}

export default Supermarket