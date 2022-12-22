import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/ButtonUsuario";
import * as C from "../../components/Content/styles";
import './style.css'
import { Link, useNavigate } from "react-router-dom";
import api from '../../services/api'

function Signup() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [error, setError] = useState("");


  
  const navigate = useNavigate()

  async function handleSignup(e) {

    e.preventDefault()
    try {
      await api.post('user', {
        nome,
        idade,
      })

      
      alert("Usuário cadatrado com sucesso!");
      navigate('/')
      setNome('')
      setIdade('')
  
    } catch (err) {
      if (!nome | !idade) {
        setError("Preencha todos os campos");
        return;
      }
  }

  }


  return (
    <C.Container>
      <C.Content>
        <Input
          type="text"
          placeholder="Seu Nome"
          value={nome}
          onChange={(e) => [setNome(e.target.value), setError("")]}
        />
        <Input
          type="text"
          placeholder="Sua idade"
          value={idade}
          onChange={(e) => [setIdade(e.target.value), setError("")]}
        />
        <C.labelError>{error}</C.labelError>
        <Button Text="CADASTRAR" onClick={handleSignup} />
        <C.LabelSignin>
          Já tem uma conta?
          <C.Strong>
            <Link to="/">&nbsp;Entre</Link>
          </C.Strong>
        </C.LabelSignin>
      </C.Content>
    </C.Container>
  );
};

export default Signup;
