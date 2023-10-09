import { ItemsLinkProps } from '@/types'
import React from 'react'

export default function ItemsLink({ menuItem, toggleDropdown, isOpen }: ItemsLinkProps) {
    return (
        <>
            <p className="text-muted nav-heading mt-4 mb-1">
                <span>{menuItem.text}</span>
            </p>
            <ul className="navbar-nav flex-fill w-100 mb-2">
                <li className="nav-item dropdown">
                    {menuItem.subMenuItems ? (
                        <a
                            onClick={toggleDropdown}
                            className={`dropdown-toggle nav-link ${isOpen ? '' : 'collapsed'}`}
                        >
                            <i className={`fe ${menuItem.icon} fe-16`} />
                            <span className="ml-3 item-text">{menuItem.text}</span>
                        </a>
                    ) : (
                        <a className="nav-link">
                            <i className={`fe ${menuItem.icon} fe-16`} />
                            <span className="ml-3 item-text">{menuItem.text}</span>
                        </a>
                    )}
                    {menuItem.subMenuItems && (
                        <ul className={`list-unstyled pl-4 w-100 collapse  ${isOpen ? 'show' : ''}`}>
                            {menuItem.subMenuItems.map((sub: any, key: any) => (
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
