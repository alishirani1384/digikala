import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../assets/images/logo/logo.svg";

function LoginPage() {
  return (
    <div className="absolute z-50 flex items-center justify-center bg-white top-0 bottom-0 left-0 right-0 w-full h-full">
      <div className="w-full max-w-lg mx-7 flex flex-col  gap-4">
        <Link href={"/"} className="w-fit mx-auto">
          <Image src={Logo} alt="logo" />
        </Link>
        <p className="font-bold">ورود | ثبت نام</p>
        <small className="text-gray-600">
          سلام! <br /> لطفا شماره موبایل یا ایمیل خود را وارد کنید
        </small>
        <form className="flex flex-col w-full gap-5">
          <input
            type="text"
            dir="auto"
            className="w-full p-3 rounded-lg border outline-none border-b-2 border-b-blue-600 bg-slate-200"
          />
          <button className="bg-red-600 rounded-lg text-white p-3">ورود</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
