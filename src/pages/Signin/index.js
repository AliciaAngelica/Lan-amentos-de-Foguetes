import React, { useState, useContext } from "react";
import Input from "../../components/Input";
import Button from "../../components/ButtonUsuario";
import * as C from "../../components/Content/styles";
import { Link, useNavigate } from "react-router-dom";
import api from '../../services/api'
import { UserContext } from '../../contexts/UserContext'


function Signin() {
  const [userData, setUserData] = useContext(UserContext)

  const [nome, setNome] = useState('')

  const navigate = useNavigate()

  async function loginHandler(e) {
    e.preventDefault()
    try {
      const userData = await api.post('session', {
        nome
      })

      const userInfo = userData.data

      setUserData(prevState => ({
        ...prevState,
        isLogged: true,
        nome: userInfo.nome,
        idade: userInfo.idade,
        _id: userInfo._id
      }))

      navigate('/validation')


    } catch (err) {
      alert('Usuário não cadastrado, cadastre-se!')
    }
  }


  return (

    <C.Container>
      <C.Content>
        <Input
          type="text"
          placeholder="Seu Nome"
          value={nome}
          onChange={e => setNome(e.target.value)}
        />
        <C.labelError></C.labelError>
        <Button Text="ENTRAR" onClick={loginHandler}/>
        <C.LabelSignup>
          <C.Strong><br />
            <Link to="/signup">Cadastre-se Aqui.</Link>
          </C.Strong>
        </C.LabelSignup>
      </C.Content>
    </C.Container>
  );
};

export default Signin;
