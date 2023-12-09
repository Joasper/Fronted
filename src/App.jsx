import React, { useState } from "react";
import { Layout } from "antd";
import { LogoApp } from "./Components/LogoApp";
import { MenuList } from "./Components/MenuList";
import { TemaApp } from "./Components/TemaApp";
import { GiHamburgerMenu } from "react-icons/gi";
import { Button, theme, Breadcrumb } from "antd";
import { useParams } from "react-router-dom";
const { Header, Content, Sider } = Layout;

const App = ({ children }) => {
  const { "*": parametro } = useParams();
  console.log(parametro);
  const [darkTheme, setdarkTheme] = useState(false);
  const [Colapsar, setColapsar] = useState(false);
  const CambiarTema = () => {
    setdarkTheme(!darkTheme);
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Sider
        className="Sider"
        theme={darkTheme ? "dark" : "light"}
        collapsed={Colapsar}
        width={300}
        collapsible
        trigger={null}
      >
        <LogoApp />
        <MenuList darkTheme={darkTheme} />
      </Sider>
      <Layout>
        <Header
          color="white"
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <div className="header">
            <div className="hamburguer">
              <GiHamburgerMenu
                color="black"
                style={{
                  cursor: "pointer",
                }}
                onClick={() => setColapsar(!Colapsar)}
              />
            </div>
            <div className="switch">
              {" "}
              <TemaApp darkTheme={darkTheme} CambiarTema={CambiarTema} />
            </div>
          </div>
        </Header>
        <Layout
          style={{
            padding: "0 24px 24px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>
              {parametro == "" ? "Inicio" : `${parametro}`}
            </Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;
