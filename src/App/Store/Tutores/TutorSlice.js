import { createSlice } from "@reduxjs/toolkit";

export const TutorSlice = createSlice({
  //nombre del slice con el que se vincula al store
  name: "tutores",
  //declaracion del estado inicial de las variables
  initialState: {
    Tutores: [],
    EstudiantesAgregador: [],
  },
  //funciones que modifican el estado
  reducers: {
    //incremeta por una cantidad dada
    GetTutores: (state, { payload }) => {
      state.Tutores = payload;
    },
    AgregarEstudiantes: (state, { payload }) => {
      state.EstudiantesAgregador = [...state.EstudiantesAgregador, payload];
    },
    EliminarEstudiantes: (state, { payload }) => {
      state.EstudiantesAgregador = state.EstudiantesAgregador.filter(
        (e) => e._id != payload._id
      );
    },
  },
});

export const { GetTutores, AgregarEstudiantes, EliminarEstudiantes } =
  TutorSlice.actions;
