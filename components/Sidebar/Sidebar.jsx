"use client"

import MenuItem from '../Sidebar/MenuItem'

import itemsData from '../Sidebar/Data'

function Sidebar(props) {
 
  return (
    <aside
      className="sidebar-left border-right bg-white shadow "
      id="leftSidebar"
      data-simplebar=""
    >
      <a
        href="#"
        className="btn collapseSidebar toggle-btn d-lg-none text-muted ml-2 mt-3"
        onClick={props.toggleSidebar}
      >
        <i className={`fe ${props.isCollapsed ? 'fe-menu' : 'fe-x'}`}>
          <span className="sr-only" />
        </i>
      </a>
      <nav className="vertnav navbar navbar-light">
        {/* nav bar */}
        <div className="w-100 mb-4 d-flex">
          <a
            className="navbar-brand mx-auto mt-2 flex-fill text-center"
            href="./index.html"
          >
            <svg
              version="1.1"
              id="logo"
              className="navbar-brand-img brand-sm"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 120 120"
              xmlSpace="preserve"
            >
              <g>
                <polygon className="st0" points="78,105 15,105 24,87 87,87 	" />
                <polygon className="st0" points="96,69 33,69 42,51 105,51 	" />
                <polygon className="st0" points="78,33 15,33 24,15 87,15 	" />
              </g>
            </svg>
          </a>
        </div>
        {itemsData.map((menuItem, index) => (
        <MenuItem key={index} title={menuItem.text}text={menuItem.text} icon={menuItem.icon} subMenuItems={menuItem.subMenuItems} />
      ))}
      </nav>
    </aside>

  );
}

export default Sidebar;