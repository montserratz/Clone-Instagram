
var xicara = {
    nome: 'Xícara',
    preco: 10.00
}

export default function TextMenu(props) {
  return (
    
    <li className={props.className} >
        {props.icone}
        {props.nome}
        {props.icone2}
    </li>
   
  );
}