import React from 'react'

const head = () => {
  return (
    <div>
        <nav id="nelson">
        <div className='nelson_1stchild'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa3yQ_XJmzxhcKLZyAh3YCvRbYYTxIjTUn6A&s" alt="logo" style={{ width: '50px', height: '50px' }}/>
          <div className="b">Expense Tracker</div>
          <div className="b">Home</div>
          <div className="b">Connect Bank</div>
          <div className="b">Transactions</div>
          <div className='btn'>
            <button className='chilbtn'>Log in</button>
            <button className='chilbtn'>Sign up</button>
          </div>
        </div>
      </nav>
      
    </div>
  )
}

export default head
