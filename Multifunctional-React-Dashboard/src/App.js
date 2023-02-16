import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {  Layout } from "./components";
import { Ecommerce, Orders, Employees, Customers, Landingpage } from "./pages";
import "./App.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/*" element={<LayoutComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

const LayoutComponent = ({children}) => {
  return (
    <Layout>
      <Routes>
        <Route path="/ecommerce" element={<Ecommerce />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/customers" element={<Customers />} />
      </Routes>
      {children}
    </Layout>
  );
};

export default App;
