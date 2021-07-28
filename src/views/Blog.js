import React from 'react';
import './styles/Blog.css'

import post1 from '../assets/img/post-1.png'

function Blog(props) {

  return (     
      <div>
            <main>
                <section class="grid-container blogpost-img-container">
                    <img src={post1} alt=""/>
                </section>
            
                <section class="blogpost-main-container">
                    <div class="grid-container">
                        <h3>Noticias</h3>
                        <article>
                        <h1>Título del Blogpost</h1>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ratione
                        dolor nobis veniam soluta animi cupiditate. Natus, tenetur. Veniam, eligendi
                        quas? Voluptas, pariatur? Pariatur enim ratione incidunt officiis nobis
                        tempora!
                        </p>
                        <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Quae maxime maiores voluptate labore ex. Cumque sit accusamus ducimus.
                        Dolorum doloremque nobis mollitia beatae? Sapiente deleniti harum, accusamus
                        hic vitae ab? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Temporibus officia est praesentium, perferendis totam veritatis voluptatum
                        architecto numquam cumque eveniet vero doloribus reiciendis perspiciatis,
                        voluptas dolores voluptatibus. Neque, iusto inventore!Lorem
                        </p>
                        <p>
                        Lorem
                        ipsum dolor sit amet consectetur, adipisicing elit. Quod, quia quasi
                        assumenda, sequi minima id laboriosam esse, aspernatur praesentium molestiae
                        quo nobis harum vel obcaecati dolorum sint quae quidem eaque! Lorem ipsum
                        dolor sit amet consectetur adipisicing elit. Quos repellendus neque
                        voluptatem itaque sapiente in perferendis fugiat voluptate, harum iure,
                        error voluptas deserunt officia consectetur veniam omnis aspernatur nihil
                        officiis?
                        </p>
                        </article>
                    </div>
            
            
                </section>
            
            </main>
  
      </div>
  );
}

export default Blog;