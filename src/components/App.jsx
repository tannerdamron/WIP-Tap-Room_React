import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';

function App() {
  return (
    <div>
      <div>
        <style jsx global>{`
        
        `}</style>
      </div>
      <div>
        <Route component={Error404} />
      </div>
    </div>
  );
}

export default App;