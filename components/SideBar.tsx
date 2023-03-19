"use client";

import { links } from "@/data/sidebar";
import { useSidebarStore } from "@/store/store";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../app/assets/images/logo/digi.svg";
import { shallow } from "zustand/shallow";
import { motion,AnimatePresence } from "framer-motion";

function SideBar() {
  const { open, closeIt } = useSidebarStore(
    (state) => ({ open: state.open, closeIt: state.closeIt }),
    shallow
  );
  const variants1 = {
    open: { opacity: 1},
    closed: { opacity: 0, display:"none" }
  }
  const variants3 = {
    open: { opacity: .5},
    closed: { opacity: 0, display:"none" }
  }
  const variants2 = {
    open: {
      x: 0,
      transition: { duration: 0.03 },
    },
    closed: { x: "100%" },
  };
  return (
    <motion.div
      animate={open ? "open" : "closed"}
      variants={variants1}
      className={`fixed top-0 left-0 right-0 bottom-0 lg:hidden`}>
      <motion.div
        animate={open ? "open" : "closed"}
        variants={variants2}
        className={`bg-white z-50 w-2/3 md:w-1/2 transition-transform delay-150 absolute top-0 bottom-0 right-0`}>
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
      </motion.div>

      <motion.div
        animate={open ? "open" : "closed"}
        variants={variants3}
        onClick={closeIt}
        className={`w-full md:w-1/2 absolute top-0 left-0 bottom-0 bg-black`}></motion.div>
    </motion.div>
  );
}

export default SideBar;
