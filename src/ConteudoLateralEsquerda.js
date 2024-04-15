import logo from './imagens/images.png';
import Menu from './TextMenu';
import './ConteudoLateralEsquerda.css';
import { GoHomeFill } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { TbMessageCircle2 } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa6";
import { BiMessageSquareAdd } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";


export default function ConteudoLateralEsquerda() {
    return (
        <div className='conteudoLateralEsquerda'>
            <img src={logo} alt='Logo' />
           
            <ul>
                <Menu 
                nome="Home" 
                classes="text-menu"    
                icone={<GoHomeFill 
                    style={{
                        fontSize: '30px',
                        color:'black',
                        top: '20px',
                        right: '20px',

                    }}
                />} 
                icone2={<IoIosArrowDown 
                    style={{
                        fontSize: '30px',
                        color:'black',
                        top: '20px',
                        right: '20px',

                    }}
                />}
                />
                <Menu 
                nome="Buscar" 
                classes="text-menu"    
                icone ={<IoSearch 
                    style={{
                        fontSize: '30px',
                        color:'black',
                        top: '20px',
                        right: '20px',

                    }}
            
                
                />} />

                <Menu 
                nome="Mensagens" 
                classes="text-menu"    
                icone ={<TbMessageCircle2
                    style={{
                        fontSize: '30px',
                        color:'black',
                        top: '20px',
                        right: '20px',

                    }}
                    
                    
                    />}  
                
                
                />

                <Menu 
                nome="Notificações" 
                classes="text-menu"    
                icone ={<FaRegHeart 
                    style={{
                        fontSize: '30px',
                        color:'black',
                        top: '20px',
                        right: '20px',

                    }}
                
                />}
                
                />
                <Menu 
                nome="Publicar" 
                classes="text-menu"    
                icone ={<BiMessageSquareAdd 
                    style={{
                        fontSize: '30px',
                        color:'black',
                        top: '20px',
                        right: '20px',

                    }}
                
                
                />}
                
                
                />

            <Menu 
            className="Profile"
                nome="Perfil" 
                 
                icone ={<CgProfile 
                    style={{
                        fontSize: '30px',
                        color:'black',
                        top: '20px',
                        right: '20px',

                    }}
                
                
                />}
                
                
                />


            </ul>
        </div>
    )
}

// export default ConteudoLateralEsquerda;