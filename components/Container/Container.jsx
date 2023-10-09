"use client"


import { useState } from 'react';
import Topbar from '../shared/Topbar';
import LeftSidebar from '../shared/LeftSidebar';


function Container({ children }) {
    const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

    const toggleSidebar = () => {
        console.log("toggle")
        setSidebarCollapsed(!isSidebarCollapsed);
    };

    return (
        <body className={`vertical light ${isSidebarCollapsed ? 'collapsed' : ''}`}>
            <div className="wrapper">
                <Topbar toggleSidebar={toggleSidebar} />
                <LeftSidebar />
                {children}
            </div>
        </body>
    );
}

export default Container;