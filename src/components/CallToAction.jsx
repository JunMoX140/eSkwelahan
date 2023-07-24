import React from "react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <div className=" w-screen flex-cols-1 justify-between align-middle">
      <div className="mb-4">
        <Link to={"/login"}>
          <button className=" text-dark-text bg-lm-primary mx-auto px-4 text-2xl uppercase rounded-md">
            Login
          </button>
        </Link>
      </div>
      <div>
        <Link to={"/register"}>
          <p>Don&apos;t have an account? Sign Up</p>
        </Link>
      </div>
    </div>
  );
};

export default CallToAction;
