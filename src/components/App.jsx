import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import Home from './Home';

function App() {
  return (
    <div>
      <style jsx>{`
        .app {
        background-image: url('https://images6.alphacoders.com/405/405948.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        margin: -21px -8px 0 -8px;
        }
      `}</style>
      <div className="app">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route component={Error404}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;