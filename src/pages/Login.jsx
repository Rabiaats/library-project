import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { useAuthContext } from "../context/AuthProvider";
import { Link } from "react-router-dom";
import { useDarkContext } from "../context/DarkProvider";

const Login = () => {
  const { signIn, googleProvider, forgotPassword } = useAuthContext();
  const { darkMode } = useDarkContext();
  const [info, setInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setInfo({ ...info, [e.target.name]: e.target.value });

  const { email, password } = info;

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(email, password);
  };

  return (
    <div className="flex justify-center">
      <div className="overflow-hidden flex-1 h-screen justify-center items-center dark:bg-gray-dark-main">
        <div className={`form-container mt-[5vh] w-[380px] h-[500px] `}>
          <form onSubmit={handleSubmit}>
            <h2 className="text-gray-950 dark:text-gray-100 text-2xl font-[500] text-center tracking-[0.1em] mb-3">
              Sign In
            </h2>
            <div className="relative z-0 w-full mb-6 group">
              <input
                name="email"
                className="peer"
                type="email"
                placeholder=" "
                required
                onChange={handleChange}
              />
              <label htmlFor="floating_email">Email</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                name="password"
                className="peer"
                type="password"
                placeholder=" "
                required
                onChange={handleChange}
              />
              <label htmlFor="floating_password">Password</label>
            </div>
            <div className="flex justify-between">
              <span
                onClick={() => forgotPassword(email)}
                className="py-3 font-[0.75em] cursor-pointer decoration-none text-gray-900 hover:text-gray-400 dark:text-gray-500 dark:hover:text-gray-100"
              >
                Forgot Password
              </span>
              <Link
                className="py-3 font-[0.75em] cursor-pointer decoration-none text-gray-900 hover:text-gray-400 dark:text-gray-500 dark:hover:text-gray-100"
                to="/register"
              >
                Sign Up
              </Link>
            </div>
            <button className="btn-danger" type="submit">
              Login
            </button>
            <button
              className="flex justify-between text-center items-center btn-danger"
              type="button"
              onClick={googleProvider}
            >
              Continue with Google
              <FaGoogle
                className={`text-white dark:text-black icon ${darkMode ? "dark-icon" : "light-icon"}`}
              />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
