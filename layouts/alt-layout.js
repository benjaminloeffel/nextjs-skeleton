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
        <div className="fullscreen">
          <div className="left">
            <img src="/static/sample-bg.jpg" alt="" />
            <div className="overlay" />
          </div>
          <div className="right">
            <div className="inner">{children}</div>
          </div>
        </div>
        <Footer />
        <style global jsx>{`
          .fullscreen {
            height: calc(100vh - 138px);
            width: 99vw;
            display: flex;
          }

          .left,
          .right {
            position: relative;
          }

          .left {
            height: 100%;
            width: 25%;
          }

          .right {
            height: 100%;
            width: 75%;
          }

          .inner {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            padding: 15px;
            width: 40%;
          }

          img {
            height: 100%;
            object-fit: cover;
          }

          .overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0);
            z-index: 2;
          }
        `}</style>
      </div>
    );
  }
}

export default Layout;
