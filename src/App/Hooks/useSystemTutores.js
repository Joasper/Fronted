import { useDispatch, useSelector } from "react-redux";
import { BD } from "../../Api/BD";
import { GetTutores } from "../Store/Tutores/TutorSlice";

export const useSystemTutores = () => {
  const dispatch = useDispatch();
  const { Tutores, EstudiantesAgregador } = useSelector(
    (state) => state.tutores
  );

  const startGetTutores = async () => {
    try {
      const { data } = await BD.get("/tutores");
      dispatch(GetTutores(data));
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const CrearTutorEstudiante = async (data) => {
    console.log({ data, EstudiantesAgregador });
    const idsEstudiantes = EstudiantesAgregador.map((e) => {
      return e._id;
    });

    try {
      const res = await BD.post("/tutores", {
        Cedula: data?.FirstCedula,
        Nombre: data?.FirstName,
        Apellido: data?.FirstApellido,
        Correo: data?.FirstCorreo,
        Telefono: data?.FirstTelefono,
        Estudiantes: idsEstudiantes,
      });
      startGetTutores();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const startActualizarTutor = async (data, id) => {
    console.log({ data, id, EstudiantesAgregador });
    const idsEstudiantes = EstudiantesAgregador.map((e) => {
      return e._id;
    });
    console.log({ idsEstudiantes });

    try {
      const res = await BD.put(`/tutores/${id}`, {
        Cedula: data?.FirstCedula,
        Nombre: data?.FirstName,
        Apellido: data?.FirstApellido,
        Correo: data?.FirstCorreo,
        Telefono: data?.FirstTelefono,
        Estudiantes: idsEstudiantes,
        Activo: data?.FirstEstado === "Activo" ? true : false,
      });

      startGetTutores();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    //*PROPIEDADES
    Tutores,
    EstudiantesAgregador,

    //*METODOS
    startGetTutores,
    CrearTutorEstudiante,
    startActualizarTutor,
  };
};
