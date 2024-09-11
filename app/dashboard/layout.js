"use client";

import Sidebar from "@/components/core/Sidebar";
import Header from "@/components/core/Header";
import Footer from "@/components/core/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <main className="container-fluid">
        <div className="row main-class">
          <aside className="col-lg-2 col-md-1 col-12 isDesktopOnly">
            <Sidebar />
          </aside>
          <section className="col-lg-10 col-md-11 col-12 p-2 mt-4">{children}</section>
        </div>
      </main>
    </>
  );
};

export default Layout;
