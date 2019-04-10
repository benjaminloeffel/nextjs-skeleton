import React from 'react';

const Button = props => {
  return (
    <button type={props.type} name={props.name} disabled={props.disabled}>
      {props.text}
      <style jsx>{`
        button {
          cursor: pointer;
          background: none;
          border: 2px solid red;
          border-radius: 3px;
          padding: 5px 25px;
        }

        button:hover {
          background: red;
          color: #fff;
        }

        button:disabled {
          background: darkgray;
          color: #fff;
          cursor: initial;
          border-color: darkgray;
        }

        button:hover:disabled {
          background: darkgray;
        }

        button,
        button:hover,
        button:disabled,
        button:hover:disabled {
          transition: all 0.25s;
        }
      `}</style>
    </button>
  );
};

export default Button;
