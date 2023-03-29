"use client"
import { useSidebarStore } from '@/store/store';
import React from 'react';
import {FiMenu} from "react-icons/fi"

function SideBarBtn() {
  const openIt = useSidebarStore(state => state.openIt);
  
  return (
    <button
      onClick={openIt}
      className="btn lg:hidden btn-ghost swap swap-rotate">
      <FiMenu size={25} />
    </button>
  );
}

export default SideBarBtn