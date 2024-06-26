import React, { useRef } from "react";
import { useState } from "react";
import Header from "./Header";
import  formValidation  from "../utils/formValidation";
const Login = () => {
  const [isSignedIn, setIsSignedIn] = useState(true);
  const [errMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const handleButtonClick = (e) => {
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    const nameValue = name.current?.value;
    const errorMessage = formValidation(emailValue, passwordValue, nameValue);
    if (errorMessage) {
      setErrorMessage(errorMessage);
      return;
    }
    setErrorMessage(null);
    console.log(emailValue, passwordValue, nameValue);
  };
  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/41c789f0-7df5-4219-94c6-c66fe500590a/3149e5eb-4660-4e3d-9e65-b1e615229c64/IN-en-20240513-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="Netflix background"
        />
      </div>
      <div className="absolute right-0 left-0 w-4/12 mx-auto my-16 bg-black opacity-80 pb-16 pt-6 px-8 m-2 text-white rounded-md">
        <h1 className="text-2xl px-4 pt-2 pb-6 font-bold">
          {isSignedIn ? <>Sign In</> : <>Sign Up</>}
        </h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="px-4"
        >
          {!isSignedIn && (
            <>
              <input
                ref={name}
                type="text"
                placeholder="Name"
                className="w-full p-3 my-2  bg-slate-800 rounded-md"
              />
            </>
          )}
          <input
            ref={email}
            type="email"
            placeholder="Email"
            className="w-full p-3 my-2  bg-slate-800 rounded-md"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="w-full p-3 my-2  bg-slate-800 rounded-md"
          />
          <p className="text-red-500 text-sm">{errMessage}</p>
          <button
            onClick={handleButtonClick}
            className="w-full p-2 my-4 bg-red-600 text-white rounded-md"
          >
            {isSignedIn ? <>Sign In</> : <>Sign Up</>}
          </button>
        </form>
        <p
          onClick={() => setIsSignedIn(!isSignedIn)}
          className="px-4 pt-6 pb-2 text-sm"
        >
          {isSignedIn ? (
            <>
              New to Netflix?{" "}
              <span className=" cursor-pointer  font-bold">Sign up now.</span>
            </>
          ) : (
            <>
              Already a user?{" "}
              <span className=" cursor-pointer  font-bold">Sign in now</span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default Login;
