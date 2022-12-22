import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import './style.css'
import Button from "../../components/ButtonUsuario";
import * as C from "../../components/Content/styles";
import apiRockets from "./../../services/apiRockets";
import api from '../../services/api';
import Input from "../../components/Input";
import { UserContext } from "../../contexts/UserContext";


function Rockets(props) {

    const [porcentagem_lucro, setPorcentagem_lucro] = useState('')
    const [data_lancamento, setData_lancamento] = useState('')
    const [nome, setNome] = useState('')
    const [motor, setMotor] = useState('')
    const [custo, setCusto] = useState('')
    const [status, setStatus] = useState('')

    const navigate = useNavigate();


    const [userData, setUserData] = useContext(UserContext)

    
    async function handleLancamentos(e) {
        e.preventDefault()
        try {
          const userData = await api.post('foguete', {
            porcentagem_lucro,
            data_lancamento,
          })
    
          const userInfo = userData.data
    
          setUserData(prevState => ({
            ...prevState,
            isLogged: true,
            porcentagem_lucro: userInfo.porcentagem_lucro,
            data_lancamento: userInfo.data_lancamento,
          }))
    
          navigate('/lancamentos')
    
    
        } catch (err) {
            if (!porcentagem_lucro | !data_lancamento) {
                alert("Preencha todos os campos");
                return;
            }
        }
      }

  
      const obterDadosFoguete = async () => {
  
          const dados = await fetch('https://api.spacexdata.com/v3/rockets');
          const converter = await dados.json();

          console.log(converter[0]);
          setNome(converter[0].rocket_name)
          setMotor(converter[0].engines.type)
          setCusto((converter[0].cost_per_launch).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))
          setStatus(converter[0].active)
    
         
      };
  
      useEffect(() => {
          obterDadosFoguete();
      }, [])

    return (

        <>
            <h1>{props.nome}, selecione o Lucro e Data de Lançamento</h1>
            <main className="cards">
                <section className="card">
                    <div className="icon">
                        {/* <img src={xx} /> */}
                    </div>
                    <span>{nome}</span>
                    <span>Tipo do Motor: {motor}</span>
                    <span>Custo do Lançamento: {custo}</span>
                    <span>Status: {status}</span>
                </section>
                <section className="dataLucro">
                    <C.Container>
                        <C.Content>
                            <Input
                                type="number"
                                placeholder="Informe a % de Lucro desejado"
                                value={porcentagem_lucro}
                                onChange={(e) => setPorcentagem_lucro(e.target.value)}
                            />
                            <Input
                                type="string"
                                placeholder="Selecione a Data de Lançamento (DD/MM/YYYY)"
                                value={data_lancamento}
                                onChange={(e) => setData_lancamento(e.target.value)}
                            />
                            <Button Text="REALIZAR LANÇAMENTO" onClick={handleLancamentos} />
                        </C.Content>
                    </C.Container>
                </section>
            </main>
        </>

    );
};

export default Rockets;
