import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Inicio from './pages/Inicio';
import Descargas from './pages/Descargas';
import Vote from './pages/Vote';
import Home from './pages/Inicio';
import Cookies from './components/pages/PageCokkies';
import Adb from './pages/AdBlock';

function App() {
  return (
    <Router>
    <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/inicio" component = {Inicio}/>
          <Route exact path="/descargas" component = {Descargas}/>
          <Route exact path="/vote" component = {Vote}/>
          <Route exact path="/cookies" component = {Cookies}/>
          <Route exact path="/adb" component = {Adb}/>
        </Switch>
    </Layout>    
    </Router>
  );
}

export default App;

