"use client"
import { client } from '@/lib';

import Image from 'next/dist/client/image';
import React, { useState } from 'react';

function Sanity() {
 const [imageFile, setImageFile] = useState<null | File>(null);

 const handleUpload = async () => {
   if (imageFile) {
     try {
       const uploadedImage = await client.assets.upload("image", imageFile);
       await client.create({
         _type: "banner",
         image: {
           _type: "image",
           asset: {
             _type: "reference",
             _ref: uploadedImage._id,
           },
         },
       });
       console.log(`Image uploaded to ${uploadedImage.url}`);
     } catch (error) {
       console.error("Failed to upload image", error);
     }
   }
 };

 return (
   <div>
     <input type="file" onChange={(e) => { if (!e.target.files) return; return setImageFile(e.target.files[0])}} />
     <button className='btn' onClick={handleUpload}>Upload</button>
   </div>
 );
}

export default Sanity