import React from "react";

// router dom
import { Routes, Route } from "react-router-dom";
import { publicRoutes } from "./allRoutes";

//Layouts
import HorizontalLayout from "../layouts/HorizontalLayout";

// components and pages

const Index = () => {
  return (
    <Routes>
      <Route element={<HorizontalLayout />}>
        {publicRoutes.map((route, idx) => (
          <Route path={route.path} element={route.component} key={idx} />
        ))}
      </Route>
    </Routes>
  );
};

export default Index;
