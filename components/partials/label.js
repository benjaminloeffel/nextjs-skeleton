import React from 'react';

const Label = props => {
  return (
    <>
      <label htmlFor={props.for}>{props.text}</label>
      <style jsx>{`
        label {
          font-size: 12px;
          text-transform: uppercase;
          font-weight: bold;
          display: block;
        }
      `}</style>
    </>
  );
};

export default Label;
