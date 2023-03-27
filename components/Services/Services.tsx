import { builder, client } from "@/lib";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Image from "next/image";
import React from "react";
import { BsThreeDots } from "react-icons/bs";

async function Services() {
  const services = await client.fetch(
    `*[_type == "services"]{
text,
  image{
  asset{
_ref
  }
}
}`
  );

  return (
    <div className="mx-auto my-6">
      <div className="grid grid-cols-4 lg:flex lg:justify-between gap-6 place-items-center">
        {services.map((s: { image: { asset: { _ref: SanityImageSource; }; }; text: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }, i: React.Key | null | undefined) => {
          return (
            <div
              key={i}
              className="flex flex-col justify-between gap-2 cursor-pointer items-center">
              <Image
                className="object-cover"
                src={builder.image(s.image.asset._ref).url()}
                width={50}
                height={50}
                alt="image"
                key={i}
              />
              <p className="text-xs">{s.text}</p>
            </div>
          );
        })}
        <div className="flex flex-col items-center justify-between gap-2 cursor-pointer">
          <div className="bg-gray-300 flex items-center justify-center w-[50px] h-[50px] rounded-full">
            <BsThreeDots size={30} />
          </div>
          <p className="text-xs">بیشتر</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
