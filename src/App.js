import React from 'react';
import { Route } from 'react-router-dom';

import Login from './Components/Login/Login.js';
import AdminPanel from './Components/Admin/AdminPanel.js';

import WelcomeDialog from './Components/Client/WelcomeDialog.js';
import Header from './Components/Header/Header.js';

import Home from './Components/Client/Home.js';
import AboutUs from './Components/Client/AboutUs.js';
import Programs from './Components/Client/Programs.js';
import ProjectsAndActivities from './Components/Client/ProjectsAndActivities.js';
import SupportUs from './Components/Client/SupportUs.js';
import Team from './Components/Client/Team.js';
import Contact from './Components/Client/Contact.js';
import View from './Components/Client/View.js';

class App extends React.Component {
  render () {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/about-us" exact component={AboutUs} />
          <Route path="/programs" exact component={Programs} />
          <Route path="/projects-and-activities" exact component={ProjectsAndActivities} />
          <Route path="/support-us" exact component={SupportUs} />
          <Route path="/team" exact component={Team} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/login" exact component={Login}/>
          <Route path="/admin" component={AdminPanel} />
        </div>

      </div>
    );
  }
}

export default App;
