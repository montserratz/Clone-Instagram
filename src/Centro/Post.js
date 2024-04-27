import './Post.css'
import { FaRegHeart } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { GoPaperAirplane } from "react-icons/go";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";

export default function Post(props) {
    return (
       
        <div className='Postotal'>
        <div className="card post">
            <div className="card-header">
                <img src={props.imgProf}/>
                <p className='TituloPost'>{props.title}</p>
               <div className='Reti'><IoEllipsisHorizontalSharp style={{
                fontSize: '20px',
                color:'black',
                top: '20px',
                right: '20px',

            }} /></div> 
            </div>


            <div className="card-body">
                <img src={props.imgSrc} />
                <p>
                    <FaRegHeart
            style={{
                fontSize: '20px',
                color:'black',
                top: '20px',
                right: '20px',

            }}
            />

            <FiMessageCircle
            style={{
                fontSize: '20px',
                color:'black',
                top: '20px',
                right: '20px',

            }}

/>
            <GoPaperAirplane
            style={{
                fontSize: '20px',
                color:'black',
                top: '20px',
                right: '20px',

            }}
            />
            </p>
           <h4 className='Curtidas'>258.400 Likes</h4>
            <div className='Bio'>
                <p className='Nome'>{props.title}</p>
                <p className='Descricao'>{props.body}</p>
                </div>
            </div>
    
            <div className="card-footer">
                
            </div>
        </div>

        </div>
        
    )
}