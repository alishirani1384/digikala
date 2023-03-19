import { links } from "@/data/sidebar";
import React from "react";
import { FiMenu } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";

function NavLinks() {
  return (
    <div className="w-full hidden my-3 lg:block">
      <div className="flex mx-auto xl:max-w-[1676px] w-full px-4">
        <div className="flex relative items-center gap-2 cursor-pointer after:block after:mt-auto after:content-[''] after:absolute after:h-[3px] after:bg-red-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left after:bottom-0">
          <FiMenu size={20} />
          <b>دسته بندی کالاها</b>
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="flex items-center gap-5">
          {links.map((link, i) => {
            const { Icon, text } = link;
            return (
              <div
                key={i}
                className="flex h-full relative after:block after:mt-auto after:rounded-full after:content-[''] after:absolute after:h-[3px] after:bg-red-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left after:bottom-0 text-gray-500 items-center gap-2 text-sm cursor-pointer">
                <Icon size={15} color="gray" />
                <p>{text}</p>
              </div>
            );
          })}
        </div>
        <div className="flex mr-auto cursor-pointer items-center btn btn-ghost">
          <div className="flex items-center gap-3">
            <SlLocationPin size={25} />
            <small className="select-none lg:hidden xl:flex">لطفا شهر خود را انتخاب کنید</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavLinks;
