import React, { Component } from 'react';
import Head from '../components/head';
import Header from '../components/header';
import Footer from '../components/footer';

class Layout extends Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        <Head title={this.props.title} />
        <Header title={this.props.title} hasHero={this.props.hasHero} />
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
