
import './Stories.css'
import Story from './Story';

const listaStories = [
    {
      nome: 'Mazinha',
      url: 'https://media-gru2-2.cdn.whatsapp.net/v/t61.24694-24/397843305_366006155807957_8607619915271261091_n.jpg?ccb=11-4&oh=01_ASBwczOeUgFGi5zsgqQN-3W5e0Nx_QcFJ2tW5AdL4Z5Uzw&oe=66267661&_nc_sid=e6ed6c&_nc_cat=107'
     
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
        nome: 'Billie',
        url: 'https://i.pinimg.com/originals/b1/68/d8/b168d83208b00d003f3d227b5c7f7e70.jpg'
    },
    {
        nome: 'Ariana',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1M4-aasQuLVBALi9dMFZPTCh_aO1bEoI3koR6VAlffw&s'
      },
    {
        nome: 'Tyler',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAFXNqWCsn_ZZ56svWFPBinN0g69zyG6NDtWQuowJjMg&s'
    },
    {
        nome: 'Beyoncé',
        url: 'https://charts-static.billboard.com/img/2002/06/beyonce-0na-344x344.jpg'
    },
    {
        nome: 'Melanie',
        url: 'https://i.scdn.co/image/ab6761610000e5eb2d9f656f3f15165cd5cf8e5a'
    },
    {
        nome: 'Rihanna',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8R3vW7YKxpCsYBY1BIz2SikM9mTevZ_JlKOAvsl01yQ&s'
    },
    {
        nome: 'Clairo',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5IrNyegjkg9SslGxic4TgIwfa_sBzN8QNg4MBufVqIQ&s'
    },
    
  ]

export default function Stories () {
    return (
        <div className='stories'>
           {listaStories.map((item) =>   <Story nome={item.nome} src={item.url}/>)}
          
          
         
        </div>
    );
}
