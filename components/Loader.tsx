import React from "react";

export const Loader = () => {
  return (
    <>
      <div className="fixed flex flex-grow items-center justify-center p-2 md:p-2  top-0 left-0 w-full h-full bg-black bg-opacity-50">
        <img src="./loader1.gif"
          className=" fixed top-[50%] left-[50%] w-[70px] h-[70px] translate-x-[-50%] translate-y-[-50%]"/>
      </div>
    </>
  );
};
