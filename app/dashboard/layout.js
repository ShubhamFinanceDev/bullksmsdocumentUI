"use client";

import React, { useState } from "react";
import Sidebar from "@/components/core/Sidebar";
import Header from "@/components/core/Header";
import Footer from "@/components/core/Footer";

const Layout = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <main className="container-fluid">
        <div className="row main-class">
          <aside className={`col-lg-${isCollapsed ? '1' : '2'} col-md-${isCollapsed ? '1' : '2'} col-12 isDesktopOnly`}>
            <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
          </aside>
          <section className={`col-lg-${isCollapsed ? '11' : '10'} col-md-${isCollapsed ? '11' : '10'} col-12 p-2 mt-4`}>
            {children}
          </section>
        </div>
      </main>
    </>
  );
};

export default Layout;
