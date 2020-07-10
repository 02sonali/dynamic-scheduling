import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import './pageStructure.css';
import Navigation from './components/Navigation';
import LeftMenu from './components/LeftMenu';
import MainContainer from './components/MainContainer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation/>
        <div id="wrapper">
          <LeftMenu/>
          <MainContainer/>
        </div>
      </Router>
    </div>
  );
}

export default App;
