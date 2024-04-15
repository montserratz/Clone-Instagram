



export default function Story (props) {
    return (
        <div className="story">
            <div className="imagem">

                <img src={props.src} alt={props.nome} />
            </div>
            <div className="usuario">
                <span id="texto">{props.nome}</span>
            </div>
        </div>
    );
}