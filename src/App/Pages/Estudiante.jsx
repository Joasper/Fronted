import { Table } from "antd";
import React, { useEffect } from "react";
import { useSystemEstudiante } from "../Hooks/useSystemEstudiantes";
import AnadirEstudiante from "../../Components/AnadirEstudiante";

export const Estudiante = () => {
  const { startGetEstudent, Estudiantes } = useSystemEstudiante();
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
  ];

  return (
    <h1>
      <AnadirEstudiante />
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
