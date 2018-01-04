import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import WelcomeDialog from './Components/WelcomeDialog.js';
import View from './Components/View.js';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <section>
          <WelcomeDialog />
          <View />
        </section>
      </MuiThemeProvider>
    );
  }
}

export default App;
