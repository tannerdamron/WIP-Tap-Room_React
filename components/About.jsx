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
            width: 700px;
            height: 400px;
            display: block;
            margin: 0 auto 0 auto;
            border: 2px solid white;
          }
          .aboutText {
            color: goldenrod;
            text-align: center;
            font-family: sans-serif;
            font-weight: lighter;
            text-shadow: 1px 1px black;
            background-color: rgba(0,0,0,.7);
            width: 80%;
            display: block;
            margin: 30px auto auto auto;
            padding: 10px;
            border-radius: 30px;
          }
        `}
      </style>
      <div className="about">
        <br />
        <h1 className="header">About Us</h1>
        <img className="tan" src={tanBrewing} alt="guy brewing beer" />
        <h2 className="aboutText">We are a premier tap room located in the southeast end of Seattle, Washington on 26th Avenue South. We started like every other brewer, in the garage. Since 2001, we have turned our brewing passion into a full fledged brewing and serving tap room. We hold our brews to the highest standard and always hand test each batch to ensure the greatest possible satisfaction rates. Our location can hold up to 350 people, and dogs are welcome as well! Please call ahead for groups bigger than 8. We have ping-pong, mini-golf, roller coasters and an all you can eat taco bar. We hope to see you soon!</h2>
      </div>
    </div>
  );
}

export default About;
