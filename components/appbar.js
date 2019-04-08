import React from 'react';
import Link from 'next/link';

const AppBar = () => {
  return (
    <div className="appbar">
      <Link href="/">
        <a>Example</a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
      <Link href="/account">
        <a>Account</a>
      </Link>
      <style jsx>
        {`
          .appbar {
            background: black;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 20px 10px;
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
            color: #fff;
            text-decoration: none;
          }

          a:hover {
            color: #ef233c;
          }
        `}
      </style>
    </div>
  );
};

export default AppBar;
