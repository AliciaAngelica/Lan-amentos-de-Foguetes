import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './style.css'
import Button from "../../components/ButtonSite";



const Launche = (props) => {

    const { data } = props.data;
    const { porcentagem } = (props.porcentagem / 100);
    const [foguetes, setFoguetes] = useState([]);
    const [lancamentos, setLancamentos] = useState([]);
    const [status, setStatus] = useState('');
    const [botao, setBotao]  = useState('');


    const date = new Date();
    const currentYear = (date.getFullYear()).toString();
    const today = (date.getDate()).toString();
    const currentMonth = (date.getMonth() + 1).toString();

    const dataAtual = (today + '-' + currentMonth + '-' + currentYear)



    //     if (data > dataAtual) {
    //         setStatus(true)
    
    //     } else {
    //         setStatus(false)
    //     }


    // console.log(status);


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
                <h1>Olá {props.nome}, selecione o lançamento</h1><br />
                {foguetes.map(f => (
                    <>
                        {lancamentos.map(l => (

                            <section className="card">
                                <div className="icon">
                                    <img src={f.mission_patch} />
                                </div>
                                <span>{f.rocket_name}</span>
                                <span>Tipo do Motor: {f.engines.type}</span>
                                <span>Faturamento Total: ({f.cost_per_launch} * {porcentagem})</span>
                                <span>Data do Lançamento: {props.data}</span>
                                {/* <div>({status} ? <div className="botaoNaoLancado"><Button Text="LANÇADO" /></div> : <div className="botaoNaoLancado"><Button Text="NÃO LANÇADO" /></div>)</div> */}
                            </section>
                        ))}

                    </>
                ))}
            </main>
        </>
    );
};


export default Launche;
