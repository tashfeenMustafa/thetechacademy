/*****
  WelcomeDialog.js contains code for the Welcome screen when a user enters the website
*****/
import React from 'react';
import ReactModal from 'react-modal';

class WelcomeDialog extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      showModal: true
    };

    this.handlePlayGame = this.handlePlayGame.bind(this);
    this.handleSkipGame = this.handleSkipGame.bind(this);
  }

  handlePlayGame() {
    this.handleCloseModal();
  }

  handleSkipGame() {
    this.handleCloseModal();
  }

  handleCloseModal() {
    this.setState({showModal: false});
  }

  render() {
    return (
      <div>
        <ReactModal
          isOpen={this.state.showModal} >
          <div>
            <h1>Welcome to</h1>
            <h1>The Tech Academy</h1>
            <p>We have made an interactive game for you to browse through out website. Below this screen is a maze that you can <a href="#" onClick={this.handlePlayGame}>play</a> to go to any section. Or you can just <a href="#" onClick={this.handleSkipGame}>skip</a> and browse freely.</p>
          </div>
        </ReactModal>
      </div>
    );
  }
}

export default WelcomeDialog;
