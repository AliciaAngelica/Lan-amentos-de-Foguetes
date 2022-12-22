import React, { useState, useEffect } from "react";
import Button from "../../components/ButtonUsuario";
import * as C from "../../components/Content/styles";
import { Link, useNavigate } from "react-router-dom";
import api from '../../services/api'


const ValidationAge = (props) => {

  const [nome, setNome] = useState('')
  

  useEffect(() => {
    api.get("/user").then((response) => {
        setNome(response.data);

    });
}, []);

  const navigate = useNavigate();

  const handleHome = () => {

    navigate("/home");

  };


  return (

    <C.Container>
      <C.Content>
      <label>Sua idade é:</label>
      <h1>{props.idade}</h1>    
        <Button Text="CONFIRMAR" onClick={handleHome} />
        <C.LabelSignup>
          <C.Strong><br/>
            <Link to="/signin">Cancelar</Link>
          </C.Strong>
        </C.LabelSignup>
      </C.Content>
    </C.Container>
  );
};

export default ValidationAge;
