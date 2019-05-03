import React from 'react';

function Contact() {
  return (
    <div>
      <style jsx>
        {`
          .contact {
            color: goldenrod;
            margin-top: 34px;
          }
          .header {
            text-align: center;
          }
        `}
      </style>
      <div className="contact">
        <br />
        <h1 className="header">Contact</h1>
      </div>
    </div>
  );
}

export default Contact;
