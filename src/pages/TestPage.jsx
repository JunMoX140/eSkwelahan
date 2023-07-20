// eslint-disable-next-line no-unused-vars
import React from "react";
import DarkModeToggle from "../components/DarkModeToggle";
import ELogo from "../components/ELogo";

const TestPage = () => {
  return (
    <div className="">
      <h1 className=" bg-lm-primary text-lm-text ">
        {/*dark:bg-dark-bg dark:text-dark-text*/
        /*for dark mode test, if system is set to darkmode, just change the darkmode:"class" tp "media" in tailwind.confi.js*/}
        This is the test page to check for dark mode
      </h1>
      <h2 className=" bg-lm-bg text-dark-primary">another line</h2>
      <p className=" bg-lm-secondary text-lm-text dark:text-dark-accent dark:bg-dark-secondary">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident odio
        tenetur, repellat voluptas non magnam eaque nesciunt ipsa iusto animi.
      </p>
      <DarkModeToggle />
      <div className="w-10 h-10">
        <ELogo />
      </div>
    </div>
  );
};

export default TestPage;
