import { Table } from "antd";
import React, { useEffect, useState } from "react";
import { useSystemTutores } from "../Hooks/useSystemTutores";
import { MdManageAccounts } from "react-icons/md";
import AnadirTutor from "../../Components/AñadirTutor";
import { IoEyeSharp } from "react-icons/io5";
import AccionesTutores from "../../Components/AccionesTutores";
import { useDispatch } from "react-redux";
import {
  AgregarEstudiantes,
  LimpiarEstudiantes,
} from "../Store/Tutores/TutorSlice";
import VerEstudiantes from "../../Components/VerEstudiantes";

export const Tutores = () => {
  const dispatch = useDispatch();
  const { startGetTutores, Tutores } = useSystemTutores();
  const [Open, setOpen] = useState(false);
  const [Modal, setModal] = useState(false);
  const [User, setUser] = useState("");
  const AbrirModal = (es) => {
    console.log(es);
    for (const iterator of es.Estudiantes) {
      console.log(iterator);
      dispatch(AgregarEstudiantes(iterator));
    }
    // dispatch(AgregarEstudiantes(es.Estudiantes));
    setUser(es);
    setOpen(true);
  };

  const CerrarModal = () => {
    setOpen(false);
    dispatch(LimpiarEstudiantes());
  };
  const AbrirModal2 = (es) => {
    console.log(es);
    for (const iterator of es.Estudiantes) {
      console.log(iterator);
      dispatch(AgregarEstudiantes(iterator));
    }
    // dispatch(AgregarEstudiantes(es.Estudiantes));
    setUser(es);
    setModal(true);
  };

  const CerrarModal2 = () => {
    setModal(false);
    dispatch(LimpiarEstudiantes());
  };

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
      key: "Estado",
      title: "ESTADO",
      dataIndex: "Activo",
      render: (text, record) => {
        return <p>{text === true ? "Activo" : "Inactivo"}</p>;
      },
    },
    {
      key: "Estudiante",
      title: "ESTUDIANTES",
      render: (text, record) => {
        return (
          <IoEyeSharp className="icon-estu" onClick={() => AbrirModal2(text)} />
        );
      },
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
  return (
    <h1>
      <AnadirTutor />
      <AccionesTutores
        user={User}
        open={Open}
        AbrirModal={AbrirModal}
        CerrarModal={CerrarModal}
      />
      <VerEstudiantes
        open={Modal}
        user={User}
        AbrirModal={AbrirModal2}
        CerrarModal={CerrarModal2}
      />
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
