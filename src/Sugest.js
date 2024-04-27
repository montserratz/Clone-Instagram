
export default function Sugest (props) {
    return (
        <div className="sugest">
            <div className="imagem">

                <img src={props.src} alt={props.nome} />
            </div>
            <div className="usuario">
                <span id="texto">{props.nome}</span>
              
                
            </div>
          
            <div>
                <span className="seguir">Seguir</span>
                </div>

        </div>
    );
}