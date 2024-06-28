import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



function Home() {
  return (
    <div>
      <h1>Bienvenido al portfolio de Alba</h1>
      <p>Soy un desarrollador web con experiencia en React y otras tecnologías modernas.</p>
      <nav>
        <ul>
          <li><Link to="/projects">Proyectos</Link></li>
          <li><Link to="/resume">Currículum</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
