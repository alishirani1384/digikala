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
      className={`bg-white z-50 lg:hidden w-2/3 md:w-1/2 transition-transform duration-500 absolute top-0 bottom-0 right-0 ${
        open
          ? "translate-x-0"
          : "translate-x-full transition-transform duration-500"
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
  );
}

export default SideBar;
