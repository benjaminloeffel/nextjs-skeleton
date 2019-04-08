import React from 'react';

const Hero = props => {
  return (
    <div className="hero">
      <div className="inner">
        <h1 className="page-title">{props.title}</h1>
      </div>
      <style jsx>{`
        .hero {
          position: relative;
          height: 400px;
          background: tomato;
        }

        .inner {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          padding: 15px;
          border-radius: 5px;
        }

        .page-title {
          color: #fff;
          text-transform: uppercase;
        }
      `}</style>
    </div>
  );
};

export default Hero;
