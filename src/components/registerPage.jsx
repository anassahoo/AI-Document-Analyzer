import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const navigate = useNavigate()
  const handleSubmit = (e) => {

    e.preventDefault();
    { if (password != repassword) { alert("Password and Re-enter Password does not match") } }
    console.log(username, password);
    const userData = { username, password };
    localStorage.setItem("userData", JSON.stringify(userData));
    if (username && password && repassword && (password == repassword)) {
      alert("Account is created successfully")
      navigate("/")
    }


  }
  return (
    <div className="flex items-center justify-center w-screen min-h-screen ">
      <div className="flex flex-col gap-4 border-none max-w-95 p-8 bg-white dark:bg-slate-900 shadow-2xl rounded-2xl border border-gray-200 dark:border-gray-700 transition-colors">
        <h1 className="text-3xl font-bold mb-4 text-[#1e293b] dark:text-white">
          Create Your Account
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
            className="border-2 border-gray-200 mt-1 p-2 w-full  rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 focus:outline-none transition-all"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div className="mt-0.5">
          <label htmlFor="password" className="text-[#1e293b] font-medium">
            Password
          </label>
          <input
            required
            id="password"
            type="password"
            placeholder="Enter Password"
            className="border-2 border-gray-200 mt-1 w-full  p-2 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 focus:outline-none transition-all"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="mt-0.5">
          <label htmlFor="re-password" className="text-[#1e293b] font-medium">
            Re-enter Password
          </label>
          <input
            required
            id="re-password"
            type="password"
            placeholder="Re-Enter Password"
            className="border-2 border-gray-200 mt-1 w-full  p-2 rounded-lg m-0.5 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 focus:outline-none transition-all"
            onChange={(e) => {
              setRePassword(e.target.value);
            }}
          />
          <div className="  flex justify-center w-full mt-8 ">
            
            <button
              type="submit"
              className="border-0 w-full max-w-80 p-2.5 rounded-lg bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-semibold transition-all shadow-lg cursor-pointer" onClick={handleSubmit}
            >
              Create Account
            </button>

          </div>

            <div className="text-center mt-5">
              <p>Already have an account?<Link to="/" className="text-[#7c3aed] font-bold underline" > Login</Link></p> 
            </div> 
        </div>
      </div>
    </div>

  );
};

export default RegisterPage;
