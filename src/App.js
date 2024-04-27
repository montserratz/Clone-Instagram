import logo from './logo.svg';
import './App.css';
import Esquerda from './ConteudoLateralEsquerda';
// JSX 
import ConteudoCentral from './ConteudoCentral'
import ConteudoLateralDireita from './ConteudoLateralDireita';

function App() {
  return (
    <>
      <Esquerda />
      <ConteudoCentral/>
      <ConteudoLateralDireita/>
      
   
      
    </>
  );
}

export default App;
