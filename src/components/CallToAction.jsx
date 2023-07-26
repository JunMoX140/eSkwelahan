import React from "react";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";

const CallToAction = () => {
  return (
    <div className=" w-screen flex-cols-1 justify-between align-middle">
      <div className="mb-4">
        <Link to={"/login"}>
          <Button className=" text-lm-text bg-lm-primary mx-auto px-4 text-2xl uppercase rounded-md">
            Login
          </Button>
        </Link>
      </div>
      <div>
        <Link
          to={"/register"}
          className=" text-lm-accent dark:text-dark-accent"
        >
          <p>Don&apos;t have an account? Sign Up</p>
        </Link>
      </div>
    </div>
  );
};

export default CallToAction;
