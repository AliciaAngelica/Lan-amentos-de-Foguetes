import React from "react";
import * as C from "./styles";

const Button = ({ Text, onClick, Type, props = "button" }) => {
  return (
    <C.Button type={Type} onClick={onClick} props={props}>
      {Text}
    </C.Button>
  );
};

export default Button;
