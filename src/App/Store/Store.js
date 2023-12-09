import { configureStore } from "@reduxjs/toolkit";
import { EstudianteSlice } from "./Estudiante/EstudianteSlice";

export const store = configureStore({
  reducer: {
    estudiante: EstudianteSlice.reducer,
  },
});
