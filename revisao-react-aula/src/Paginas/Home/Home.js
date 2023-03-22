import React, { useState } from "react";
import { turmas } from "../../assets/arrayTurmas";
import { Header } from "../../Componentes/Header/Header";
import { Cadastro } from "../Cadastro/Cadastro";
import {HomeStyle} from "./homeStyle" 

export function Home(props) {
  console.log( "home",props)
  const [ arrayTurmas, setArrayTurmas] = useState(turmas)
  const mostraTurma = () =>{
    setArrayTurmas(turmas)
  }
  return (
    <HomeStyle>
      <Header turma={props.turma}/>
      <h1>Home</h1>
      <button onClick={props.trocaNome}>senway</button>
      <Cadastro setUsuario={props.setUsuario}  />

      {arrayTurmas.map((turma)=>{
        console.log(turma)
        return <p key={turma.turma}> {turma.turma} </p>
      })}
      <button onClick={mostraTurma} >turmas</button>

    </HomeStyle>
  );
}

