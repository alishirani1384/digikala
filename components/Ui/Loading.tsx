"use client"
import Image from 'next/image';
import React from 'react'
import { BeatLoader } from "react-spinners";
import Logo from "../../assets/images/logo/logo.svg";

function Loading() {
  return (
    <div className="fixed flex items-center justify-center top-0 bottom-0 left-0 right-0 bg-black/50">
      <div className="bg-white rounded-xl flex flex-col w-64 items-center p-5 gap-6">
        <Image src={Logo} priority alt="logo" />
        <BeatLoader color="#ff0000" loading/>
      </div>
    </div>
  );
}

export default Loading