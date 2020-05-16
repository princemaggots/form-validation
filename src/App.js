import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Form from './pages/Form.js';

const Header = () => (
  <div className="header">

  <div className="logo">
  <h1> Bare Bones</h1>
  </div>

   <div className="nav">
      <div className="support">
      <a href="/">donate</a>
      </div>
      <div className="post">
        <a href="/">post</a>
      </div> 
      <div className="profile">
          <div className="proimg">
          <img src="https://via.placeholder.com/30" alt="profile"></img>
          </div>  
          <div className="txt">
          <p> Profile </p>
        </div>
      </div>
  </div> 
</div>
);
  

const App = () => (
  <Router>
    <div>
      <Route component={Header} />

      <Route component={Form} />
    </div>
  </Router>
);

export default App;
