import React from 'react'
import { AiOutlineLeft } from 'react-icons/ai';
import { SlLocationPin } from 'react-icons/sl';

function CitySelector() {
  return (
    <div className="flex lg:hidden cursor-pointer w-full items-center justify-between my-3">
      <div className="flex items-center gap-3">
        <SlLocationPin className="text-yellow-600" size={15} />
        <small className="select-none">لطفا شهر خود را انتخاب کنید</small>
      </div>
      <AiOutlineLeft size={15} />
    </div>
  );
}

export default CitySelector