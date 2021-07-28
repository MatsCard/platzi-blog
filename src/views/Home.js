import React from 'react';
import './styles/Home.css'
import {Link} from 'react-router-dom';

function Home(props) {

  return (     
      <div>
        <main className="home-main">
        <section>
            <h1 className="home-main-text">Conoce las novedades y <br/> noticias del Mundo Tech</h1>
            <Link className="home-main-button" to="/blogs">Entra ya!</Link>
        </section>
        </main>
      </div>
  );
}

export default Home;