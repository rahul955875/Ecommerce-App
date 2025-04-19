import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router";
import { setAuth } from "../redux_store/authSlice";
const LoginPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
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
  const handleSubmit = async(e)=>{
      e.preventDefault()
      const {email,password} = userLoginDetail;
      try {
        const res = await axios.post('http://localhost:8080/api/v1/auth/login',{email,password})
        
        if(res.data.success){
          toast.success(res.data.message)
          dispatch(setAuth({user : res.data.user,
            token : res.data.token
          }))
          localStorage.setItem('authLogin',JSON.stringify(res.data))
          navigate('/')
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
      <form className="" onSubmit={handleSubmit}>
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
            <button
              type="submit"
              className=" my-4 bg-blue-500 text-white px-8 py-2 rounded-lg"
            >
              Login
            </button>
          </div>
          <div>
            <Link to="/auth/register" className="underline">
              Dont have an account?
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
