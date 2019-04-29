import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import Home from './Home';
import Navbar from './Navbar';
import Contact from './Contact';
import About from './About';

function App() {
  return (
    <div>
      <style jsx>{`
        .app {
        background-image: url('https://images6.alphacoders.com/405/405948.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
        position: relative;
        margin: -21px -8px 0 -8px;
        }
      `}</style>
      <div className="app">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/contact' component={Contact} />
          <Route path='/about' component={About} />
          <Route component={Error404} />
        </Switch>
      </div>
    </div>
  );
}

export default App;