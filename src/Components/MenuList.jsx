import React from "react";
import { Menu } from "antd";
import { MdDashboard } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";
import { MdOutlineEmojiPeople } from "react-icons/md";

import { Link } from "react-router-dom";

export const MenuList = ({ darkTheme }) => {
  return (
    <Menu theme={darkTheme ? "dark" : "light"} mode="inline" className="menu">
      <Menu.Item key={"Inicio"} icon={<MdDashboard size={"30px"} />}>
        <Link to={"/"}>Inicio</Link>
      </Menu.Item>
      <Menu.Item key={"Estudiantes"} icon={<PiStudentBold size={"30px"} />}>
        <Link to={"/Estudiante"}>Estudiantes</Link>
      </Menu.Item>
      <Menu.Item key={"Tutores"} icon={<MdOutlineEmojiPeople size={"30px"} />}>
        <Link to={"/Tutores"}>Tutores</Link>
      </Menu.Item>
      <Menu.Item key={"Configuracion"} icon={<MdDashboard size={"30px"} />}>
        Inicio
      </Menu.Item>
    </Menu>
  );
};
