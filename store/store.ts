import { create } from "zustand";

interface SideBarState{
    open: boolean,
    openIt:()=>void,
    closeIt:()=>void,
}

export const useSidebarStore = create<SideBarState>()((set) => ({
    open: false,
    openIt: () => set({ open: true}),
    closeIt:()=>set({open:false})
}))