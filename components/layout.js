import React from 'react';
import Head from './head';
import Header from './header';
import Footer from './footer';

const Layout = props => {
  return (
    <div>
      <Head title={props.title} />
      <Header />
      <p>Bla Bla</p>
      <Footer />
    </div>
  );
};

export default Layout;
