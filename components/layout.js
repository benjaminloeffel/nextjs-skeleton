import React, { Component } from 'react';
import Head from './head';
import Header from './header';
import Footer from './footer';

class Layout extends Component {
  render() {
    const pageTitle = this.props.title;

    return (
      <div>
        <Head title={pageTitle} />
        <Header title={pageTitle} />
        <div className="page-content">Hello World</div>
        <Footer />
        <style global jsx>{`
          body {
            margin: 0;
          }

          .page-content {
            padding: 20px 10px;
          }
        `}</style>
      </div>
    );
  }
}

export default Layout;
