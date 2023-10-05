"use client"



import { useState } from "react";

export default function MenuItem({title,text, icon,subMenuItems}) {
  const [isOpen, setOpen] = useState(false);
  const toggleDropdown = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <p className="text-muted nav-heading mt-4 mb-1">
        <span>{title}</span>
      </p>
      <ul className="navbar-nav flex-fill w-100 mb-2">
        <li className="nav-item dropdown">
          {subMenuItems ? (
            <a
              onClick={toggleDropdown}
              className={`dropdown-toggle nav-link ${isOpen ? '' : 'collapsed'}`}
            >
              <i className={`fe ${icon} fe-16`} />
              <span className="ml-3 item-text">{text}</span>
            </a>
          ) : (
            <a className="nav-link">
              <i className={`fe ${icon} fe-16`} />
              <span className="ml-3 item-text">{text}</span>
            </a>
          )}
          {subMenuItems && (
            <ul className={`list-unstyled pl-4 w-100 collapse  ${isOpen ? 'show' : ''}`}>
              {subMenuItems.map((sub,key) => (
                <li key={key} className="nav-item">
                  <a className="nav-link pl-3" >
                    <span className="ml-1 item-text">{sub.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>
      </ul>

    </>
  )
}
