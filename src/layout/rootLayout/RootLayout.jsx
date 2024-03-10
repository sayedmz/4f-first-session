import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";

const RootLayout = (props) => {
  return (
    <>
      <Header />

      <main className="app-main">
        <Outlet />
        {/* تستعمل للعناصر المتغيرة */}
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
