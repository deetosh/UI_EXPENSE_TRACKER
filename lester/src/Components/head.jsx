import React from 'react';
import { Link } from 'react-router-dom';
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
            <Link to="/home" className='link'>Home</Link>
            <div className="link">Connect Bank</div>
            <div className="link">Transactions</div>
          </div>
          <div className="buttons" >
            <Link to="/login">
            <button className="btn"  >
                    <p>Log in</p>
                </button>
            </Link> 
                
            <a href='/signup'>
            <button className="btn"  >
                    <p>Sign Up</p>
                </button>
            </a> 
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Head;
