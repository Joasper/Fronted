import React from "react";
import { Route, Routes } from "react-router-dom";
import { SystemRoutes } from "../App/Routes/SystemRoutes";

export const IndexRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<SystemRoutes />} />
    </Routes>
  );
};
