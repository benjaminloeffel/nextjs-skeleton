import React from 'react';
import Layout from '../components/layout';
import LoginForm from '../components/loginform';

const SignIn = () => (
  <Layout title="Sign In" hasHero={false}>
    <div className="fullscreen">
      <div className="left">
        <img src="/static/sample-bg.jpg" alt="" />
        <div className="overlay" />
      </div>
      <div className="right">
        <div className="inner">
          <div className="content">
            <h2>Sign In.</h2>
            <p>Enter your details below.</p>
          </div>
          <LoginForm />
        </div>
      </div>

      <style jsx>{`
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

        .content {
          margin-bottom: 30px;
        }

        h2,
        p {
          margin: 0;
        }
      `}</style>
    </div>
  </Layout>
);

export default SignIn;
