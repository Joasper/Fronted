import { createSlice } from "@reduxjs/toolkit";

export const EstudianteSlice = createSlice({
  //nombre del slice con el que se vincula al store
  name: "estudiante",
  //declaracion del estado inicial de las variables
  initialState: {
    Estudiantes: [],
    EstudianteActivo: null,
    Checking: "Checking",
    ErrorMessage: null,
  },
  //funciones que modifican el estado
  reducers: {
    GetStudents: (state, { payload }) => {
      state.Estudiantes = payload;
    },
    GetEstudianteActivo: (state, { payload }) => {
      state.EstudianteActivo = payload;
    },
  },
});

export const { GetStudents, GetEstudianteActivo } = EstudianteSlice.actions;
