import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '../components/appbar';
import Hero from '../components/hero';

const Header = props => {
  return (
    <header>
      <AppBar />
      {props.hasHero !== false ? <Hero title={props.title} /> : null}
    </header>
  );
};

Header.propTypes = {
  hasHero: PropTypes.bool,
  title: PropTypes.string.isRequired
};

export default Header;
