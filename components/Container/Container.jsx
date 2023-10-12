"use client"


import { useEffect, useState } from 'react';
import Topbar from '../shared/Topbar';
import LeftSidebar from '../shared/LeftSidebar';
import { useCookies } from 'next-client-cookies';
import axios from '@/utils/axios';




function Container({ children }) {
    const cookies = useCookies();
    const token = cookies.get("token")
    const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (token) {
            axios.defaults.headers.common.Authorization = `Bearer ${token}`;
            setIsLoading(false);
        }
    }, [token]);

    const toggleSidebar = () => {
        console.log("toggle")
        setSidebarCollapsed(!isSidebarCollapsed);
    };

    return (
        <body className={`vertical light ${isSidebarCollapsed ? 'collapsed' : ''}`}>
            <div className="wrapper">

                {isLoading ? (
                    // Affiche un indicateur de chargement tant que isLoading est true
                    <></>
                ) : (
                    <> <Topbar toggleSidebar={toggleSidebar} />
                        <LeftSidebar />
                        {children
                    }</>

                )}
            </div>
        </body>
    );
}

export default Container;