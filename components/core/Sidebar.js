"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { icons } from "@/env/icons";
import useAuthHooks from "@/hooks/useAuthHooks";
import modelHoc from "@/hoc/modelHoc";

const Sidebar = (props) => {
  const { isCollapsed, toggleSidebar } = props;
  const pathname = usePathname();
  const { logoutActionHandler } = useAuthHooks();

  const navlink = [
    {
      label: "Home",
      icon: icons.Icon01,
      path: "/dashboard",
    },
    {
      label: "Data Upload",
      icon: icons.Icon02,
      path: "/dashboard/loandataupload",
    },
    {
      label: "Merge File",
      icon: icons.Icon02,
      path: "/dashboard/mergecustomerdocument",
    },
    {
      label: "Send Kit",
      icon: icons.Icon03,
      path: "/dashboard/sendkit",
      isMobileOnly: true,
    },
  ];

  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
       <div className="company-header">

        <img src="/favicon/favicon.ico" alt="logo" className="company-logo" /> 
           <div>
  
          {!isCollapsed && (
            <span className="company-title">Shubham</span>
          )}
   
        </div>
    
        <button
          className={`toggle-btn ${isCollapsed ? "toggled" : ""}`}
          onClick={toggleSidebar}
        >
      <img src={icons.Icon05} alt="toggle" />
        </button>
         </div>
       <div className="sidebar-content">
    
        {navlink.map((n, idx) => (
          <Link
            href={n.path}
            key={`nav-link__${idx}`}
            className={
              pathname === n.path
                ? "active"
                : n.isMobileOnly
                ? "isDesktopOnly"
                : ""
            }
          >
            <button>
             <img src={n.icon} alt={n.label} />
              {!isCollapsed && <span>{n.label}</span>}
            </button>
  
          </Link>
        ))}

        <a>
   
          <button
            onClick={() =>
              props.openModel({
                key: "LOGOUT",
              })
            }
          >
    <img src={icons.Icon04} alt="logout" />
            {!isCollapsed && <span>Logout</span>}
          </button>
     
        </a>
         </div>
 
    </div>
  );
};

export default modelHoc(Sidebar);
