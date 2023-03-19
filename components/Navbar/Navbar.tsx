import Image from "next/image";
import React from "react";
import SideBarBtn from "../Sidebar/SideBarBtn";
import Logo from "../../assets/images/logo/logo.svg";
import { BsQuestionSquare } from "react-icons/bs";
import Link from "next/link";
import SearchInp from "./SearchInp";
import CartBtn from "./CartBtn";
import LoginBtn from "./LoginBtn";
import CitySelector from "./CitySelector";

function Navbar() {
  return (
    <nav className="w-full">
      <div className="flex mx-auto xl:max-w-[1676px] w-full flex-col lg:flex-row px-4">
        <div className="flex lg:max-w-fit lg:pl-4 w-full items-center justify-between my-3">
          <SideBarBtn />
          <Link href={"/"}>
            <Image src={Logo} alt="digikala" />
          </Link>
          <button className="btn btn-ghost lg:hidden">
            <BsQuestionSquare size={25} />
          </button>
        </div>
        <hr />
        <div className="flex w-full items-center justify-between my-3 gap-2">
          <SearchInp />
          <LoginBtn />
          <CartBtn />
        </div>
        <hr />
        <CitySelector/>
        <hr />
      </div>
    </nav>
  );
}

export default Navbar;
