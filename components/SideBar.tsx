"use client";

import { links } from "@/data/sidebar";
import { useSidebarStore } from "@/store/store";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../app/assets/images/logo/digi.svg";
import { shallow } from "zustand/shallow";

function SideBar() {
  const { open, closeIt } = useSidebarStore(
    (state) => ({ open: state.open, closeIt: state.closeIt }),
    shallow
  );
  return (
    <div
      className={`fixed top-0 left-0 right-0 bottom-0 lg:hidden ${
        open ? "block" : "hidden"
      }`}>
      <div
        className={`bg-white w-2/3 md:w-1/2 transition-transform delay-150 absolute top-0 bottom-0 right-0 ${
          open ? "translate-x-0" : "translate-x-[1000px]"
        }`}>
        <div className="p-3 flex flex-col gap-5">
          <Link href={"/"}>
            <Image width={100} src={Logo} alt="logo" />
          </Link>
          <hr />
          <div className="flex flex-col gap-6">
            {links.map((link, i) => {
              const { Icon, text } = link;
              return (
                <div key={i} className="flex items-center gap-5 cursor-pointer">
                  <Icon size={25} color="gray" />
                  <p>{text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div
        onClick={closeIt}
        className={`w-1/3 md:w-1/2 absolute top-0 left-0 bottom-0 bg-black  opacity-50 ${
          open ? "block" : "hidden"
        }`}></div>
    </div>
  );
}

export default SideBar;
