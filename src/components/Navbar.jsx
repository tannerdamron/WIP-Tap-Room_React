import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

function Navbar() {
  return(
    <div>
      <style jsx>{`
        .nav {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          align-content: center;
          background-image: linear-gradient(white, goldenrod);
        }
        .fixed {
          position: fixed;
          width: 100%;
          margin-left: ;
        }
        button {
          background-color: transparent;
          border: none;
          font-size: 20px;
          font-family: sans-serif;
          font-weight: lighter;
          margin-left: 35%;
        }
        button:hover {
          cursor: pointer;
          color: cornflowerblue;
        }
      `}</style>
      <div className="fixed">
        <nav className="nav">
          <div>
            <Link to='/'><button>Home</button></Link>
          </div>
          <div>
            <Link to='/about'><button>About</button></Link>
          </div>
          <div>
            <Link to='/contact'><button>Contact</button></Link>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;