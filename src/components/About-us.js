import React from "react";
import './About-us.css';


import Logowolf from '../imagenes-eventos/logowolf.png';
import Insta from '../imagenes-eventos/insta.png';
import Github from '../imagenes-eventos/github.png';
import Linkedin from '../imagenes-eventos/linkedin.png';
import Designer from '../imagenes-eventos/Designer.png';

export default function Nosotros() {
    return (
        <div>
            <div className="contenedor-nosotros">
                <div className="header-sedes">
                    <h1>Eventos</h1>
                    <h4>Enterate de todos los eventos en los cuales participamos y obtiene importantes descuentos</h4>
                </div>
                <div className='contenedor-img-eve'>

                    <div className="content-img-eve-text">
                        <h4 className="eve-tit1">concierto a beneficio</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, laboriosam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, laboriosam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, laboriosam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, laboriosam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, laboriosam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, laboriosam.</p>
                        <p className="show-or-not">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, laboriosam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, laboriosam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, laboriosam.</p>
                    </div>
                </div>
                <div className='contenedor-img-eve2'>

                    <div className="content-img-eve-text2">
                        <h4 className="eve-tit2">CIRCUITO 10k</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, laboriosam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, laboriosam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, laboriosam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, laboriosam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, laboriosam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, laboriosam.</p>
                        <p className="show-or-not">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, laboriosam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, laboriosam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, laboriosam.</p>
                    </div>
                </div>
                <div className='contenedor-img-eve3'>

                    <div className="content-img-eve-text3">
                        <h4 className="eve-tit3">AYUDANDO A NUESTRO BARRIO</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, laboriosam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, laboriosam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, laboriosam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, laboriosam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, laboriosam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, laboriosam.</p>
                        <p className="show-or-not">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, laboriosam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, laboriosam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, laboriosam.</p>
                    </div>
                </div>

            </div>
            <div className='footer-eve'>
                <div className='parte-arriba-footer-eve'>
                    <img src={Logowolf} alt='' style={{ height: "50px" }} />
                    <h1 className='separador-swich-fot-eve'>|</h1>
                    <h3>0800-333-4334</h3>
                    <h1 className='separador-swich-fot-eve'>|</h1>
                    <h3>info@wolf.com.ar</h3>
                    <h1 className='separador-swich-fot-eve'>|</h1>
                    <h3><a href="https://www.linkedin.com/in/enrique-maximiliano-cornalba-1a2429184/" target="_blank" rel="noreferrer">Trabaja con nosotros</a></h3>
                    <h1 className='separador-swich-fot-eve'>|</h1>
                    <div className='iconos-fot'>
                        <a href='https://www.instagram.com/cornalbamaxi/' target="_blank" rel="noreferrer">
                            <img src={Insta} alt='' style={{ height: "25px" }} />
                        </a>
                        <a href="https://www.linkedin.com/in/enrique-maximiliano-cornalba-1a2429184/" target="_blank" rel="noreferrer">
                            <img src={Linkedin} alt='' style={{ height: "30px" }} />
                        </a>
                        <a href='https://github.com/maxiscor7' target="_blank" rel="noreferrer">
                            <img src={Github} alt='' style={{ height: "35px" }} />
                        </a>
                    </div>
                </div>
                <div className='parte-abajo'>
                    <a href="https://www.linkedin.com/in/enrique-maximiliano-cornalba-1a2429184/" target="_blank" rel="noreferrer">
                        <img src={Designer} alt='' style={{ height: "35px" }} />
                    </a>
                </div>

            </div>
        </div>
    )
}