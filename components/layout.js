import React, { Component } from 'react';
import Head from './head';
import Header from './header';
import Footer from './footer';

class Layout extends Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        <Head title={this.props.title} />
        <Header title={this.props.title} />
        <div className="page-content">{children}</div>
        <Footer />
        <style global jsx>{`
          .page-content {
            padding: 20px 10px;
          }
        `}</style>
      </div>
    );
  }
}

export default Layout;
