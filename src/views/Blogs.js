import React from 'react';
import './styles/Blogs.css'
import {Link} from 'react-router-dom';

import mainNews from '../assets/img/main-news-img.png'
import post1 from '../assets/img/post-1.png'
import post2 from '../assets/img/post-2.png'
import post3 from '../assets/img/post-3.png'

function Blogs(props) {

  return (     
      <div>
        <main className="blogs-main">
    
            <section className="blogs-news-container">
            <div className="grid-container blogs-main-new">
                <h3>Soy un titulos</h3>
                <div className="blogs-news-img-container">
                <img src={mainNews} alt="" />
                </div>
                <div className="blogs-news-info-container">
                <h2>Título del blogpost</h2>
                <p>Lorem ipsum dolor, sit amet
                    consectetur adipisicing elit.
                    Aperiam vero veniam officiis?
                    Error magnam numquam.</p>
                <Link className="blogs-button" to="/blog">Leer mas</Link>
                </div>
    
            </div>
            </section>
    
            <section className="blogs-post-container">
            <div className="grid-container">
                <article className="post-container">
                <img src={post1} alt="" />
                <p>Título del blogpost</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam vero veniam officiis? Error magnam numquam.</p>
                <Link className="blogs-button" to="/blog">Leer mas</Link>
                </article>
                <article className="post-container">
                <img src={post2} alt="" />
                <p>Título del blogpost</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam vero veniam officiis? Error magnam numquam.</p>
                <Link className="blogs-button" to="/blog">Leer mas</Link>
                </article>
                <article className="post-container">
                <img src={post3} alt="" />
                <p>Título del blogpost</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam vero veniam officiis? Error magnam numquam.</p>
                <Link className="blogs-button" to="/blog">Leer mas</Link>
                </article>
                <article className="post-container">
                <img src={post1} alt="" />
                <p>Título del blogpost</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam vero veniam officiis? Error magnam numquam.</p>
                <Link className="blogs-button" to="/blog">Leer mas</Link>
                </article>
                <article className="post-container">
                <img src={post2} alt="" />
                <p>Título del blogpost</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam vero veniam officiis? Error magnam numquam.</p>
                <Link className="blogs-button" to="/blog">Leer mas</Link>
                </article>
                <article className="post-container">
                <img src={post3} alt="" />
                <p>Título del blogpost</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam vero veniam officiis? Error magnam numquam.</p>
                <Link className="blogs-button" to="/blog">Leer mas</Link>
                </article>
            </div>
    
            </section>
        </main>
      </div>
  );
}

export default Blogs;