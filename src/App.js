// instalar npm i @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons y react-router-dom

import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink
} from 'react-router-dom'
// iconos
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from '@fortawesome/free-solid-svg-icons';
//componentes
import Inicio from './components/Inicio'
import Sedes from './components/Sedes'
import Clases from './components/Clases'
import About from './components/About-us'
import Familywolf from './components/Familywolf'
import logowolf from './imagenes-eventos/logowolf.png'

function App() {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <Router>
      <div className="App">

        <nav className="navegador">
          <div className="leftSide">
            
            <img src={logowolf} alt='' style={{height: "60px"}}/>
          </div>

          <div className="rightSide">

            <div className="botones" id={showLinks ? 'hidden' : ''}>
              <NavLink
                className="boton" to='/' activeclassname='active'>Inicio</NavLink>
              <NavLink
                className="boton" to='/sedes' activeclassname='active'>Sedes</NavLink>
              <NavLink
                className="boton" to='/clases' activeclassname='active'>Clases</NavLink>
              <NavLink
                className="boton" to='/about' activeclassname='active'>eventos</NavLink>
              <NavLink
                className="boton" to='/familywolf' activeclassname='active'>Familia Wolf</NavLink>
            </div>

            <FontAwesomeIcon
                    icon={faBars}
                    className="material-symbols-outlined fa-2x"
                    onClick={()=> setShowLinks(!showLinks)}
                    />        
          </div>


        </nav>
        
        <Routes>
          <Route path="*" element={<Inicio />}></Route>
          <Route path="/sedes" element={<Sedes />}></Route>
          <Route path="/clases" element={<Clases />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/familywolf" element={<Familywolf />}></Route>
        </Routes>
      </div>
        
    </Router>
  );
}

export default App;
