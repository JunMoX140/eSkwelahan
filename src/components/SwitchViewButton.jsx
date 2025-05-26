import { Button } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

function SwitchViewButton() {
  return (
    <div className=" flex justify-center bg-lm-bg pb-4">
      <div className="mr-2">
        <Link to={"/teacher"}>
          <Button className="bg-lm-primary text-lm-text">
            Teacher&apos;s View
          </Button>
        </Link>
      </div>
      <div className="ml-2">
        <Link to={"/student"}>
          <Button className="bg-lm-primary text-lm-text">
            Student&apos;s View
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default SwitchViewButton;
