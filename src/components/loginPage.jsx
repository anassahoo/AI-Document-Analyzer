import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate()
  const handleSubmit = (e) => {

    e.preventDefault()

    const user = JSON.parse(localStorage.getItem("userData"));
    if (!user) {
      alert("User Does not exist")
    }
    else {
      if (username == user.username && password == user.password) {
        setUser(user.username)
        Navigate("/dashboard");
      }
      else {
        alert("invalid credential")
      }
    }
  }
  return (

    <div className="flex items-center justify-center w-screen min-h-screen via-cyan-500 to-blue-600">
      <div className="flex flex-col gap-4 border-none max-w-95 p-8 bg-white dark:bg-slate-900 shadow-2xl rounded-2xl border border-gray-200 dark:border-gray-700 transition-colors">
        <h1 className="text-3xl font-bold mb-4 text-[#1e293b] dark:text-white">
          Welcome to AI Document Analyzer
        </h1>
        <div className="mt-0.5">
          <label htmlFor="username" className="text-[#1e293b] dark:text-gray-300 font-medium">
            Username
          </label>
          <input
            required
            id="username"
            type="text"
            placeholder="Enter username"
            className="border-2 border-gray-200 dark:border-gray-600 dark:bg-slate-800 dark:text-white mt-1 p-2 w-full rounded-lg focus:ring-2 focus:ring-[#7c3aed] focus:border-[#7c3aed] focus:outline-none transition-all"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div className="mt-0.5">
          <label htmlFor="password" className="text-[#1e293b] dark:text-gray-300 font-medium">
            Password
          </label>
          <input
            required
            id="password"
            type="password"
            placeholder="Enter Password"
            className="border-2 border-gray-200 mt-1 w-full p-2 rounded-lg focus:ring-2 focus:ring-[#7c3aed] focus:border-[#7c3aed] focus:outline-none transition-all"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="flex justify-between mt-8 gap-3">
          <button
            type="submit"
            className="bg-[#7c3aed] hover:bg-[#6d28d9] flex-1 p-2.5 rounded-lg text-white font-medium transition-all cursor-pointer shadow-md"
            onClick={handleSubmit}
          >
            Login
          </button>
          <Link to='/register' className="flex-1">
            <button
              type="submit"
              className="w-full h-full flex-1 border-2 max-w-50 p-2.5 rounded-lg border-[#1e293b] dark:border-gray-600 text-[#1e293b] dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800 font-semibold transition-all shadow-lg hover:shadow-xl cursor-pointer"
            >
              Create Account
            </button>
          </Link>
        </div>
      </div>
    </div>

  );
};

export default LoginPage;
