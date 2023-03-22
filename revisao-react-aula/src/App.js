import { useState } from "react";
import { createGlobalStyle } from "styled-components";
import { Home } from "./Paginas/Home/Home";
import { Login } from "./Paginas/Login/Login"


const GlobalStyle = createGlobalStyle`
*{margin: 0;
padding: 0;
box-sizing: border-box;}
color: white;

`;

function App() {
  const [turma, setTurma] = useState("conway")
  const [usuario, setUsuario] = useState({})
  const [troca , setTroca] = useState("home")
  console.log(useState())

  function trocaNome(){
    setTurma("senway")
  }

  function trocaTela(){
    if(troca === "home"){
      setTroca("login")
    }else{
      setTroca("home")
    }
  }

  return (
    <>
    <GlobalStyle/>
    <button  onClick={trocaTela } >trocar tela </button>
      {troca === "home" ? <Home 
      turma={turma} 
      trocaNome={trocaNome} 
      setTurma={setTurma}
      setUsuario={setUsuario}

      /> :
      <Login
      turma={turma} 
      trocaNome={trocaNome} 
      setTurma={setTurma}
      setUsuario={setUsuario}/>}
    </>
  );
}

export default App;
