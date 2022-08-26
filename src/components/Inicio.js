import React from "react";
import './Inicio.css';
import bgImage from '../video/vidotr.mp4';
import gymsalon from '../images/gymsalon.jpg';
import clases from '../images/clases.jpg';
import wolf from '../images/wolf.jpg';
import Sedes from './Sedes';
import Clases from "./Clases";
import Logowolf from '../imagenes-eventos/logowolf.png';
import Insta from '../imagenes-eventos/insta.png';
import Github from '../imagenes-eventos/github.png';
import Linkedin from '../imagenes-eventos/linkedin.png';
import Designer from '../imagenes-eventos/Designer.png';
import {
    
    Route,
    Routes,
    NavLink
  } from 'react-router-dom'

export default function Inicio(){
    return(
        <div>
            <div className="contenedor-inicio">
                <video src={bgImage} autoPlay loop muted />
                <div className="content">
                    <h1>Gym Wolf</h1>
                    <h1>Entrenamos juntos</h1>
                </div>
            </div>
            <div className="contenedor-img-ini">
                <img src={gymsalon} alt=''/>
                <div className="content-img">
                    <h1>SEDES</h1>
                    <h3>Cuatro sedes especialmente diseñadas para mejorar tu rendimiento en cada ejercicio, actividad u objetivo que te propongas</h3>
                    <NavLink
                    className='boton-link'
                    to='/sedes'>Todas</NavLink>    
                    
                </div>
                    <div className="content-botones-sedes">
                        <NavLink className='boton-sede' to='/sedes'>Sanjusto</NavLink>
                        <NavLink className='boton-sede' to='/sedes'>Ramos mejia</NavLink> 
                        <NavLink className='boton-sede' to='/sedes'>Flores</NavLink> 
                        <NavLink className='boton-sede' to='/sedes'>Palermo</NavLink> 
                    </div>
            </div>

            <div className="contenedor-img2-ini">
                <img src={clases} alt=''/>
                <div className="content-img2">
                    <h1>CLASES</h1>
                    <h3>Nuestras clases de fitness grupales son especializadas para cada parte de tu cuerpo</h3>
                    <NavLink
                    className='boton-link'
                    to='/clases'>Todas</NavLink> 
                </div>
                <div className="content-botones-clases">
                        <NavLink className='boton-clases' to='/clases'>CROSSFIT</NavLink>
                        <NavLink className='boton-clases' to='/clases'>ATHLETIC</NavLink> 
                        <NavLink className='boton-clases' to='/clases'>RELAX</NavLink> 
                        <NavLink className='boton-clases' to='/clases'>FIGHT</NavLink>
                        <NavLink className='boton-clases' to='/clases'>SPINNING</NavLink> 
                        <NavLink className='boton-clases' to='/clases'>DANCE</NavLink> 
                        <NavLink className='boton-clases' to='/clases'>SWIMMING</NavLink>  
                </div>
            </div>

            <div className="contenedor-img3-ini">
            <img src={wolf} alt=''/>

            </div>
            <Routes>
              <Route path="/sedes" element={<Sedes />}></Route>
              <Route path="/clases" element={<Clases />}></Route>
            </Routes>
            <div className='footer-ini'>
                <div className='parte-arriba-footer-ini'>
                    <img src={Logowolf} alt='' style={{ height: "50px" }} />
                    <h1 className='separador-swich-fot-ini'>|</h1>
                    <h3>0800-333-4334</h3>
                    <h1 className='separador-swich-fot-ini'>|</h1>
                    <h3>info@wolf.com.ar</h3>
                    <h1 className='separador-swich-fot-ini'>|</h1>
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