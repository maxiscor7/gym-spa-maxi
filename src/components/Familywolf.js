import React from "react";
import './Familywolf.css';


import card1 from '../images/card1.png';
import card2 from '../images/card2.png';
import card3 from '../images/card3.png';
import comunidad1 from '../images-family/comunidad1.jpg';
import comunidad2 from '../images-family/comunidad2.jpg';
import comunidad4 from '../images-family/comunidad4.jpg';
import comunidad5 from '../images-family/comunidad5.jpg';
import comunidad7 from '../images-family/comunidad7.jpg';
import comunidad9 from '../images-family/comunidad9.jpg';
import comunidad12 from '../images-family/comunidad12.jpg';
import comunidad13 from '../images-family/comunidad13.jpg';
import comunidad14 from '../images-family/comunidad14.jpg';
import comunidad15 from '../images-family/comunidad15.jpg';
import comunidad17 from '../images-family/comunidad17.jpg';
import comunidad18 from '../images-family/comunidad18.jpg';
import comunidad19 from '../images-family/comunidad19.jpg';
import comunidad23 from '../images-family/comunidad23.jpg';
import comunidad24 from '../images-family/comunidad24.jpg';
import comunidad25 from '../images-family/comunidad25.jpg';
import Logowolf from '../imagenes-eventos/logowolf.png';
import Insta from '../imagenes-eventos/insta.png';
import Github from '../imagenes-eventos/github.png';
import Linkedin from '../imagenes-eventos/linkedin.png';
import Designer from '../imagenes-eventos/Designer.png';



export default function Familywolf() {
  return (
    <div>
      <div className="contenedor-familywolf">
        <div className="header-sedes">
          <h1>Familia WOLF</h1>
          <h4>Conoce a nuestros fundadores y toda la familia wolf</h4>
        </div>
        <div className="container__cards">

          <div className="card">
            <div className="cover2">
              <img src={card3} alt="" />
              <div className="img__back"></div>
            </div>
            <div className="description">
              <h2>CEO | Stephanie Bria</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, laboriosam.</p>
              <button><a href="https://www.linkedin.com/in/enrique-maximiliano-cornalba-1a2429184/" target="_blank" rel="noreferrer">Leer mas</a></button>
            </div>
          </div>
          <div className="card">
            <div className="cover">
              <img src={card1} alt="" />
              <div className="img__back"></div>
            </div>
            <div className="description">
              <h2>CSO | Carlos Herrera</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, laboriosam.</p>
              <button><a href="https://www.linkedin.com/in/enrique-maximiliano-cornalba-1a2429184/" target="_blank" rel="noreferrer">Leer mas</a></button>
            </div>
          </div>

          <div className="card">
            <div className="cover3">
              <img src={card2} alt="" />
              <div className="img__back"></div>
            </div>
            <div className="description">
              <h2>COO | Wesley Rooney</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, laboriosam.</p>
              <button><a href="https://www.linkedin.com/in/enrique-maximiliano-cornalba-1a2429184/" target="_blank" rel="noreferrer">Leer mas</a></button>
            </div>
          </div>

        </div>

        <div className="contenedor-fotos">
          <div className="cont-fam-text-fot">

            <div className="cont-fam-text">
              <h1>Veni a entrenar y disfrutar</h1>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
            <div className='cont-fotos'>
              <img src={comunidad1} alt="" />
              <img src={comunidad2} alt="" />
              <img src={comunidad4} alt="" />
              <img src={comunidad5} alt="" />
              <img src={comunidad7} alt="" />
              <img src={comunidad9} alt="" />
              <img src={comunidad12} alt="" />
              <img src={comunidad13} alt="" />
              <img src={comunidad14} alt="" />
              <img src={comunidad15} alt="" />
              <img src={comunidad17} alt="" />
              <img src={comunidad18} alt="" />
              <img src={comunidad19} alt="" />
              <img src={comunidad23} alt="" />
              <img src={comunidad24} alt="" />
              <img src={comunidad25} alt="" />

            </div>
          </div>
        </div>

      </div>
      <div className='footer'>
            <div className='parte-arriba'>
                <img src={Logowolf} alt='' style={{height: "50px"}}/>
                <h1 className='separador-swich'>|</h1>
                <h3>0800-333-4334</h3>
                <h1 className='separador-swich'>|</h1>
                <h3>info@wolf.com.ar</h3>
                <h1 className='separador-swich'>|</h1>
                <h3><a href="https://www.linkedin.com/in/enrique-maximiliano-cornalba-1a2429184/" target="_blank" rel="noreferrer">Trabaja con nosotros</a></h3>
                <h1 className='separador-swich'>|</h1>
                <div className='iconos-fot'>
                    <a href='https://www.instagram.com/cornalbamaxi/' target="_blank" rel="noreferrer">
                        <img src={Insta} alt='' style={{height: "25px"}}/>
                    </a>
                    <a href="https://www.linkedin.com/in/enrique-maximiliano-cornalba-1a2429184/" target="_blank" rel="noreferrer">
                        <img src={Linkedin} alt='' style={{height: "30px"}}/>
                    </a>
                    <a href='https://github.com/maxiscor7' target="_blank" rel="noreferrer">
                    <img src={Github} alt='' style={{height: "35px"}}/>                     
                    </a>
                </div>
            </div>
            <div className='parte-abajo'>
                <a href="https://www.linkedin.com/in/enrique-maximiliano-cornalba-1a2429184/" target="_blank" rel="noreferrer">
                    <img src={Designer} alt='' style={{height: "35px"}}/>                     
                </a>
            </div>
            
        </div>
    </div>
  )
}
//<input type="button" value="Leer Más"></input> remplasado por button