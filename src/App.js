import logo from './logo.svg';
import './App.css';
import Esquerda from './ConteudoLateralEsquerda';
// JSX 
import ConteudoCentral from './ConteudoCentral'

function App() {
  return (
    <>
      <Esquerda />
      <ConteudoCentral/>

      
      
      <div className='conteudoLateralDireita'>
        {/* 
          Login
          Sugestões de amigos
          Sugestões de contas
          Sugestões de hashtags
          Sugestões de locais
          Sugestões de posts patrocinados
          Link legais
        */}
      </div>
    </>
  );
}

export default App;
