import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import  toast from "react-hot-toast";
import axios from 'axios'
const RegisterPage = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });
  const handleInput = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async(e)=>{
    e.preventDefault()
    const {username:name,email,password,phone,address} = userData;
    console.log(name)
    try {
      const res = await axios.post('http://localhost:8080/api/v1/auth/register',{name,email,password,phone,address})
      
      if(res.data.success){
        toast.success("Register successfully.")
        navigate('/auth/login')
      }else{
        toast.error("something went wrong")
      }
    } catch (error) {
      console.log(error)
      toast.error("something went wrong")
    }
  }
  
  return (
    <div className="container mt-8">
      <form className="w-4/12 mx-auto shadow-lg" onSubmit={handleSubmit}>
        <div className="p-8">
          <h2 className="text-4xl mb-8 font-medium">Register</h2>
          <div className=" mt-3">
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
          <div className="">
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
          <div className="">
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
          <div className="">
            <input
              type="password"
              placeholder="Enter Your Phone"
              className="w-full p-4 border border-gray-200 mt-4 rounded-2xl shadow-lg"
              required
              name="phone"
              value={userData.phone}
              onChange={handleInput}
            />
          </div>
          <div className="">
            <input
              type="text"
              placeholder="Enter Your Address"
              className="w-full p-4 border border-gray-200 mt-4 rounded-2xl shadow-lg"
              required
              name="address"
              value={userData.address}
              onChange={handleInput}
            />
          </div>
          <div className="">
            <button
              type="submit"
              className="my-4 bg-blue-500 text-white px-8 py-2 rounded-lg"
            >
              Register
            </button>
          </div>
          <div>
            <Link to="/auth/login" className="underline">
              Alerdy have an account?
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
