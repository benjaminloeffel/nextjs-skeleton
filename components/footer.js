import React from 'react';

const Footer = () => {
  return (
    <footer>
      <small>&copy; Example {new Date().getFullYear()}</small>
      <style jsx>{`
        background: #323031;
        padding: 20px 10px;
        text-align: center;

        small {
          color: #fff;
          padding: 0;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
