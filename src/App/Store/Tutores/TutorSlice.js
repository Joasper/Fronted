import { createSlice } from "@reduxjs/toolkit";

export const TutorSlice = createSlice({
  //nombre del slice con el que se vincula al store
  name: "tutores",
  //declaracion del estado inicial de las variables
  initialState: {
    Tutores: [],
  },
  //funciones que modifican el estado
  reducers: {
    //incremeta por una cantidad dada
    GetTutores: (state, { payload }) => {
      state.Tutores = payload;
    },
  },
});

export const { GetTutores } = TutorSlice.actions;
