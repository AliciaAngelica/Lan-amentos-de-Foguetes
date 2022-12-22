import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './style.css'
import Button from "../../components/ButtonSite";
import apiRockets from "./../../services/apiRockets";
import api from '../../services/api'



const Home = (props) => {

    const navigate = useNavigate();
    const [nome, setNome] = useState('');
    const [foguetes, setFoguetes] = useState([]);
    const [lancamentos, setLancamentos] = useState([]);


    const handleLancar = () => {

        navigate("/rocket");

    };


    const obterDadosFoguete = async () => {

        const dados = await fetch('https://api.spacexdata.com/v3/rockets');
        const converter = await dados.json();
        setFoguetes(converter);

    };

    const obterDadosLancamento = async () => {

        const dados = await fetch('https://api.spacexdata.com/v3/launches');
        const converter = await dados.json();
        setLancamentos(converter);

    };


    useEffect(() => {
        obterDadosFoguete();
        obterDadosLancamento();
    }, [])



    return (

        <>
            <main className="cards">
            <h1>Olá {props.nome}, selecione o lançamento</h1><br/>              
                {foguetes.map(f => (
                    <>
                        {lancamentos.map(l => (

                            <section className="card">
                                <div className="icon">
                                    <img src={f.mission_patch} />
                                </div>
                                <span>{f.rocket_name}</span>
                                <span className="espacamento">Nome da Missão: {l.mission_name}</span>
                                <span>Ano Lançamento: {l.launch_year}</span>
                                <div className="botao"><Button Text="LANÇAR FOGUETE" onClick={handleLancar} /></div>

                            </section>
                        ))}

                    </>
                ))}
            </main>
        </>
    );
};

export default Home;

