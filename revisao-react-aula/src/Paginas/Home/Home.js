import React from "react";
import { Header } from "../../Componentes/Header/Header";
import {HomeStyle} from "./homeStyle"

export function Home(props) {
  console.log(props)
  return (
    <HomeStyle>
      <Header turma={props.turma}/>
      <h1>Home</h1>
    </HomeStyle>
  );
}
