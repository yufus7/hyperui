import React from "react";

// router dom
import { Navigate } from "react-router-dom";

// components and pages
import Home from "../pages/Home";

// kullanıcı girişi gereken sayfalar
const authProtectedRoutes = [];

// kullanıcı girişi olmadan erişilebilecek sayfalar
const publicRoutes = [
  { path: "/", component: <Home /> },
  { path: "*", component: <Navigate to="/404" /> },
];

export { authProtectedRoutes, publicRoutes };
