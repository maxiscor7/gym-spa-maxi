import React from "react";
import './Sedes.css';


import gymsalon from '../images/gymsalon.jpg';
import gymsalon2 from '../images/gymsalon2.jpg'
import gymsalon4 from '../images/gymsalon4.jpg'
import swim from '../images/swim.jpg'
import Logowolf from '../imagenes-eventos/logowolf.png';
import Insta from '../imagenes-eventos/insta.png';
import Github from '../imagenes-eventos/github.png';
import Linkedin from '../imagenes-eventos/linkedin.png';
import Designer from '../imagenes-eventos/Designer.png';



export default function Sedes() {
    return (
        <div className="contenedor-sedes">
            <div className="header-sedes">
                <h1>Sedes</h1>
                <h4>Cuatro sedes especialmente diseñadas para mejorar tu rendimiento en cada ejercicio, actividad u objetivo que te propongas</h4>
            </div>
            <div className="contenedor-divs">
                <div className="cont-div-1">

                <img className="cuadro-img cuad1" src={gymsalon} alt='' />

                    <div className="cuadro-dialogo cuad2">
                        <h3>RAMOS MEJIA</h3>
                        <p>Av. de Mayo 723 / Ramos Mejía
                            Lunes a Viernes 7 a 22hs / Sábado 9 a 19hs</p>
                        <h4>AMENITIES Y SERVICIOS</h4>
                        <p>Gimnasio • Salón Cycle • Salón Aero • Yoga Studio • Salón Functional Training • Performance Zone • FightClub • Sauna & Hidromasaje</p>
                        <p>Heladeras con refrigerios •
                            Totems para cargar la batería de los celulares •
                            Livings de relax •
                            Lockers •
                            Servicio de toallas •
                            Toallitas individuales para clases de SportCycle</p>
                    </div>
                </div>

                <div className="cont-div-2">

                    <div className="cuadro-dialogo cuad3">
                        <h3>PALERMO</h3>
                        <p>Cabrera 5305 / Palermo
                            Lunes a Viernes 7 a 22hs / Sábado 9 a 19hs</p>
                        <h4>AMENITIES Y SERVICIOS</h4>
                        <p>Gimnasio • Salón Cycle • Salón Aero • Yoga Studio • Salón Functional Training • Performance Zone • FightClub • Sauna & Hidromasaje</p>
                        <p>Heladeras con refrigerios •
                            Totems para cargar la batería de los celulares •
                            Livings de relax •
                            Lockers •
                            Servicio de toallas •
                            Toallitas individuales para clases de SportCycle</p>
                    </div>
                    <img className="cuadro-img cuad4" src={gymsalon2} alt='' />

                </div>

                <div className="cont-div-3">

                    <img className="cuadro-img cuad5" src={gymsalon4} alt='' />
                    <div className="cuadro-dialogo cuad6">
                        <h3>FLORES</h3>
                        <p>Av. Carabobo 154 / Flores
                            Lunes a Viernes 7 a 22hs / Sábado 9 a 19hs</p>
                        <h4>AMENITIES Y SERVICIOS</h4>
                        <p>Gimnasio • Salón Cycle • Salón Aero • Yoga Studio • Salón Functional Training • Performance Zone • FightClub • Sauna & Hidromasaje</p>
                        <p>Heladeras con refrigerios •
                            Totems para cargar la batería de los celulares •
                            Livings de relax •
                            Lockers •
                            Servicio de toallas •
                            Toallitas individuales para clases de SportCycle</p>
                    </div>

                </div>

                <div className="cont-div-4">
                
                <div className="cuadro-dialogo cuad7">
                    <h3>SAN JUSTO</h3>
                    <p>Av. Rincón y Av. Villegas / San Justo, 
                        Lunes a Viernes 7 a 22hs / Sábados 9 a 19hs</p>
                    <h4>AMENITIES Y SERVICIOS</h4>
                    <p>Salón Cycle • Salón Aero • Yoga Studio • Functional Training • Sauna & Hidromasaje • 5 Piscinas • Armonium Spa</p>
                    <p>Heladeras con refrigerios •
                        Totems para cargar la batería de los celulares •
                        Livings de relax •
                        Lockers •
                        Servicio de toallas •
                        Toallitas individuales para clases de SportCycle</p>
                </div>
                <img className="cuadro-img cuad8" src={swim} alt='' />

                </div>
            </div>
            <div className='footer-sed'>
                <div className='parte-arriba-footer-sed'>
                    <img src={Logowolf} alt='' style={{ height: "50px" }} />
                    <h1 className='separador-swich-fot-sed'>|</h1>
                    <h3>0800-333-4334</h3>
                    <h1 className='separador-swich-fot-sed'>|</h1>
                    <h3>info@wolf.com.ar</h3>
                    <h1 className='separador-swich-fot-sed'>|</h1>
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