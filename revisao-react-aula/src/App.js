import { Home } from "./Paginas/Home/Home";
import { createGlobalStyle, GlobalStyleComponent } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{margin: 0;
padding: 0;
box-sizing: border-box;}
`;

function App() {
  let turma = "conway"
  return (
    <>
    <GlobalStyle/>
      <Home turma={turma} />
      
    </>
  );
}

export default App;
