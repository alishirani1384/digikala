import Image from "next/image";
import React from "react";
import SideBarBtn from "./SideBarBtn";
import Logo from "../app/assets/images/logo/logo.svg";
import { BsQuestionSquare } from "react-icons/bs";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="w-full">
      <div className="flex w-full flex-col px-4">
        <div className="flex w-full items-center justify-between my-5">
          <SideBarBtn />
          <Link href={'/'}>
            <Image src={Logo} alt="digikala" />
          </Link>
          <button className="btn btn-ghost">
            <BsQuestionSquare size={25} />
          </button>
        </div>
        <hr />
        {/* second section */}

        {/* third section */}
      </div>
    </nav>
  );
}

export default Navbar;
