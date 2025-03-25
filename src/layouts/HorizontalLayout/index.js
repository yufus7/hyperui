import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

const HorizontalLayout = () => {
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <Header />

      <main className="container my-4" style={{ flex: 1 }}>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default HorizontalLayout;
