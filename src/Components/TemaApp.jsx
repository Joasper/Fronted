import React from "react";
import { Switch } from "antd";
import { Button } from "antd";

export const TemaApp = ({ darkTheme, CambiarTema }) => {
  return (
    <div className="thema">
      <Switch onClick={CambiarTema} size="large" value={darkTheme} />
    </div>
  );
};
