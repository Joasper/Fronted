import { useDispatch, useSelector } from "react-redux";
import { BD } from "../../Api/BD";
import { GetStudents } from "../Store/Estudiante/EstudianteSlice";

export const useSystemEstudiante = () => {
  const dispatch = useDispatch();
  const { Estudiantes, EstudianteActivo, Checking, ErrorMessage } = useSelector(
    (state) => state.estudiante
  );
  const startGetEstudent = async () => {
    try {
      const { data } = await BD.get("/estudiante");
      dispatch(GetStudents(data));
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    //*PROPIEDADES
    Estudiantes,
    EstudianteActivo,
    Checking,
    ErrorMessage,

    //*METODOS
    startGetEstudent,
  };
};
