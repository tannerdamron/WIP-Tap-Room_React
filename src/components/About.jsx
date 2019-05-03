import React from 'react';
import tanBrewing from '../assets/images/tanBrewing.jpg';

function About() {
  return (
    <div>
      <style jsx>
        {`
          .about {
            color: goldenrod;
            margin-top: 34px;
          }
          .header {

            text-align: center;
          }
          .tan {
            width: 800px;
            height: 500px;
            display: block;
            margin: 0 auto 0 auto;
            border: 2px solid white;
          }
        `}
      </style>
      <div className="about">
        <br />
        <h1 className="header">About Us</h1>
        <img className="tan" src={tanBrewing} alt="guy brewing beer" />
      </div>
    </div>
  );
}

export default About;
