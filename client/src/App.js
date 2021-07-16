import React from 'react';
import { Route, BrowserRouter as Router} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

import Home from './pages/Home';
import About from './pages/About';
import Navbar from './pages/Navbar';
import Submit from './pages/Submit';

function App() {

  return (
    <div className="main-wrapper">
      <Router>
        <Route path='/' component={Navbar} />
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/submit' component={Submit} />
      </Router>
    </div>
  );

}

export default App;
