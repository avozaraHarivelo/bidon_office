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

export interface Credentials {
    telephone: string;
    password: string;
  }

  export interface User {
    username: string;
    // Ajoutez d'autres propriétés utilisateur si nécessaire
  }

  export interface AuthState {
    user: any; // Remplacez `any` par le type de votre utilisateur si nécessaire
    isAuthenticated: boolean;
  }

  export   interface AuthAction {
    type: 'LOGIN' | 'LOGOUT';
    payload?: any;
  }
  
