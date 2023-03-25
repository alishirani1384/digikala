import { builder, client } from "@/lib";
import Image from "next/image";
import Link from "next/link";
import Sanity from "./Sanity";


export default async function Home() {
  const res = await client.fetch(`*[_type == "banner"]{
    image{
      asset{
        _ref
      }
    }
  }`);
  console.log(res);
  

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Image src={builder.image(res[0].image.asset._ref).url()} width={2880} height={600} alt="image" />
      <p>{res.length}</p>
      <Sanity/>
    </div>
  );
}
