"use client"
import { client } from '@/lib';
import Image from 'next/dist/client/image';
import React, { useRef, useState } from 'react'

function Sanity() {
  function handleChange(e:any) {
    const file = e.target.files[0];
    
    client.assets.upload("image", file, {
      filename: file.name,
      contentType:file.type
    }).then(data=>console.log(data)
    ).catch(err=>console.log(err)
    )
  }
  
  return (
    <div>
      <input type="file" onChange={handleChange} />
      <button>upload</button>
    </div>
  );
}

export default Sanity