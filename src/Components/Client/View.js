import React from 'react';

import Home from './Home.js';
import AboutUs from './AboutUs.js';
import Programs from './Programs.js';
import ProjectsAndActivities from './ProjectsAndActivities.js';
import SupportUs from './SupportUs.js';
import Team from './Team.js';
import Contact from './Contact.js';

class View extends React.Component {
  render () {
    return (
      <div>
        <div>
          <Home />
        </div>
        <div>
          <AboutUs />
        </div>
        <div>
          <Programs />
        </div>
        <div>
          <ProjectsAndActivities />
        </div>
        <div>
          <SupportUs />
        </div>
        <div>
          <Team />
        </div>
        <div>
          <Contact />
        </div>
      </div>
    );
  }
}

export default View;
