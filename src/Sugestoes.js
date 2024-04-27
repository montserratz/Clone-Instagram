import './Sugestoes.css'
import Sugest from './Sugest.js'



const listaSugestoes = [
    {
      nome: 'Mazinha',
      url: 'https://media-gru2-2.cdn.whatsapp.net/v/t61.24694-24/397843305_366006155807957_8607619915271261091_n.jpg?ccb=11-4&oh=01_Q5AaIOF28lKOAIGAhjmkRjk1hR4r76nwO7E8eitnYqlVSsEA&oe=663923A1&_nc_sid=e6ed6c&_nc_cat=107'
    },
    {
      nome: 'Gabriel',
      url: 'https://avatars.githubusercontent.com/u/33496735?v=4'
    },
    {
        nome: 'Kendrick',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-NVtwoHh3y5JehuKN21vvdZnst0f53K91zKFAQ2dZXQ&s'
    
    },
    {
      nome: 'Zendaya',
      url: 'https://hips.hearstapps.com/hmg-prod/images/zendaya-arrives-at-the-variety-power-of-young-hollywood-at-tao-hollywood-on-august-8-2017-in-los-angeles-california-photo-by-steve-granitzwireimage_square.jpg'
    },
    {
        nome: 'Billie    ',
        url: 'https://i.pinimg.com/originals/b1/68/d8/b168d83208b00d003f3d227b5c7f7e70.jpg'
    }
]

export default function Sugestoes () {
    return (
        
        <div className='sugestoes'>
            <span>Sugestões para você:</span> 
           {listaSugestoes.map((item) =>   <Sugest nome={item.nome} src={item.url}/>)}
           <p className='Sobres'>     About
    Help
    Press
    API
    Jobs
    Privacy
    Terms
    Locations
    Language
    Meta Verified
    

© 2024 Instagram from Meta</p>
           </div>
    );
}
