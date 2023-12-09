import React, { useState } from "react";
import {
  Button,
  DatePicker,
  Form,
  Input,
  Modal,
  Space,
  Typography,
} from "antd";
import { Forma } from "./Form";
//import { useForm } from "../App/Hooks/useForm";
const init = {
  Nombre: "",
};
const onFinish = (values) => {
  console.log(values);
  console.log(values.FirstFecha.$d);
  const dia = values.FirstFecha.$D;
  const year = values.FirstFecha.$y;

  const fecha = values.FirstFecha?.$d; // Acceder al objeto de fecha devuelto por el DatePicker
  const mes = fecha ? fecha.getMonth() + 1 : null; // Obtener el mes (¡recuerda que los meses empiezan desde 0 en JavaScript!)
  console.log("Mes:", mes);
  let fechaNueva = `${year}-${mes}-${dia}T00:00:00.000Z`;
  console.log(fechaNueva);
};
const AnadirEstudiante = () => {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  // const { Nombre, onInputChange, formState } = useForm(init);
  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    console.log(formState);
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal with customized footer
      </Button>

      <Modal
        open={open}
        title="Añadir Estudiante"
        onCancel={handleCancel}
        className="modal"
        footer={[
          <Button key="back" onClick={handleCancel}>
            Return
          </Button>,
          <Button type="primary" htmlType="submit" key="submit">
            Submit
          </Button>,
        ]}
      >
        <Space className="Space">
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
                  <Input className="input" />
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
                  <Input className="input" />
                </Form.Item>
              </div>
            </div>
            <Button htmlType="submit">Hola</Button>
          </Form>
        </Space>
        <Button htmlType="submit">Hola</Button>
      </Modal>
    </>
  );
};
export default AnadirEstudiante;
