import Marquee from 'react-fast-marquee';
import './Marquee.css'
function MarqueeComponent(){
  return (
    <Marquee >
      <div className='container_sponsonrs'>
      <a target='blank_'  href="https://www.instagram.com/bloomparana/"><img src="BloomNegro.png" alt="Sponsor 1"/></a>
      <a target='blank_' href="https://www.instagram.com/forrajeria.cardenal/"><img src="elcardenalNegro.png" alt="Sponsor 2"/></a>
      <a target='blank_' href=""><img src="gmdistribucionesNegro.png" alt="Sponsor 3" /></a>
      <a target='blank_' href="https://www.instagram.com/kinuan.masajes/"><img src="kinuanNegro.png" alt="Sponsor 3"/></a>
      <a target='blank_' href="https://www.instagram.com/inmobiliaria_milano/"><img src="MilanoNegro.png" alt="Sponsor 4" /></a>
      <a target='blank_' href="https://www.instagram.com/panchettos.pna/"><img src="PanchettosNegro.png" alt="Sponsor 5" /></a>
      </div>
    </Marquee>
  );
};

export default MarqueeComponent;
