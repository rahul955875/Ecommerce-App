import React, { useState } from "react";
import { Link,useNavigate } from "react-router";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleInput = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const saveDataOnLocal = (e) => {
    e.preventDefault();
    const existingUserData = JSON.parse(localStorage.getItem("userData"));
    if (existingUserData) {
      const checkDuplicateUser = existingUserData.find(
        (item) => item.email === userData.email
      );
      if (checkDuplicateUser) {
        alert("User Email Alerdy Exists");
        return;
      }
    }
    const existingData = [userData, ...(existingUserData || [])];
    console.log(existingData);
    localStorage.setItem("userData", JSON.stringify(existingData));
    alert("Register successfully");
    navigate("/login");
  };
  return (
    <div className="container mt-8">
      <form className="w-6/12 mx-auto shadow-lg" onSubmit={saveDataOnLocal}>
        <div className="p-8">
          <h2 className="text-4xl mb-8 font-medium">Register</h2>
          <div className="col-12 mt-3">
            <input
              type="text"
              placeholder="Enter Your Username"
              className="w-full p-4 border border-gray-200 rounded-2xl shadow-lg"
              required
              name="username"
              value={userData.username}
              onChange={handleInput}
            />
          </div>
          <div className="col-12">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full p-4 border border-gray-200 mt-4 rounded-2xl shadow-lg"
              required
              name="email"
              value={userData.email}
              onChange={handleInput}
            />
          </div>
          <div className="col-12">
            <input
              type="password"
              placeholder="Enter Your Password"
              className="w-full p-4 border border-gray-200 mt-4 rounded-2xl shadow-lg"
              required
              name="password"
              value={userData.password}
              onChange={handleInput}
            />
          </div>
          <div className="col-12">
            <button type="submit" className="my-4 bg-blue-500 text-white px-8 py-2 rounded-lg">
              Register
            </button>
          </div>
          <div>
            <Link to="/" className="underline">Alerdy have an account?</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
