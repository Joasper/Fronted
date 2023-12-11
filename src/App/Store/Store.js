import { configureStore } from "@reduxjs/toolkit";
import { EstudianteSlice } from "./Estudiante/EstudianteSlice";
import { TutorSlice } from "./Tutores/TutorSlice";

export const store = configureStore({
  reducer: {
    estudiante: EstudianteSlice.reducer,
    tutores: TutorSlice.reducer,
  },
});
