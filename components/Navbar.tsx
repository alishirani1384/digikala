import Image from "next/image";
import React from "react";
import SideBarBtn from "./SideBarBtn";
import Logo from "../app/assets/images/logo/logo.svg";
import { BsQuestionSquare } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { AiOutlineLeft } from "react-icons/ai";
import Link from "next/link";
import SearchInp from "./SearchInp";
import CartBtn from "./CartBtn";
import LoginBtn from "./LoginBtn";

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
        <div className="flex lg:hidden cursor-pointer w-full items-center justify-between my-3">
          <div className="flex items-center gap-3">
            <SlLocationPin className="text-yellow-600" size={15} />
            <small>لطفا شهر خود را انتخاب کنید</small>
          </div>
          <AiOutlineLeft size={15} />
        </div>
        <hr />
      </div>
    </nav>
  );
}

export default Navbar;
