"use client"


import { useState } from 'react';
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'


function Container({ children }) {
    const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

    const toggleSidebar = () => {
        console.log("toggle")
        setSidebarCollapsed(!isSidebarCollapsed);
    };

    return (
        <body className={`vertical light ${isSidebarCollapsed ? 'collapsed' : ''}`}>
            <div className="wrapper">
                <Navbar toggleSidebar={toggleSidebar} />
                <Sidebar />
                {children}
            </div>
        </body>
    );
}

export default Container;