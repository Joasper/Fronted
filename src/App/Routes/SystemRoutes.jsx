import React from "react";
import App from "../../App";
import { Route, Routes } from "react-router-dom";
import { Estudiante } from "../Pages/Estudiante";
import { Inicio } from "../Pages/Inicio";
import { Tutores } from "../Pages/Tutores";

export const SystemRoutes = () => {
  return (
    <App>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/estudiante" element={<Estudiante />} />
        <Route path="/Tutores" element={<Tutores />} />
      </Routes>
    </App>
  );
};
