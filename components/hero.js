import React from 'react';
import { string } from 'prop-types';

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
          background: #323031;
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
          margin: 0;
        }
      `}</style>
    </div>
  );
};

Hero.propTypes = {
  title: string
};

export default Hero;
