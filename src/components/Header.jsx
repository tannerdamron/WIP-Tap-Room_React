import React from 'react';

function Header() {
  return (
    <div>
      <style jsx>
        {`
        .header {
          text-align: center;
          color: goldenrod;
          font-family: sans-serif;
          font-weight: lighter;
          font-size: 50px;
          text-shadow: 1px 1px black;
        }
      `}
      </style>
      <div>
        <h1 className="header">
          <br />
          Tan&apos;s Tap Jam
        </h1>
      </div>
    </div>
  );
}

export default Header;
