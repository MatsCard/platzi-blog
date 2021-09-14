import React from 'react';
import './styles/Header.css'
import logo from '../assets/img/Logo-negro.png'
import {Link} from 'react-router-dom';

function Header(props) {

  return (     
    <header>
      <section className="header-icons-container">
        <div className="icons">
          <Link to="/platzi-blog"><span className="flaticon-001-facebook"></span></Link>
          <Link to="/platzi-blog"><span className="flaticon-002-twitter"></span></Link>
          <Link to="/platzi-blog"><span className="flaticon-011-instagram"></span></Link>
          <Link to="/platzi-blog"><span className="flaticon-010-linkedin"></span></Link>
          <Link to="/platzi-blog"><span className="flaticon-008-youtube"></span></Link>
        </div>
      </section>
      <section>
        <nav>
          <section className="nav-logo-container">            
            <Link to="/platzi-blog"><img src={logo} alt="Logo de mi blog"/></Link>
          </section>
          <section className="profile-link">            
            <Link to="/perfil">Sobre mi</Link>
          </section>
        </nav>
      </section>
    </header>
  );
}

export default Header;