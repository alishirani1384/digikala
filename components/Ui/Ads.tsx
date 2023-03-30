import Image from 'next/image'
import React from 'react';
import b1 from "../../assets/images/banners/b1.webp";
import b2 from "../../assets/images/banners/b2.webp";
import b3 from "../../assets/images/banners/b3.webp";
import b4 from "../../assets/images/banners/b4.webp";

function Ads() {
  return (
      <div className="grid grid-cols-2 gap-4 grid-rows-2 px-4 lg:flex lg:px-0">
          <div>
              <Image src={b1} alt="ads" className="rounded-xl" />
          </div>
          <div>
             <Image src={b2} alt="ads" className="rounded-xl" /> 
          </div>
          <div>
              <Image src={b3} alt="ads" className="rounded-xl" />
          </div>
          <div>
              <Image src={b4} alt="ads" className="rounded-xl" />
          </div>
    </div>
  );
}

export default Ads