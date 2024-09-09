"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Header from "./Header";

const Sidebar = (props) => {
  const pathname = usePathname();

  const navlink = [
    {
      label: "Home",
      path: "/dashboard",
    },
    {
      label: "Loan Data Upload",
      path: "/dashboard/loandataupload",
    },
    {
      label: "Send Certificate Request",
      path: "/sendcertificaterequest",
      isMobileOnly: true,
    },
    {
      label: "Merge Costomer Document",
      path: "/mergecostomerdocument",
    },
  ];

  return (
    <>
      <div className="sidebar-page">
        {navlink.map((n, idx) => (
          <Link
            href={n.path}
            key={`nav-link__${idx}`}
            className={
              pathname === n.path
                ? "active"
                : n?.isMobileOnly
                ? "isDesktopOnly"
                : ""
            }
          >
            <button>
              <span>{n.label}</span>
            </button>
          </Link>
        ))}

        <a>
          <button onClick={() => {}}>
            <span>Logout</span>
          </button>
        </a>
      </div>
    </>
  );
};

export default Sidebar;
