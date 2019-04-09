import React from 'react';
import AppBar from '../components/appbar';
import Hero from '../components/hero';

function hasHero(props) {
  return props.hasHero != false ? <Hero title={props.title} /> : null;
}

const Header = props => {
  return (
    <header>
      <AppBar />
      {hasHero(props)}
    </header>
  );
};

export default Header;
