import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';

import Router from './Router';
import './theme/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <HashRouter>
        <div className="page-wrapper">
          <Router />
        </div>
      </HashRouter>
    );
  }
}

export default App;
