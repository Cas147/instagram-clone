import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home.js'
import Direct from '../pages/Direct.js'
import Explore from '../pages/Explore.js'
import Layout from './Layout.js'

import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
    <Layout>
         <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/direct/inbox/' component={Direct} />
          <Route exact path='/explore' component={Explore}/>
         </Switch>
     </Layout>
    </BrowserRouter>
    )
}

export default App;
