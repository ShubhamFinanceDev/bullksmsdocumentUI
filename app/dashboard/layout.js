"use client";

import Sidebar from "@/components/core/Sidebar";
import Header from "@/components/core/Header";
import Footer from "@/components/core/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="">
        <div className="">
          <aside className="col-lg-2 col-md-1 col-12">
            <Sidebar />
            <Footer />
          </aside>
          <section className="col-lg-10 col-md-11 col-12">
            <Footer />
          </section>
        </div>
      </main>
    </>
  );
};

export default Layout;
