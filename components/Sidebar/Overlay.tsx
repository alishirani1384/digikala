"use client";
import { useSidebarStore } from "@/store/store";
import React from "react";
import { shallow } from "zustand/shallow";

function Overlay() {
  const { open, closeIt } = useSidebarStore(
    (state) => ({ open: state.open, closeIt: state.closeIt }),
    shallow
  );
  return (
    <div
      onClick={closeIt}
      className={`w-full z-40 lg:hidden md:w-full fixed top-0 left-0 bottom-0 bg-black  opacity-50 ${
        open ? "block" : "hidden"
      }`}></div>
  );
}

export default Overlay;
