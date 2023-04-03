"use client"
import React from 'react'
import { IoIosArrowUp } from 'react-icons/io';

function UpBtn() {
    function handleClick() {
        window.scrollTo({top:0})
    }
  return (
    <button onClick={handleClick} className="btn btn-outline text-gray-500 border-gray-400 gap-4">
      بازگشت به بالا <IoIosArrowUp size={20} />
    </button>
  );
}

export default UpBtn