"use client"
import React, { useState } from 'react';
import {FiMenu} from "react-icons/fi"
import { IoMdClose } from "react-icons/io";

function SideBarBtn() {
  const [swap,setSwap]=useState<boolean>(true)
  return (
    <button
      onClick={() => setSwap(!swap)}
      className="btn lg:hidden btn-ghost swap swap-rotate">
      <FiMenu className={`swap-${swap?"off":"on"}`} size={25} />
      <IoMdClose className={`swap-${swap?"on":"off"}`} size={25} />
    </button>
  );
}

export default SideBarBtn