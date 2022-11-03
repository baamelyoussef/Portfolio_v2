import React from "react";
import Image from "next/image";
import darkModePng from "../../assets/img/darkmode.png";
import lightModePng from "../../assets/img/lightmode.png";

function index(props) {
  return (
    <>
      <div className=" max-lg:hidden flex items-center justify-center pt-5 ">
        <div className="backdrop-blur-md blurryBg  drop-shadow-xl  flex justify-around w-1/2 h-10  rounded-full">
          <button
            className="mr-1 transition ease-in delay-100 bg-transparent w-32 text-black font-medium  hover:scale-105 transition ease-in hover:text-black active:bg-slate-200 border-none outline-none active:text-black  focus:bg-white focus:border-none focus:outline-none focus:text-black opacity-100 rounded-full"
            onClick={() => {
              props.updateNavigate("about");
            }}
          >
            About
          </button>
          <button
            className="mr-1 transition ease-in delay-100 bg-transparent w-32 text-black font-medium hover:scale-105 transition ease-in hover:text-black active:bg-slate-200 border-none outline-none active:text-black focus:bg-white focus:border-none focus:outline-none focus:text-black opacity-100 rounded-full"
            onClick={() => {
              props.updateNavigate("projects");
            }}
          >
            Projects
          </button>
          
          <button
            className="mr-1 transition ease-in delay-100 bg-transparent w-32 text-black font-medium hover:scale-105 transition ease-in hover:text-black active:bg-slate-200 border-none outline-none active:text-black focus:bg-white focus:border-none focus:outline-none focus:text-black opacity-100 rounded-full"
            onClick={() => {
              props.updateNavigate("media");
            }}
          >
            Media
          </button>
          
        </div>
      </div>
      <div className="lg:hidden max-sm:hidden flex items-center justify-center pt-5 ">
        <div className="backdrop-blur-md blurryBg  drop-shadow-xl  flex justify-around w-2/3 h-10  rounded-full">
          <button
            className="mr-1 transition ease-in delay-100 bg-transparent w-32 text-black font-medium  hover:scale-105 transition ease-in hover:text-black active:bg-slate-200 border-none outline-none active:text-black  focus:bg-white focus:border-none focus:outline-none focus:text-black opacity-100 rounded-full"
            onClick={() => {
              props.updateNavigate("about");
            }}
          >
            About
          </button>
          <button
            className="mr-1 transition ease-in delay-100 bg-transparent w-32 text-black font-medium hover:scale-105 transition ease-in hover:text-black active:bg-slate-200 border-none outline-none active:text-black focus:bg-white focus:border-none focus:outline-none focus:text-black opacity-100 rounded-full"
            onClick={() => {
              props.updateNavigate("projects");
            }}
          >
            Projects
          </button>
          
          <button
            className="mr-1 transition ease-in delay-100 bg-transparent w-32 text-black font-medium hover:scale-105 transition ease-in hover:text-black active:bg-slate-200 border-none outline-none active:text-black focus:bg-white focus:border-none focus:outline-none focus:text-black opacity-100 rounded-full"
            onClick={() => {
              props.updateNavigate("media");
            }}
          >
            Media
          </button>
          
        </div>
      </div>
      <div className="sm:hidden  flex items-center justify-center pt-5 ">
        <div className="backdrop-blur-md blurryBg  drop-shadow-xl  flex justify-around w-80 h-12  rounded-full">
          <button
            className="mr-1  delay-100 bg-transparent w-32 text-black font-medium  hover:scale-105 transition ease-in hover:text-black active:bg-slate-200 border-none outline-none active:text-black  focus:bg-white focus:border-none focus:outline-none focus:text-black opacity-100 rounded-full"
            onClick={() => {
              props.updateNavigate("about");
            }}
          >
            About
          </button>
          <button
            className="mr-1  delay-100 bg-transparent w-32 text-black font-medium hover:scale-105 transition ease-in hover:text-black active:bg-slate-200 border-none outline-none active:text-black focus:bg-white focus:border-none focus:outline-none focus:text-black opacity-100 rounded-full"
            onClick={() => {
              props.updateNavigate("projects");
            }}
          >
            Projects
          </button>

          <button
            className="mr-1 transition ease-in delay-100 bg-transparent w-32 text-black font-medium hover:scale-105 transition ease-in hover:text-black active:bg-slate-200 border-none outline-none active:text-black focus:bg-white focus:border-none focus:outline-none focus:text-black opacity-100 rounded-full"
            onClick={() => {
              props.updateNavigate("media");
            }}
          >
            Media
          </button>
        </div>
      </div>
    </>
  );
}

export default index;
