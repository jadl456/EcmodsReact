import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Inicio from './pages/Inicio';
import Descargas from './pages/Descargas';
import Home from './pages/Inicio';

function App() {
  return (
    <Router>
    <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/inicio" component = {Inicio}/>
          <Route exact path="/descargas" component = {Descargas}/>
        </Switch>
    </Layout>
</Router>
  );
}

export default App;
