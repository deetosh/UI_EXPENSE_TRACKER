import React from 'react';
import './AllCSS/head.css';

const Head = () => {
  return (
    <div>
      <nav id="nelson">
        <div className="nelson_1stchild">
          <div className="logo">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa3yQ_XJmzxhcKLZyAh3YCvRbYYTxIjTUn6A&s"
              alt="logo"
              className="logo-img"
            />
            <span className="title">Expense Tracker</span>
          </div>

          <div className="nav-links">
            <div className="link">Home</div>
            <div className="link">Connect Bank</div>
            <div className="link">Transactions</div>
          </div>

          <div className="buttons">
            <button className="btn">Log in</button>
            <button className="btn">Sign up</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Head;
