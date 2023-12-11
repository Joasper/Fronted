import React, { useEffect, useState } from "react";
import {
  AutoComplete,
  Button,
  DatePicker,
  Form,
  Input,
  Modal,
  Select,
  Space,
  Table,
  Tabs,
  Typography,
} from "antd";
import dayjs from "dayjs";
import { Forma } from "./Form";
import { useSystemEstudiante } from "../App/Hooks/useSystemEstudiantes";
import { useSystemTutores } from "../App/Hooks/useSystemTutores";
import { useDispatch } from "react-redux";
import {
  AgregarEstudiantes,
  EliminarEstudiantes,
} from "../App/Store/Tutores/TutorSlice";
import { MdDeleteOutline } from "react-icons/md";
//import { useForm } from "../App/Hooks/useForm";
const init = {
  Nombre: "",
};

const AccionesTutores = ({ open, AbrirModal, CerrarModal, user }) => {
  const [value, setvalue] = useState("");
  const [Buscar, setBuscar] = useState(false);
  //const [EstudiantesAgregados, setEstudiantesAgregados] = useState([]);
  const { startCreateStudent, Estudiantes, startGetEstudent } =
    useSystemEstudiante();
  const { EstudiantesAgregador, CrearTutorEstudiante, startActualizarTutor } =
    useSystemTutores();
  const dispatch = useDispatch();
  useEffect(() => {
    startGetEstudent();
  }, []);

  const EstudiantesMapeados = Estudiantes?.estudiante?.map(
    (estudiante, index) => ({
      key: index.toString(),
      label: `${estudiante.Matricula} ${estudiante.Nombre}`,
      value: estudiante.Matricula,
    })
  );
  console.log(EstudiantesMapeados);

  const [form] = Form.useForm();
  // const { Nombre, onInputChange, formState } = useForm(init);
  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const onFinish = (values) => {
    console.log(values);
    startActualizarTutor(values, user._id);
    // CrearTutorEstudiante(values);

    //startCreateStudent(values, fechaNueva);
    //  setOpen(!open);
    // form.resetFields();
  };
  const onInputChange = ({ target }) => {
    console.log(target.value);
    setvalue(target.value);
  };
  let contenido;
  const BuscarEstudiante = () => {
    const buscar = Estudiantes.estudiante.find((e) => e.Matricula == value);
    setBuscar(buscar);
    console.log({ Buscar });
  };
  const AgregarTabla = () => {
    const buscar = Estudiantes.estudiante.find((e) => e.Matricula == value);
    if (buscar == undefined) return;
    setBuscar(buscar);
    dispatch(AgregarEstudiantes(buscar));
  };

  const ColumnsStudents = [
    {
      key: "Matricula",
      title: "MATRICULA",
      dataIndex: "Matricula",
    },
    {
      key: "Estudiante",
      title: "NOMBRE",
      dataIndex: "Nombre",
    },
    {
      key: "Apellido",
      title: "APELLIDO",
      dataIndex: "Apellido",
    },
    {
      key: "Acciones",
      title: "ACCIONES",
      render: (text, payload) => {
        return (
          <MdDeleteOutline
            className="btnDelete"
            onClick={() => EliminarEstudianteAgregado(text)}
          />
        );
      },
    },
  ];

  const EliminarEstudianteAgregado = (data) => {
    dispatch(EliminarEstudiantes(data));
    console.log({ data });
  };

  useEffect(() => {
    if (Buscar) {
      form.setFieldsValue({
        FirstNameEstudiante: Buscar.Nombre,
        FirstApellidoEstudiante: Buscar.Apellido,
        FirstSexoEstudiante: Buscar.Sexo,
        FirstFechaEstudiante: dayjs(Buscar.FechaNacimeinto),
        FirstEstadoeEstudiante: Buscar.Estado,
      });
    }
  }, [Buscar]);

  useEffect(() => {
    if (user) {
      form.setFieldsValue({
        FirstCedula: user.Cedula,
        FirstName: user.Nombre,
        FirstApellido: user.Apellido,
        FirstCorreo:
          user.Correo === undefined || user.Correo === null ? "" : user.Correo,
        FirstTelefono: user.Telefono,
        FirstEstado: user.Activo === true ? "Activo" : "Inactivo",
      });
    }
  }, [user]);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Evita que se envíe el formulario al presionar Enter
    }
  };

  const items = [
    {
      key: "1",
      label: "Agregar Tutor",
      children: (
        <div className="formtab">
          <Space className="Space spacetutor">
            <Form
              form={form}
              onFinish={onFinish}
              id="myFormm"
              autoComplete="off"
              name="Form"
            >
              <div className="Inputs">
                <div className="Nombre">
                  <Typography>Cedula</Typography>
                  <Form.Item name="FirstCedula">
                    <Input className="input" />
                  </Form.Item>
                </div>
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
                  <Typography>Correo</Typography>
                  <Form.Item name="FirstCorreo">
                    <Input className="input" />
                  </Form.Item>
                </div>
                <div className="Nombre">
                  <Typography>Telefono</Typography>
                  <Form.Item name="FirstTelefono">
                    <Input className="input" />
                  </Form.Item>
                </div>
                <div className="Nombre">
                  <Typography>Estado</Typography>
                  <Form.Item name="FirstEstado">
                    <Select
                      className="input"
                      options={[
                        { value: "Activo", label: "Activo" },
                        { value: "Inactivo", label: "Inactivo" },
                      ]}
                    />
                  </Form.Item>
                </div>
              </div>
            </Form>
          </Space>
        </div>
      ),
    },
    {
      key: "2",
      label: "Asignar Estudiante",
      children: (
        //<div className="">
        <Space
          className={`Space ${
            Buscar ? "Space Space-Item2" : "Space-heiht"
          } Modelado`}
        >
          <Form
            form={form}
            onFinish={onFinish}
            id="myFormm"
            autoComplete="off"
            name="Form"
          >
            <div className="Inputs">
              <div className="Nombre">
                <Typography>Matricula del Estudiante</Typography>
                <Form.Item name="FirstMatriculaEstudiante">
                  <Input
                    style={{ width: 120 }}
                    className="input"
                    name="Matricula"
                    onChange={onInputChange}
                    onPressEnter={handleKeyPress}
                  />
                  <Button
                    onClick={BuscarEstudiante}
                    size="large"
                    type="primary"
                    style={{
                      position: "relative",
                      left: "20px",
                    }}
                  >
                    Buscar
                  </Button>
                </Form.Item>
              </div>
              {Buscar ? (
                <Form
                  form={form}
                  onFinish={onFinish}
                  id="myFormm"
                  autoComplete="off"
                  name="Form"
                >
                  <div className="Inputs">
                    <div className="Nombre">
                      <Typography>Nombre</Typography>
                      <Form.Item name="FirstNameEstudiante">
                        <Input
                          className="input"
                          disabled
                          style={{
                            color: "black",
                            fontWeight: "bold",
                          }}
                        />
                      </Form.Item>
                    </div>
                    <div className="Nombre">
                      <Typography>Apellido</Typography>
                      <Form.Item name="FirstApellidoEstudiante">
                        <Input
                          className="input"
                          style={{
                            color: "black",
                            fontWeight: "bold",
                          }}
                          disabled
                        />
                      </Form.Item>
                    </div>
                    <div className="Nombre">
                      <Typography>Sexo</Typography>
                      <Form.Item name="FirstSexoEstudiante">
                        <Select
                          initialvalue=""
                          className="input selectbtn"
                          options={[
                            { value: "Masculino", label: "Masculino" },
                            { value: "Femenino", label: "Femenino" },
                          ]}
                          style={{
                            color: "black",
                            fontWeight: "bold",
                          }}
                          disabled
                        />
                      </Form.Item>
                    </div>{" "}
                    <div className="Nombre">
                      <Typography>Fecha de Nacimiento</Typography>
                      <Form.Item name="FirstFechaEstudiante">
                        <DatePicker
                          className="input"
                          style={{
                            color: "black",
                            fontWeight: "bold",
                          }}
                          disabled
                        />
                      </Form.Item>
                    </div>{" "}
                    <div className="Nombre">
                      <Typography>Estado</Typography>
                      <Form.Item name="FirstEstadoeEstudiante">
                        <Select
                          initialvalue=""
                          style={{
                            color: "black",
                            fontWeight: "bold",
                          }}
                          className="input"
                          options={[
                            { value: "Inscrito", label: "Inscrito" },
                            { value: "Proceso", label: "Proceso" },
                            { value: "Retirado", label: "Retirado" },
                          ]}
                          disabled
                        />
                      </Form.Item>
                    </div>
                    <div className="botonAgregar">
                      <Button
                        type="primary"
                        size="large"
                        onClick={AgregarTabla}
                      >
                        Agregar
                      </Button>
                    </div>
                  </div>
                </Form>
              ) : (
                ""
              )}
            </div>
          </Form>
          <div className={`${Buscar ? "tableTrue" : "tableStudent"}`}>
            <Space
              className={`${
                EstudiantesAgregador.length === 1 ? "space-table" : ""
              }`}
            >
              <Table
                columns={ColumnsStudents}
                dataSource={EstudiantesAgregador || []}
                pagination={false}
              />
            </Space>
          </div>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Modal
        open={open}
        title="Acciones TUtores"
        className="modal tutores-modal"
        footer={[
          <Button key="back" onClick={CerrarModal} danger>
            Cancelar
          </Button>,
          <Button type="primary" form="myFormm" htmlType="submit" key="submit">
            Crear
          </Button>,
        ]}
      >
        <div className="tabs-content">
          <Tabs className="Tabs" items={items} />
        </div>
      </Modal>
    </>
  );
};
export default AccionesTutores;
