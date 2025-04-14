import React, { useState } from "react";
import { Link, useNavigate } from "react-router";

const LoginPage = () => {
    const navigate = useNavigate()
  const [userLoginDetail, setUserLoginDetail] = useState({
    email: "",
    password: "",
  });
  const handleUserInput = (e) => {
    setUserLoginDetail((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const ValidUser = (e) => {
    e.preventDefault()
    const existingUser = JSON.parse(localStorage.getItem("userData"));
    if (existingUser) {
      const isUser = existingUser.find(
        (user) =>
          user.email === userLoginDetail.email &&
          user.password === userLoginDetail.password);
          console.log(isUser)
      if (isUser) {
        alert("Login successfully");
        localStorage.setItem("loginUser",JSON.stringify(isUser))
        navigate('/Home')
    }
    else{
        alert('Invalid Email or Password')
    }
} else {
    alert("Your Not Register");
    navigate('/Register')
    }
  };
  return (
    <div className="container mt-8">
      <form className="" onSubmit={ValidUser}>
        <div className="max-w-150 mx-auto shadow-lg border border-gray-400 p-8">
          <h2 className="font-medium text-4xl mb-8">Login</h2>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full p-4 border border-gray-400 rounded-2xl shadow-lg"
              required
              name="email"
              value={userLoginDetail.email}
              onChange={handleUserInput}
            />
          </div>
          <div className="col-12">
            <input
              type="password"
              required
              placeholder="Enter Your Password"
              className="shadow-lg w-full p-4 rounded-2xl border-gray-400 border"
              name="password"
              value={userLoginDetail.password}
              onChange={handleUserInput}
            />
          </div>
          <div className="col-12">
            <button type="submit" className=" my-4 bg-blue-500 text-white px-8 py-2 rounded-lg">
              Login
            </button>
          </div>
          <div>
            <Link to="/Register" className="underline">Dont have an account?</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
