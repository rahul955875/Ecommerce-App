import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [userLoginDetail, setUserLoginDetail] = useState({
    email: "",
    newPassword: "",
    answer: "",
  });
  const handleUserInput = (e) => {
    setUserLoginDetail((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, newPassword, answer } = userLoginDetail;
    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/auth/forgot-password",
        {
          email,
          newPassword,
          answer,
        }
      );
      if (res?.data?.success) {
        toast.success(res.data?.message);
        navigate("/auth/login");
      } else {
        toast.error(res.data?.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };

  return (
    <div className="container mt-8">
      <form className="" onSubmit={handleSubmit}>
        <div className="max-w-150 mx-auto shadow-lg border border-gray-400 p-8">
          <h2 className="font-medium text-4xl mb-8">Forgot Password</h2>
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
          <div className="mb-4">
            <input
              type="password"
              required
              placeholder="Enter Your New Password"
              className="shadow-lg w-full p-4 rounded-2xl border-gray-400 border"
              name="newPassword"
              value={userLoginDetail.newPassword}
              onChange={handleUserInput}
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              required
              placeholder="(Security Answer) What is Your Favorite Sport?"
              className="shadow-lg w-full p-4 rounded-2xl border-gray-400 border"
              name="answer"
              value={userLoginDetail.answer}
              onChange={handleUserInput}
            />
          </div>

          <div className="col-12">
            <button
              type="submit"
              className=" my-4 bg-blue-500 text-white px-8 py-2 rounded-lg"
              onClick={handleSubmit}
            >
              Rest Password
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
