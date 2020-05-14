import React from 'react';
import {Switch, Route} from 'react-router-dom'

import Landing from './Pages/Landing'
import Home from './Components/Home'

import './App.css';
import 'bulma/css/bulma.css'

function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path = '/' component = {Landing}/>
      </Switch>
    </div>
  );
}

export default App;
