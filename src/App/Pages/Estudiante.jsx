import { Table } from "antd";
import React, { useEffect, useState } from "react";
import { useSystemEstudiante } from "../Hooks/useSystemEstudiantes";
import AnadirEstudiante from "../../Components/AnadirEstudiante";
import { MdManageAccounts } from "react-icons/md";
import AccionesEstudiantes from "../../Components/AccionesEstudiante";
import { useDispatch } from "react-redux";
import { GetEstudianteActivo } from "../Store/Estudiante/EstudianteSlice";

export const Estudiante = () => {
  const dispatch = useDispatch();
  const { startGetEstudent, Estudiantes } = useSystemEstudiante();
  const [Open, setOpen] = useState(false);
  const [user, setuser] = useState("");

  const AbrirModal = (es) => {
    setOpen(true);
    setuser(es);
    dispatch(GetEstudianteActivo(es));
    console.log(es);
  };

  const CerrarModal = () => {
    setOpen(false);
  };

  useEffect(() => {
    startGetEstudent();
  }, []);

  console.log(Estudiantes);

  const Columns = [
    {
      key: "Matricula",
      title: "MATRICULA",
      dataIndex: "Matricula",
    },
    {
      key: "Nombre",
      title: "NOMBRE",
      dataIndex: "Nombre",
    },
    {
      key: "Apellido",
      title: "APELLIDO",
      dataIndex: "Apellido",
    },
    {
      key: "Sexo",
      title: "SEXO",
      dataIndex: "Sexo",
    },
    {
      key: "FechaNacimiento",
      title: "FECHA DE NACIMIENTO",
      dataIndex: "FechaNacimeinto",
      render: (text, recprd) => {
        return text.toString().substring(0, 10);
      },
    },
    {
      key: "Estado",
      title: "ESTADO",
      dataIndex: "Estado",
    },
    {
      key: "Acciones",
      title: "ACCIONES",
      render: (text, record) => {
        return (
          <MdManageAccounts
            className="icon-estu"
            onClick={() => AbrirModal(text)}
          />
        );
      },
    },
  ];

  const ManejarEstudiante = (es) => {
    console.log(es);
  };

  return (
    <h1>
      <AnadirEstudiante />
      <AccionesEstudiantes
        open={Open}
        AbrirModal={AbrirModal}
        CerrarModal={CerrarModal}
        usuario={user}
      />

      <Table
        columns={Columns}
        size={"large"}
        bordered={true}
        pagination={true}
        dataSource={Estudiantes.estudiante || []}
      />
    </h1>
  );
};
