import React from 'react';
import AppBar from '../components/appbar';
import Hero from '../components/hero';

const Header = props => {
  return (
    <header>
      <AppBar />
      <Hero title={props.title} />
    </header>
  );
};

export default Header;
