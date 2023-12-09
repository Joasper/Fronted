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

export const Forma = () => {
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
  const onSubmitt = (values) => {
    console.log(values);
  };
  return (
    <div>
      <Space className="Space">
        <Form form={form} onFinish={onSubmit} id="myForm" autoComplete="off">
          <div className="Inputs">
            <div className="Nombre">
              <Form.Item name="Nombre">
                <Typography>Nombre</Typography>
                <Input
                  size="large"
                  placeholder="Nombre"
                  className="input"
                  type="text"
                  label="Username"
                />
              </Form.Item>
            </div>
            <div className="Nombre">
              <Typography>Apellido</Typography>
              <Input size="large" placeholder="Apellido" className="input" />
            </div>
            <div className="Nombre">
              <Typography>Sexo</Typography>
              <Input size="large" placeholder="Sexo" className="input" />
            </div>{" "}
            <div className="Nombre">
              <Typography>Fecha de Nacimiento</Typography>
              <DatePicker className="input" />
            </div>{" "}
            <div className="Nombre">
              <Typography>Estado</Typography>
              <Input size="large" placeholder="Estado" className="input" />
            </div>
          </div>
          <Button htmlType="submit">Hola</Button>
        </Form>
      </Space>
    </div>
  );
};
