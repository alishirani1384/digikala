import Link from "next/link";


export default function Home() {
  return (
    <div className="w-full flex items-center justify-center">
     <Link href={"admin"} className="btn">ADMIN page</Link> 
    </div>
  )
}
