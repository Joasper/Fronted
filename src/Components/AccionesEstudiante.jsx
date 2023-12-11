import React, { useEffect, useState } from "react";
import {
  Button,
  DatePicker,
  Form,
  Input,
  Modal,
  Select,
  Space,
  Tabs,
  Typography,
} from "antd";
import { Forma } from "./Form";
import { useSystemEstudiante } from "../App/Hooks/useSystemEstudiantes";
import dayjs from "dayjs";
//import { useForm } from "../App/Hooks/useForm";
const init = {
  Nombre: "",
};

const AccionesEstudiantes = ({ open, AbrirModal, CerrarModal, usuario }) => {
  const { startCreateStudent, EstudianteActivo, startActualizarEstudiante } =
    useSystemEstudiante();
  const [data, setdata] = useState(EstudianteActivo);
  console.log(data);
  console.log(usuario);
  const fecha = usuario?.FechaNacimeinto?.substring(0, 10);
  console.log(fecha);

  const [form] = Form.useForm();
  // const { Nombre, onInputChange, formState } = useForm(init);

  const onFinish = (values) => {
    console.log(values);
    console.log(values.FirstFecha.$d);
    const dia = values.FirstFecha.$D;
    const fecha2 = values.FirstFecha?.$d;
    const dia2 = fecha2 ? ("0" + fecha2.getDate()).slice(-2) : null; // Obtener el día con dos dígitos
    console.log("Día:", dia2);
    const year = values.FirstFecha.$y;

    const fecha = values.FirstFecha?.$d; // Acceder al objeto de fecha devuelto por el DatePicker
    const mes = fecha ? ("0" + (fecha.getMonth() + 1)).slice(-2) : null; // Obtener el mes (¡recuerda que los meses empiezan desde 0 en JavaScript!)
    console.log("Mes:", mes);
    let fechaNueva = `${year}-${mes}-${dia2}T00:00:00.000Z`;
    console.log(fechaNueva);
    startActualizarEstudiante(usuario._id, values, fechaNueva);
    // startCreateStudent(values, fechaNueva);
    CerrarModal();
    form.resetFields();
  };

  useEffect(() => {
    console.log(EstudianteActivo);
    if (EstudianteActivo) {
      form.setFieldsValue({
        FirstName: usuario?.Nombre,
        FirstApellido: usuario?.Apellido,
        FirstSexo: usuario?.Sexo,
        FirstEstadoe: usuario?.Estado,
        FirstFecha: dayjs(usuario.FechaNacimeinto),
      });
    }
  }, [usuario]);

  const items = [
    {
      key: "1",
      label: "Editar Estudiante",
      children: (
        <div className="formbox">
          <Form
            form={form}
            onFinish={onFinish}
            id="myForm"
            autoComplete="off"
            name="Form"
          >
            <div className="Inputs">
              <div className="Nombre">
                <Typography>Nombre</Typography>
                <Form.Item name="FirstName">
                  <Input className="input" />
                </Form.Item>
              </div>
              <div className="Nombre">
                <Typography>Apellido</Typography>
                <Form.Item name="FirstApellido">
                  <Input className="input" />
                </Form.Item>
              </div>
              <div className="Nombre">
                <Typography>Sexo</Typography>
                <Form.Item name="FirstSexo">
                  <Select
                    initialvalue=""
                    style={{ width: 120 }}
                    className="input"
                    options={[
                      { value: "Masculino", label: "Masculino" },
                      { value: "Femenino", label: "Femenino" },
                    ]}
                  />
                </Form.Item>
              </div>{" "}
              <div className="Nombre">
                <Typography>Fecha de Nacimiento</Typography>
                <Form.Item name="FirstFecha">
                  <DatePicker className="input" />
                </Form.Item>
              </div>{" "}
              <div className="Nombre">
                <Typography>Estado</Typography>
                <Form.Item name="FirstEstadoe">
                  <Select
                    initialvalue=""
                    style={{ width: 120 }}
                    className="input"
                    options={[
                      { value: "Inscrito", label: "Inscrito" },
                      { value: "Proceso", label: "Proceso" },
                      { value: "Retirado", label: "Retirado" },
                    ]}
                  />
                </Form.Item>
              </div>
            </div>
          </Form>
        </div>
      ),
    },
  ];

  return (
    <>
      <Modal
        open={open}
        title="Manejo de Estudiantes"
        onCancel={CerrarModal}
        className="modal accionesmodal"
        footer={[
          <Button key="back" onClick={CerrarModal} danger>
            Cancelar
          </Button>,
          <Button type="primary" form="myForm" htmlType="submit" key="submit">
            Crear
          </Button>,
        ]}
      >
        <Space className="Space Acciones">
          <div className="tabs-content">
            <Tabs className="Tabs" items={items} />
          </div>
        </Space>
      </Modal>
    </>
  );
};
export default AccionesEstudiantes;
