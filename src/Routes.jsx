import React from "react";
import Home from "./pages/home/Home";
import Blogs from "./pages/blogs/Blogs";
import Contact from "./pages/contact/Contact";
import NotFound from "./pages/notFound/NotFound";
import { Route, Routes } from "react-router-dom";
import Counter from "./pages/counter/Counter";
import RootLayout from "./layout/rootLayout/RootLayout";
import { AboutUs } from "./about-us/AboutUs";
import DummyData from "./utils/DummyData";
import Destructuring from "./destructuring/Destructuring";
import BlogDetails from "./pages/blogs/blogDetails/BlogDetails";
import { InvestmentCalculator } from "./pages/investment-calculator/InvestmentCalculator";
const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        {/* //
        موجودة Outlet في RootLayout */}

        <Route path="" element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="Blog-details/:blog_id" element={<BlogDetails />} />
        <Route path="contact-us" element={<Contact />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="counter" element={<Counter />} />
        <Route path="dummyData" element={<DummyData />} />
        <Route path="destructuring" element={<Destructuring />} />

        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="investment-calculator" element={<InvestmentCalculator />} />
    </Routes>
  );
};

export default MainRoutes;
