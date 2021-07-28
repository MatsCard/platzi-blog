import React from 'react';
import './styles/Perfil.css';
import profilePic from '../assets/img/profile-pic.jpg'
import newsletter from '../assets/img/013-newsletter.png'
import like from '../assets/img/006-like.png'

function Perfil(props) {

  return (     
      <div>
        <main>
            <section className="profile-main-container">
        
            <div className="grid-container profile-container">
                <div>
                <img src={profilePic} alt=""/>
                </div>
        
                <div className="">
                <h2>Hola, mi nombre es Matias Cardone!</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolore velit
                    commodi suscipit rerum sunt maxime aliquam laborum odit, temporibus
                    reprehenderit? Esse numquam commodi saepe quis accusamus.
                </p>
                </div>
            </div>
        
            </section>
        
        
            <section className="profile-main-projects">
            <div className="grid-container">
                <h3>Proyectos</h3>
                <div className="projects-main-container">
                <article  className="project-container">
                    <h4>Título</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem recusandae cum quae accusantium iusto sit ipsum, perspiciatis eos in animi voluptatum quos aut? Magni quo excepturi placeat, aliquid fugiat modi.</p>
                </article>
                <article  className="project-container">
                    <h4>Título</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem recusandae cum quae accusantium iusto sit ipsum, perspiciatis eos in animi voluptatum quos aut? Magni quo excepturi placeat, aliquid fugiat modi.</p>
                </article>
                <article  className="project-container">
                    <h4>Título</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem recusandae cum quae accusantium iusto sit ipsum, perspiciatis eos in animi voluptatum quos aut? Magni quo excepturi placeat, aliquid fugiat modi.</p>
                </article>
                </div>
            </div>
            </section>
        
        
            <section className="contact-main-container">
            <div className="contact">
                <img src={newsletter} alt="" />
                <div className="contact-left">
                <a href="#">Contacto</a>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, libero deleniti ut repudiandae minima.</p>
                </div>
            </div>
        
            <div v className="contact">
                <img src={like} alt="" />
                <div className="contact-right">
                <a href="#">Escribe</a>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis.</p>
                </div>
            </div>
            </section>
        
        </main>
    
      </div>
  );
}

export default Perfil;