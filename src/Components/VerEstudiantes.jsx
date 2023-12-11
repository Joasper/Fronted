import React, { useEffect, useState } from "react";
import {
  Button,
  DatePicker,
  Form,
  Input,
  Modal,
  Select,
  Space,
  Table,
  Typography,
} from "antd";
import { Forma } from "./Form";
import { useSystemEstudiante } from "../App/Hooks/useSystemEstudiantes";
import { useSystemTutores } from "../App/Hooks/useSystemTutores";
//import { useForm } from "../App/Hooks/useForm";
const init = {
  Nombre: "",
};

const VerEstudiantes = ({ open, AbrirModal, CerrarModal, user }) => {
  const { startCreateStudent } = useSystemEstudiante();
  const { startGetTutores, Tutores } = useSystemTutores();

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
    <>
      <Modal
        open={open}
        title="Añadir Estudiante"
        className="modal ver"
        footer={[
          <Button key="back" onClick={CerrarModal} danger>
            Atras
          </Button>,
        ]}
      >
        <Space className="Space modal-table-ver">
          <Table
            columns={Columns}
            dataSource={user.Estudiantes || []}
            pagination={false}
          />
        </Space>
      </Modal>
    </>
  );
};
export default VerEstudiantes;
