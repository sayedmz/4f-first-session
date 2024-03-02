import React from "react";
import Home from "./pages/home/Home";
import Blogs from "./pages/blogs/Blogs";
import Contact from "./pages/contact/Contact";
import NotFound from "./pages/notFound/NotFound";
import { Route, Routes } from "react-router-dom";
import Counter from "./pages/counter/Counter";
import RootLayout from "./layout/rootLayout/RootLayout";
import { AboutUs } from "./about-us/AboutUs";
import dummyData from "./utils/DummyData";
const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        {/* //
        موجودة Outlet في RootLayout */}

        <Route path="" element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="contact-us" element={<Contact />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="counter" element={<Counter />} />
        <Route path="dummyData" element={<dummyData />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
