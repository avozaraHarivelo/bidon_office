import { MouseEventHandler } from "react";

export interface LeftSidebarProps {
    toggleSidebar : MouseEventHandler<HTMLAnchorElement>;
    isCollapsed: boolean;
}

export interface TopbarProps {
    toggleSidebar: MouseEventHandler<HTMLButtonElement>;
}

export interface ItemsLinkProps{
    menuItem:any;
    toggleDropdown: MouseEventHandler<HTMLAnchorElement>;
    isOpen:boolean;
}

