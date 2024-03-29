import React from 'react';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';
import './App.css';
import './utilities/font/flaticon.css'
import Home from './views/Home'
import Blogs from './views/Blogs'
import Blog from './views/Blog'
import Perfil from './views/Perfil'
import Layout from './layout/Layout'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route exact path="/" component={Home} />
          <Route exact path="/platzi-blog" component={Home} />
          <Route exact path="/blogs" component={Blogs} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/perfil" component={Perfil} />

        </Layout>
      </Switch> 
    </BrowserRouter>
  );
}

export default App;
