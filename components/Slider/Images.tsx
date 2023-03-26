import { builder, client } from "@/lib";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Image from "next/image";
import React from "react";

async function Images() {
  const banners = await client.fetch(`*[_type == "banner"]{
    image{
      asset{
        _ref
      }
    }
  }`);

  return (
    <>
      {banners.map(
        (
          b: { image: { asset: { _ref: SanityImageSource } } },
          i: React.Key | null | undefined
        ) => (
          <Image
            className="keen-slider__slide !h-64 object-cover lg:!h-full"
            src={builder.image(b.image.asset._ref).url()}
            width={2880}
            height={600}
            alt="image"
                  key={i}
          />
        )
      )}
    </>
  );
}

export default Images;
