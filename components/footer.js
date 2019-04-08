import React from 'react';

const Footer = () => {
  return (
    <footer>
      <small>&copy; Example {new Date().getFullYear()}</small>
      <style jsx>{`
        background: gray;
        padding: 20px 10px;
        text-align: center;

        small {
          padding: 0;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
