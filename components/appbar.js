import React from 'react';
import Link from '../components/link';
import Router from 'next/router';
import NProgress from 'nprogress';

const AppBar = () => {
  Router.events.on('routeChangeStart', url => {
    console.log(`Loading: ${url}`);
    NProgress.start();
  });
  Router.events.on('routeChangeComplete', () => NProgress.done());
  Router.events.on('routeChangeError', () => NProgress.done());

  const colorRed = '#ef223c',
    colorWhite = '#fff',
    colorBlack = '#000';

  return (
    <div className="appbar">
      <nav>
        <span>
          <Link activeClassName="active" href="/">
            <a className="nav-link">Example</a>
          </Link>
        </span>
        <ul>
          <li>
            <Link activeClassName="active" href="/about">
              <a className="nav-link">About</a>
            </Link>
          </li>
          <li>
            <Link activeClassName="active" href="/contact">
              <a className="nav-link">Contact</a>
            </Link>
          </li>
        </ul>
        <span>
          <ul>
            <li>
              <Link activeClassName="active" href="/signin">
                <a className="nav-link">SignIn</a>
              </Link>
            </li>
            <li>
              <Link activeClassName="active" href="/signup">
                <a className="nav-link">SignUp</a>
              </Link>
            </li>
          </ul>
        </span>
      </nav>
      <style jsx>
        {`
          .appbar {
            background: ${colorBlack};
            padding: 20px 10px;
          }

          nav,
          nav span {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
          }

          span {
            flex: 2;
          }

          span:first-of-type:after,
          span:last-of-type:before {
            content: '';
            display: inline-block;
          }

          ul {
            margin: 0;
            padding: 0;
            list-style-type: none;
          }

          li {
            display: inline-block;
            padding: 0 8px;
            margin: 0;
          }

          a {
            display: block;
            position: relative;
            color: ${colorWhite};
            text-decoration: none;
          }

          a:before,
          a:after {
            content: '';
            position: absolute;
            transition: transform 0.5s ease;
          }

          a:before {
            left: 0;
            bottom: 0;
            width: 100%;
            height: 2px;
            background: ${colorRed};
            transform: scaleX(0);
          }

          a:hover:before {
            transform: scaleX(1);
          }

          .active:after {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            height: 2px;
            width: 100%;
            background: ${colorRed};
          }
        `}
      </style>
    </div>
  );
};

export default AppBar;
