import React from 'react';
import { Header } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About';
import MainContainer from './components/MainContainer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo"src="https://raisely-images.imgix.net/raisely-website-2019/uploads/logo-p-pdark-small-png-d4ab65.png?fit=max&amp;w=1000&amp;auto=format&amp;q=62" alt="Raisely Website 2019"/>
      </header>
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/about' component={About} />
          <Route exact path='/' component={MainContainer} />
        </Switch>
      </div>
      <h1>Customer Success Engineer</h1>
    </div>
  );
}

export default App;
