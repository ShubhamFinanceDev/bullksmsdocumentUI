"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { icons } from "@/env/icons";

const Sidebar = () => {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

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
      label: "File Upload",
      icon: icons.Icon02,
      path: "/mergecustomerdocument",
    },
    {
      label: "Send Kit",
      icon: icons.Icon03,
      path: "/sendcertificaterequest",
      isMobileOnly: true,
    },

  ];

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
        <div className="company-header">
        
          <img src="/favicon/favicon.ico" alt="logo" className="company-logo " />
          <button>
                {!isCollapsed && <span>Shubham Finance</span>}
              </button>
          <button
            className={`toggle-btn ${isCollapsed ? "toggled" : ""}`}
            onClick={toggleSidebar}
          >
            <img src={icons.Icon05} alt="toggle" />
          </button>
        </div>
        <hr />
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
            <button>
              <img src={icons.Icon04} alt="logout" />
              {!isCollapsed && <span>Logout</span>}
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
