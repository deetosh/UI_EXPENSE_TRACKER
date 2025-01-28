import React from 'react';
import './AllCSS/head.css';
import Login from './Pages/login.jsx';
import SignUp from './Pages/SignUp.jsx';
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router= createBrowserRouter(
    [
        {
            path: '/login',
            element : <Login/>
        },
        {
            path: '/signup',
            element : <SignUp/>
        }

    ]
);

const Head = () => {
  return (
    <div>
        <RouterProvider router={router}/>
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
          <div className="buttons" >
            <a href='/login'>
            <button className="btn"  >
                    <p>Log in</p>
                </button>
            </a> 
                
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
