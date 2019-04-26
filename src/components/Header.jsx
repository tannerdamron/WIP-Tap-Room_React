import React from 'react';

function Home() {
  return(
    <div>
      <style jsx>{`
        .header {
          text-align: center;
          color: goldenrod;
          font-family: sans-serif;
          font-weight: lighter;
        }
      `}</style>
      <div>
        <h1 className="header">Tan's Tap Jam</h1>
      </div>
    </div>
  );
}

export default Home;