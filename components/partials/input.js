import React from 'react';

const Input = props => {
  return (
    <>
      <input
        id={props.id}
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
      <style jsx>{`
        input {
          display: inline-block;
          width: 100%;
          padding: 4px 8px;
          border: 2px solid lightgray;
          border-radius: 3px;
        }

        input:focus {
          border: 2px solid darkgray;
          outline: none;
        }
      `}</style>
    </>
  );
};

export default Input;
