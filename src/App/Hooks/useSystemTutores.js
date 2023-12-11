import { useDispatch, useSelector } from "react-redux";
import { BD } from "../../Api/BD";
import { GetTutores } from "../Store/Tutores/TutorSlice";

export const useSystemTutores = () => {
  const dispatch = useDispatch();
  const { Tutores } = useSelector((state) => state.tutores);

  const startGetTutores = async () => {
    try {
      const { data } = await BD.get("/tutores");
      dispatch(GetTutores(data));
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    //*PROPIEDADES
    Tutores,

    //*METODOS
    startGetTutores,
  };
};
