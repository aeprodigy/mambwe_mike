import React from "react";
import "./App.css";

const SecondPage = () => {
  return (
    <div className="h-screen">
      {/*Image starts HERE*/}
      <div className="bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mx-auto overflow-hidden">
        {/*<Image src={mikePic} layout="fill objectFit="cover" />" */}
        <h1 className=" text-2xl text-teal-500  text-center py-5 ">
          Image Missing here
        </h1>
      </div>
      <div>
        <h3 className="text-2xl py-1 ">Services I offer</h3>
        <p className="leading-8 text-md text-gray-500">
          Since I started my development journey as Software developer, I have
          developed these
          <span className="text-teal-500"> agencies </span>
          consulted for <span className="text-teal-500">Startups </span>
          and collaborated with talented people to create digital Products for
          both business and consumer use.
        </p>
      </div>
    </div>
  );
};

export default SecondPage;
