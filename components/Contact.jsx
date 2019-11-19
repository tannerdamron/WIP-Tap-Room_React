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
        <h1 className="header">Feel free to contact us at (360)555-555</h1>
        <h1 className="header">or email us at tanstapjam@gmail.com</h1>
      </div>
    </div>
  );
}

export default Contact;
