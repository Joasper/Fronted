import { Table } from "antd";
import React, { useEffect } from "react";
import { useSystemTutores } from "../Hooks/useSystemTutores";
import { MdManageAccounts } from "react-icons/md";
import AnadirTutor from "../../Components/AñadirTutor";

export const Tutores = () => {
  const { startGetTutores, Tutores } = useSystemTutores();

  useEffect(() => {
    startGetTutores();
  }, []);

  const Columns = [
    {
      key: "Cedula",
      title: "CEDULA",
      dataIndex: "Cedula",
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
      key: "Correo",
      title: "CORREO",
      dataIndex: "Correo",
    },
    {
      key: "Telefono",
      title: "TELEFONO",
      dataIndex: "Telefono",
    },

    {
      key: "Acciones",
      title: "ACCIONES",
      render: (text, record) => {
        return <MdManageAccounts className="icon-estu" />;
      },
    },
  ];
  return (
    <h1>
      <AnadirTutor />
      <Table
        size={"large"}
        bordered={true}
        pagination={true}
        columns={Columns}
        dataSource={Tutores || []}
      />
    </h1>
  );
};
