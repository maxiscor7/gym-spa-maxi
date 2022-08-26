import React from "react";
import './Clases.css';


import hiit from '../images/hiit.jpg';
import atletic from '../images/atletic.jpg';
import relax from '../images/relax.jpg';
import fight from '../images/fight.jpg';
import spin from '../images/spin.jpg';
import dance from '../images/dance.jpg';
import swim from '../images/swim.jpg'
import Logowolf from '../imagenes-eventos/logowolf.png';
import Insta from '../imagenes-eventos/insta.png';
import Github from '../imagenes-eventos/github.png';
import Linkedin from '../imagenes-eventos/linkedin.png';
import Designer from '../imagenes-eventos/Designer.png';

export default function Clases(){
    return(
        <div className="contenedor-clases">
            <div className="header-sedes">
                <h1>CLASES</h1>
                <h4>selecciona la disciplina que mas te guste para conocer sus horarios y profesores</h4>
            </div>
            <div className='contenedor-img-cla'>
                <img src={hiit} alt=''/>
                <div className="content-img-cla1">
                   <h1 className="clases-tit1">CROSSFIT</h1> 
                </div>
            </div>
            <div className='contenedor-img-cla'>
                <img src={atletic} alt=''/>
                <div className="content-img-cla2">
                   <h1 className="clases-tit1">ATHLETIC</h1> 
                </div>
            </div>
            <div className='contenedor-img-cla'>
                <img src={relax} alt=''/>
                <div className="content-img-cla3">
                   <h1 className="clases-tit1">RELAX</h1> 
                </div>
            </div>
            <div className='contenedor-img-cla'>
                <img src={fight} alt=''/>
                <div className="content-img-cla4">
                   <h1 className="clases-tit1">FIGHT</h1> 
                </div>
            </div>
            <div className='contenedor-img-cla'>
                <img src={spin} alt=''/>
                <div className="content-img-cla5">
                   <h1 className="clases-tit1">SPINNING</h1> 
                </div>
            </div>
            <div className='contenedor-img-cla'>
                <img src={dance} alt=''/>
                <div className="content-img-cla6">
                   <h1 className="clases-tit1">DANCE</h1> 
                </div>
            </div>
            <div className='contenedor-img-cla'>
                <img src={swim} alt=''/>
                <div className="content-img-cla7">
                   <h1 className="clases-tit1">SWIMMING</h1> 
                </div>
            </div>
            <div className='footer-cla'>
                <div className='parte-arriba-footer-cla'>
                    <img src={Logowolf} alt='' style={{ height: "50px" }} />
                    <h1 className='separador-swich-fot-cla'>|</h1>
                    <h3>0800-333-4334</h3>
                    <h1 className='separador-swich-fot-cla'>|</h1>
                    <h3>info@wolf.com.ar</h3>
                    <h1 className='separador-swich-fot-cla'>|</h1>
                    <h3><a href="https://www.linkedin.com/in/enrique-maximiliano-cornalba-1a2429184/" target="_blank" rel="noreferrer">Trabaja con nosotros</a></h3>
                    <h1 className='separador-swich-fot-cla'>|</h1>
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