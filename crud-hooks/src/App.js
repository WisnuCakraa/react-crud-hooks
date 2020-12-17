import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home } from './Component/Home';
import { AddUser } from './Component/AddUser';
import { EditUser } from './Component/EditUser';
import {GlobalProvider} from './Context/GlobalState';

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div style={{ maxWidth: "30rem", margin: "4rem auto"}}>
      <GlobalProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/add" component={AddUser}/>
            <Route path="/edit/:id" component={EditUser}/>
          </Switch>
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
