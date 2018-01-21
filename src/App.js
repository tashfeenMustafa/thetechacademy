import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './Components/Login/Login.js';
import AdminPanel from './Components/Admin/AdminPanel.js';
import About from './Components/Client/AboutUs.js';
import Home from './Components/Client/Home.js';

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login}/>
          <Route path="/admin" exact component={AdminPanel} />
          <Route path="/about-us" exact component={About} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
