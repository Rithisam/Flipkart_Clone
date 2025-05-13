import React, { useState } from 'react';
import '../../App.css';

import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [num, setNum] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setNum(e.target.value);
  };

  const handleLoginPage = () => {
    if (num.length === 10) {
     
      navigate('/', { state: { isLoggedIn: true, phone: num } });
    } else {
      alert("Enter the number correctly");
    }
  };

  return (
    <div>
      <div className="login-container">
        
        <div className="login-box">
          {/* Left Section */}
          <div className="left-section">
            <h2>Login</h2>
            <p>
              Get access to your Orders,<br />
              Wishlist, and Recommendations
            </p>
            <img
              src="https://img.icons8.com/fluency/96/laptop.png"
              alt="Illustration"
            />
          </div>

          {/* Right Section */}
          <div className="right-section">
            <input
              type="number"
              placeholder="Enter Mobile number"
              value={num}
              onChange={handleInputChange}
            />

            <div className="terms">
              By continuing, you agree to Flipkart’s
              <a href="#"> Terms of Use </a> and <a href="#"> Privacy Policy</a>.
            </div>

            <button onClick={handleLoginPage}>CONTINUE</button>

            <div className="create-account">
              New to Flipkart? <a href="#">Create an account</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
