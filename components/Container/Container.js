import Image from "next/image";
import beachPic from "../../assets/img/beachPic.jpg";
import arrowRight from "../../assets/img/arrowRight.png";
import arrowLeft from "../../assets/img/arrowLeft.png";
import githubIcon from "../../assets/img/githubIcon.png";
import linkedinIcon from "../../assets/img/linkedinIcon.png";
import instagramIcon from "../../assets/img/instagramIcon.png";
import firebase from "../../assets/img/firebase.png";
import nikeEcom from "../../assets/img/nikeEcom.PNG";
import meMoji from "../../assets/img/memoji.png";
import np from "../../assets/img/np.png";
import horseRiding from "../../assets/img/horseRiding.png";
import react from "../../assets/img/react.png";
import surf from "../../assets/img/surf.png";
import okynewsletter from "../../assets/img/okynewsletter.png";
import redux from "../../assets/img/redux.png";
import nodejs from "../../assets/img/nodejs.png";
import vuejs from "../../assets/img/vuejs.png";
import huluclone from "../../assets/img/huluclone.png";
import vscode from "../../assets/img/vscode.png";
import external from "../../assets/img/external.png";
import githubblack from "../../assets/img/githubblack.png";
import npm from "../../assets/img/npm.png";
import c from "../../assets/img/c.svg";
import webpack from "../../assets/img/webpack.png";
import outmailer from "../../assets/img/outmailerScreen.PNG"
import tailwind from "../../assets/img/tailwind.png";
import docker from "../../assets/img/docker.png";
import express from "../../assets/img/express.png";
import postgresql from "../../assets/img/postgresql.png";
import sass from "../../assets/img/sass.png";
import nuxtjs from "../../assets/img/nuxtjs.png";
import nextjs from "../../assets/img/nextjs.png";
import git from "../../assets/img/git.png";
import jquery from "../../assets/img/jquery.png";
import typescript from "../../assets/img/typescript.png";
import runningShoes from "../../assets/img/runningShoes.png";
import laravel from "../../assets/img/laravel.png";
import mysql from "../../assets/img/mysql.png";
import javascriptOrigine from "../../assets/img/javascriptOrigine.png";
import pic1 from "../../assets/img/pic1.jpg";
import pic2 from "../../assets/img/pic2.jpg";
import pic3 from "../../assets/img/pic3.jpg";
import pic4 from "../../assets/img/pic4.jpg";
import { useState, useEffect } from "react";
function Container(props) {
  const [imageSlides, setImageSlides] = useState([
    beachPic,
    pic1,
    pic2,
    pic3,
    pic4,
  ]);

  const [slideIndex, setSlideIndex] = useState(0);
  const [displayedSlide, setDisplayedSlide] = useState(imageSlides[slideIndex]);
  const [displayedHobby, setDisplayedHobby] = useState(horseRiding);
  const nextSlide = () => {
    if (slideIndex == 4) {
      setSlideIndex(0);
    } else {
      setSlideIndex((slideIndex) => slideIndex + 1);
    }
    setDisplayedSlide(imageSlides[slideIndex]);
  };
  const backSlide = () => {
    if (slideIndex == 0) {
      setSlideIndex(4);
    } else {
      setSlideIndex((slideIndex) => slideIndex - 1);
    }
    setDisplayedSlide(imageSlides[slideIndex]);
  };
  const displayHobby = (index) => {
    if (index == 0) {
      setDisplayedHobby(horseRiding);
    }
    if (index == 1) {
      setDisplayedHobby(runningShoes);
    }
    if (index == 2) {
      setDisplayedHobby(surf);
    }
  };
  return (
    <div className="mb-5">
      {props.navigate == "about" && (
        <>
        <div 
        
        className=" max-lg:hidden  pt-6 p-4 grid place-content-center grid-cols-auto-fit grid-row-auto-fit auto-rows-max auto-cols-max grid-flow-rows grid-flow-col w-full h-full gap-3">
          <div className="p-4 row-span-2 col-span-2 w-full blurryBg  drop-shadow-xl rounded-2xl dark:bg-slate-700">
            <Image
              src={meMoji}
              width={150}
              height={165}
              className="rounded-2xl"
            />
            <h3 className="font-semibold text-slate-800">
              My name is{" "}
              <span className="bg-gradient-to-r from-black to-slate-500 text-transparent bg-clip-text">
                Youssef Baamel
              </span>{" "}
              & I&apos;m a
            </h3>
            <h1 className="text-4xl bg-gradient-to-r from-black to-slate-500 text-transparent bg-clip-text">
              <b>Front End Engineer</b>
            </h1>
            <p className="w-80 text-lg font-medium text-slate-800">
              Since my childhood i was always enthusiastic about technology and
              curious about how we can make software that people use just from a
              device.{" "}
              <span className="underline decoration-slate-500">4 years</span>{" "}
              later, when i first discovered programming i did not stop learning
              and exploring the field. and here i am a Front End Engineer.
            </p>
          </div>
          <div className="row-span-1 col-span-1">
            <div className="relative col-span-1 row-span-1 w-64 h-64 bg-white drop-shadow-xl rounded-2xl">
              <button
                className="pt-1 pr-1 transition ease-in delay-100 hover:ring-2 ring-transparent ring-offset-4 ring-offset-orange-100 absolute z-40 bg-transparent w-10 rounded-full bottom-2 left-2 "
                onClick={backSlide}
              >
                <Image
                  src={arrowLeft}
                  width={30}
                  height={30}
                  className=" rounded-2xl"
                />
              </button>
              <button
                className="pt-1 pl-1 transition ease-in delay-100 hover:ring-2 ring-transparent ring-offset-4 ring-offset-orange-100 absolute z-40  bg-transparent w-10 rounded-full bottom-2 right-2"
                onClick={nextSlide}
              >
                <Image
                  src={arrowRight}
                  width={30}
                  height={30}
                  className=" rounded-2xl"
                />
              </button>
              
              <Image
                src={displayedSlide}
                width={260}
                height={260}
                className="rounded-2xl"
              />
            </div>
          </div>
          <div className="row-span-1 col-span-2 blurryBg rounded-2xl p-3 pl-6">
            <p className="mb-2 flex w-full justify-center text-3xl font-semibold bg-gradient-to-r from-black to-slate-500 text-transparent bg-clip-text">
                {" "}
                Skills{" "}
              </p>
              
              <div className=" translate ease-in delay-100 grid grid-rows-4 grid-flow-col gap-0">
                {" "}
                <div className="text-center" >
                  <Image src={javascriptOrigine} width={40} height={40} />
                </div>{" "}
                <div className="text-center">
                  {" "}
                  <Image src={react} width={40} height={40} />{" "}
                </div>{" "}
                <div className="text-center">
                  {" "}
                  <Image src={typescript} width={40} height={40} />{" "}
                </div>{" "}
                <div className="text-center">
                  {" "}
                  <Image src={nodejs} width={40} height={40} />{" "}
                </div>{" "}
                <div className="text-center">
                  {" "}
                  <Image src={nextjs} width={40} height={40} />{" "}
                </div>{" "}
                <div className="text-center">
                  {" "}
                  <Image src={redux} width={40} height={40} />{" "}
                </div>{" "}
                <div className="text-center">
                  {" "}
                  <Image src={vuejs} width={40} height={40} />{" "}
                </div>{" "}
                <div className="text-center">
                  {" "}
                  <Image src={sass} width={40} height={40} />{" "}
                </div>{" "}
                <div className="text-center">
                  {" "}
                  <Image src={nuxtjs} width={40} height={40} />{" "}
                </div>
                <div className="text-center">
                  {" "}
                  <Image src={tailwind} width={40} height={40} />{" "}
                </div>{" "}
                
                <div className="text-center">
                  {" "}
                  <Image src={git} width={40} height={40} />{" "}
                </div>{" "}
                <div className="text-center">
                  {" "}
                  <Image src={jquery} width={40} height={40} />{" "}
                </div>{" "}
                {" "}
                
              </div>
          </div>
          <div 
          style={{
            width:"230px" 
          }}  
          className=" row-span-1 col-span-1 ">
            <div className="relative p-4 col-span-1 row-span-1 w-full h-full blurryBg drop-shadow-xl rounded-2xl">
              <p className="text-3xl font-semibold bg-gradient-to-r from-black to-slate-500 text-transparent bg-clip-text">
                Hobbies
              </p>
              <ul className="mt-4 absolute   z-40">
                <li>
                  <p
                    className="whitespace-nowrap text-2xl font-semibold cursor-pointer text-slate-700 hover:text-white "
                    onClick={() => displayHobby(0)}
                  >
                    Horse Riding
                  </p>
                </li>
                <li>
                  <p
                    className="whitespace-nowrap text-2xl font-semibold cursor-pointer text-slate-700 hover:text-white"
                    onClick={() => displayHobby(1)}
                  >
                    Running
                  </p>
                </li>
                <li>
                  <p
                    className="whitespace-nowrap text-2xl font-semibold cursor-pointer text-slate-700 hover:text-white"
                    onClick={() => displayHobby(2)}
                  >
                    Surfing
                  </p>
                </li>
              </ul>
              <button 
                style={{
                  position:"absolute",
                  right:"-12px",
                  bottom:"-20px"

                }}
              className="pt-1 pl-1  absolute z-0  bg-transparent w-auto translate ease-in delay-100 rounded-full bottom-0 right-0">
                <Image
                  src={displayedHobby}
                  width={170}
                  height={170}
                  className="translate ease-in delay-100"
                />
              </button>
            </div>
          </div>
          
          <div className=" row-span-2 col-span-auto w-56">
            <div
            style={{
              height: "565px",
    overflowY: "scroll"}}
            className="customScroll relative p-4 col-span-1 row-span-1 w-full h-full blurryBg drop-shadow-xl rounded-2xl">
            <p className="pb-4 text-3xl font-semibold bg-gradient-to-r from-black to-slate-500 text-transparent bg-clip-text">
              Experience
            </p> 
<ol className="relative border-l border-slate-700 dark:border-gray-200">                  
    <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3  rounded-full mt-1.5 -left-1.5 border border-white   bg-gray-700 dark:border-gray-900 dark:bg-gray-200"></div>
        <time className="mb-1 mt-0 text-base font-medium leading-none text-slate-700 dark:text-gray-500">December 2018 - January 2020</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-slate-700">Front End Developer</h3>
        <time className="mb-1 mt-0 text-base font-medium leading-none text-slate-800 dark:text-gray-500">Freelance</time>
        <p className="mb-4 text-base font-medium text-slate-700 dark:text-gray-400">From working with clients from my local network to serving big SaaS companies and agencies worldwide with my skillset</p>
    </li>
    <li className="mb-10 ml-4">
    <div className="absolute w-3 h-3  rounded-full mt-1.5 -left-1.5 border border-white   bg-gray-700 dark:border-gray-900 dark:bg-gray-200"></div>
        <time className="mb-1 mt-0 text-base font-medium leading-none text-slate-700 dark:text-gray-500">January 2020 - April 2021</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-slate-700">Front End Developer</h3>
        <time className="mb-1 mt-0 text-base font-medium leading-none text-slate-800 dark:text-gray-500">Hei-Tech Graphic</time>
        <p className="mb-4 text-base font-medium text-slate-700 dark:text-gray-400"> 
	Maintained complex technology infrastructure and collaborated with product team to implement new features and strategically plan with test driven development for future products.
</p>
    </li>
    <li className="mb-10 ml-4">
    <div className="absolute w-3 h-3  rounded-full mt-1.5 -left-1.5 border border-white   bg-gray-700 dark:border-gray-900 dark:bg-gray-200"></div>
        <time className="mb-1 mt-0 text-base font-medium leading-none text-slate-700 dark:text-gray-500">April 2021 - February 2022</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-slate-700">Front End Developer</h3>
        <time className="mb-1 mt-0 text-base font-medium leading-none text-slate-800 dark:text-gray-500">Oky Solutions</time>
        <p className="mb-4 text-base font-medium text-slate-700 dark:text-gray-400">Designed and developed efficient and maintainable software that automates the generation of newsletters sent to clients according to business objectives and needs of various clients. </p>
    </li>
    <li className="ml-4">
    <div className="absolute w-3 h-3  rounded-full mt-1.5 -left-1.5 border border-white   bg-gray-700 dark:border-gray-900 dark:bg-gray-200"></div>
        <time className="mb-1 mt-0 text-base font-medium leading-none text-slate-700 dark:text-gray-500">Mars 2022 - Now</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-slate-700">Front End Engineer</h3>
        <time className="mb-1 mt-0 text-base font-medium leading-none text-slate-800 dark:text-gray-500">Algo Consulting Group</time>
        <p className="mb-4 text-base font-medium text-slate-700 dark:text-gray-400">I worked as a font end engineer and consultant for algo consulting group building web solutions (e-commerce platform for train ticket shopping) for huge clients like ONCF which is Morocco&apos;s national railway operator and that was a big milestone for me</p>
    </li>
</ol>

            </div>
          </div>
  
          
          {/* <div className="p-5 row-span-auto col-span-auto bg-white w-60  rounded-2xl shadow-lg">
            <p className="pb-4 text-3xl font-semibold bg-gradient-to-r from-black to-slate-500 text-transparent bg-clip-text">
              Tools
            </p>
            <div className=" grid grid-cols-3 gap-4">
              <Image src={vscode} width={50} height={50} />
              <Image src={docker} width={60} height={50} />
              <Image src={npm} width={50} height={50} />
            </div>
          </div> */}
        </div>
        <div 
        
        className="lg:hidden max-sm:hidden  pt-6 p-4 grid place-content-center grid-cols-auto-fit grid-row-auto-fit auto-rows-max  w-full h-full gap-3">
          <div className="p-4 text-center row-span-2 col-span-2 w-full blurryBg  drop-shadow-xl rounded-2xl dark:bg-slate-700">
            <Image
              src={meMoji}
              width={150}
              height={165}
              className="rounded-2xl"
            />
            <h3 className="font-semibold text-slate-800">
              My name is{" "}
              <span className="bg-gradient-to-r from-black to-slate-500 text-transparent bg-clip-text">
                Youssef Baamel
              </span>{" "}
              & I&apos;m a
            </h3>
            <h1 className="text-4xl bg-gradient-to-r from-black to-slate-500 text-transparent bg-clip-text">
              <b>Front End Engineer</b>
            </h1>
            <p className="mt-2 w-96 text-lg font-medium text-slate-800 text-left">
              Since my childhood i was always enthusiastic about technology and
              curious about how we can make software that people use just from a
              device.{" "}
              <span className="underline decoration-slate-500">4 years</span>{" "}
              later, when i first discovered programming i did not stop learning
              and exploring the field. and here i am a Front End Engineer.
            </p>
          </div>
          <div className="row-span-1 col-span-1">
            <div className="relative col-span-1 row-span-1 w-64 h-64 bg-white drop-shadow-xl rounded-2xl">
              <button
                className="pt-1 pr-1 transition ease-in delay-100 hover:ring-2 ring-transparent ring-offset-4 ring-offset-orange-100 absolute z-40 bg-transparent w-10 rounded-full bottom-2 left-2 "
                onClick={backSlide}
              >
                <Image
                  src={arrowLeft}
                  width={30}
                  height={30}
                  className=" rounded-2xl"
                />
              </button>
              <button
                className="pt-1 pl-1 transition ease-in delay-100 hover:ring-2 ring-transparent ring-offset-4 ring-offset-orange-100 absolute z-40  bg-transparent w-10 rounded-full bottom-2 right-2"
                onClick={nextSlide}
              >
                <Image
                  src={arrowRight}
                  width={30}
                  height={30}
                  className=" rounded-2xl"
                />
              </button>
              
              <Image
                src={displayedSlide}
                width={260}
                height={260}
                className="rounded-2xl"
              />
            </div>
          </div>
          <div 
          style={{
            width:"230px" 
          }}  
          className=" row-span-1 col-span-1 ">
            <div className="relative p-4 col-span-1 row-span-1 w-full h-full blurryBg drop-shadow-xl rounded-2xl">
              <p className="text-3xl font-semibold bg-gradient-to-r from-black to-slate-500 text-transparent bg-clip-text">
                Hobbies
              </p>
              <ul className="mt-4 absolute   z-40">
                <li>
                  <p
                    className="whitespace-nowrap text-2xl font-semibold cursor-pointer text-slate-700 hover:text-white "
                    onClick={() => displayHobby(0)}
                  >
                    Horse Riding
                  </p>
                </li>
                <li>
                  <p
                    className="whitespace-nowrap text-2xl font-semibold cursor-pointer text-slate-700 hover:text-white"
                    onClick={() => displayHobby(1)}
                  >
                    Running
                  </p>
                </li>
                <li>
                  <p
                    className="whitespace-nowrap text-2xl font-semibold cursor-pointer text-slate-700 hover:text-white"
                    onClick={() => displayHobby(2)}
                  >
                    Surfing
                  </p>
                </li>
              </ul>
              <button 
                style={{
                  position:"absolute",
                  right:"-12px",
                  bottom:"-20px"

                }}
              className="pt-1 pl-1  absolute z-0  bg-transparent w-auto translate ease-in delay-100 rounded-full bottom-0 right-0">
                <Image
                  src={displayedHobby}
                  width={170}
                  height={170}
                  className="translate ease-in delay-100"
                />
              </button>
            </div>
          </div>
          <div className="row-span-1 col-span-2 blurryBg rounded-2xl p-3 pl-6">
            <p className="mb-2 flex w-full justify-center text-3xl font-semibold bg-gradient-to-r from-black to-slate-500 text-transparent bg-clip-text">
                {" "}
                Skills{" "}
              </p>
              
              <div className=" translate ease-in delay-100 grid grid-rows-4 grid-flow-col gap-0">
                {" "}
                <div className="text-center" >
                  <Image src={javascriptOrigine} width={40} height={40} />
                </div>{" "}
                <div className="text-center">
                  {" "}
                  <Image src={react} width={40} height={40} />{" "}
                </div>{" "}
                <div className="text-center">
                  {" "}
                  <Image src={typescript} width={40} height={40} />{" "}
                </div>{" "}
                <div className="text-center">
                  {" "}
                  <Image src={nodejs} width={40} height={40} />{" "}
                </div>{" "}
                <div className="text-center">
                  {" "}
                  <Image src={nextjs} width={40} height={40} />{" "}
                </div>{" "}
                <div className="text-center">
                  {" "}
                  <Image src={redux} width={40} height={40} />{" "}
                </div>{" "}
                <div className="text-center">
                  {" "}
                  <Image src={vuejs} width={40} height={40} />{" "}
                </div>{" "}
                <div className="text-center">
                  {" "}
                  <Image src={sass} width={40} height={40} />{" "}
                </div>{" "}
                <div className="text-center">
                  {" "}
                  <Image src={nuxtjs} width={40} height={40} />{" "}
                </div>
                <div className="text-center">
                  {" "}
                  <Image src={tailwind} width={40} height={40} />{" "}
                </div>{" "}
                
                <div className="text-center">
                  {" "}
                  <Image src={git} width={40} height={40} />{" "}
                </div>{" "}
                <div className="text-center">
                  {" "}
                  <Image src={jquery} width={40} height={40} />{" "}
                </div>{" "}
                {" "}
                
              </div>
          </div>
          
          
          <div 
          style={{
            width:"497px !important" 
          }}
          className=" row-span-2 col-span-2 ">
            <div
            style={{
              height: "465px",
    overflowY: "scroll"}}
            className="customScroll relative p-4 col-span-1 row-span-1 w-full h-full blurryBg drop-shadow-xl rounded-2xl">
            <p className="pb-4 text-3xl font-semibold bg-gradient-to-r from-black to-slate-500 text-transparent bg-clip-text">
              Experience
            </p> 
<ol className="relative border-l border-slate-700 dark:border-gray-200">                  
    <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3  rounded-full mt-1.5 -left-1.5 border border-white   bg-gray-700 dark:border-gray-900 dark:bg-gray-200"></div>
        <time className="mb-1 mt-0 text-base font-medium leading-none text-slate-700 dark:text-gray-500">February 2022</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-slate-700">Application UI code in Tailwind CSS</h3>
        <p className="mb-4 text-base font-medium text-slate-700 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce &amp; Marketing pages.</p>
    </li>
    <li className="mb-10 ml-4">
    <div className="absolute w-3 h-3  rounded-full mt-1.5 -left-1.5 border border-white   bg-gray-700 dark:border-gray-900 dark:bg-gray-200"></div>
        <time className="mb-1 mt-0 text-base font-medium leading-none text-slate-700 dark:text-gray-500">February 2022</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-slate-700">Application UI code in Tailwind CSS</h3>
        <p className="mb-4 text-base font-medium text-slate-700 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce &amp; Marketing pages.</p>
    </li>
    <li className="mb-10 ml-4">
    <div className="absolute w-3 h-3  rounded-full mt-1.5 -left-1.5 border border-white   bg-gray-700 dark:border-gray-900 dark:bg-gray-200"></div>
        <time className="mb-1 mt-0 text-base font-medium leading-none text-slate-700 dark:text-gray-500">February 2022</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-slate-700">Application UI code in Tailwind CSS</h3>
        <p className="mb-4 text-base font-medium text-slate-700 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce &amp; Marketing pages.</p>
    </li>
    <li className="ml-4">
    <div className="absolute w-3 h-3  rounded-full mt-1.5 -left-1.5 border border-white   bg-gray-700 dark:border-gray-900 dark:bg-gray-200"></div>
        <time className="mb-1 mt-0 text-base font-medium leading-none text-slate-700 dark:text-gray-500">February 2022</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-slate-700">Application UI code in Tailwind CSS</h3>
        <p className="mb-4 text-base font-medium text-slate-700 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce &amp; Marketing pages.</p>
    </li>
</ol>

            </div>
          </div>
  
          
          {/* <div className="p-5 row-span-auto col-span-auto bg-white w-60  rounded-2xl shadow-lg">
            <p className="pb-4 text-3xl font-semibold bg-gradient-to-r from-black to-slate-500 text-transparent bg-clip-text">
              Tools
            </p>
            <div className=" grid grid-cols-3 gap-4">
              <Image src={vscode} width={50} height={50} />
              <Image src={docker} width={60} height={50} />
              <Image src={npm} width={50} height={50} />
            </div>
          </div> */}
        </div>
        <div 
        style={{
          margin: "auto !important" 
        }}
        className="sm:hidden p-4 flex flex-col items-center  justify-center justify-items-center  w-full h-full gap-3">
          <div className="p-4 text-center  w-72 blurryBg  drop-shadow-xl rounded-2xl dark:bg-slate-700">
            <Image
              src={meMoji}
              width={150}
              height={165}
              className="rounded-2xl"
            />
            <h3 className="font-semibold text-slate-800">
              My name is{" "}
              <span className="bg-gradient-to-r from-black to-slate-500 text-transparent bg-clip-text">
                Youssef Baamel
              </span>{" "}
              & I&apos;m a
            </h3>
            <h1 className="text-4xl bg-gradient-to-r from-black to-slate-500 text-transparent bg-clip-text">
              <b>Front End Engineer</b>
            </h1>
            <p className="mt-2  text-lg font-medium text-slate-800 text-left">
              Since my childhood i was always enthusiastic about technology and
              curious about how we can make software that people use just from a
              device.{" "}
              <span className="underline decoration-slate-500">4 years</span>{" "}
              later, when i first discovered programming i did not stop learning
              and exploring the field. and here i am a Front End Engineer.
            </p>
          </div>
          <div className=" row-span-1 col-span-1">
            <div className="relative col-span-1 row-span-1 w-72 h-64 bg-white drop-shadow-xl rounded-2xl">
              <button
                className="pt-1 pr-1 transition ease-in delay-100 hover:ring-2 ring-transparent ring-offset-4 ring-offset-orange-100 absolute z-40 bg-transparent w-10 rounded-full bottom-2 left-2 "
                onClick={backSlide}
              >
                <Image
                  src={arrowLeft}
                  width={30}
                  height={30}
                  className=" rounded-2xl"
                />
              </button>
              <button
                className="pt-1 pl-1 transition ease-in delay-100 hover:ring-2 ring-transparent ring-offset-4 ring-offset-orange-100 absolute z-40  bg-transparent w-10 rounded-full bottom-2 right-2"
                onClick={nextSlide}
              >
                <Image
                  src={arrowRight}
                  width={30}
                  height={30}
                  className=" rounded-2xl"
                />
              </button>
              
              <Image
                src={displayedSlide}
                width={290}
                height={260}
                className="rounded-2xl"
              />
            </div>
          </div>
          <div 
            
          className=" row-span-1 col-span-1 ">
            <div className="relative p-4 col-span-1 row-span-1 w-72 h-64 blurryBg drop-shadow-xl rounded-2xl">
              <p className="text-3xl font-semibold bg-gradient-to-r from-black to-slate-500 text-transparent bg-clip-text">
                Hobbies
              </p>
              <ul className="mt-4 absolute   z-40">
                <li>
                  <p
                    className="whitespace-nowrap text-2xl font-semibold cursor-pointer text-slate-700 hover:text-white "
                    onClick={() => displayHobby(0)}
                  >
                    Horse Riding
                  </p>
                </li>
                <li>
                  <p
                    className="whitespace-nowrap text-2xl font-semibold cursor-pointer text-slate-700 hover:text-white"
                    onClick={() => displayHobby(1)}
                  >
                    Running
                  </p>
                </li>
                <li>
                  <p
                    className="whitespace-nowrap text-2xl font-semibold cursor-pointer text-slate-700 hover:text-white"
                    onClick={() => displayHobby(2)}
                  >
                    Surfing
                  </p>
                </li>
              </ul>
              <button 
                style={{
                  position:"absolute",
                  right:"-12px",
                  bottom:"-20px"

                }}
              className="pt-1 pl-1  absolute z-0  bg-transparent w-auto translate ease-in delay-100 rounded-full bottom-0 right-0">
                <Image
                  src={displayedHobby}
                  width={170}
                  height={170}
                  className="translate ease-in delay-100"
                />
              </button>
            </div>
          </div>
          <div className=" auto-rows-min auto-cols-min blurryBg w-72 rounded-2xl p-3 pl-6">
            <p className="mb-2 flex w-full justify-center text-3xl font-semibold bg-gradient-to-r from-black to-slate-500 text-transparent bg-clip-text">
                {" "}
                Skills{" "}
              </p>
              
              <div className=" translate ease-in delay-100 grid grid-rows-4 grid-flow-col gap-0">
                {" "}
                <div className="text-center" >
                  <Image src={javascriptOrigine} width={40} height={40} />
                </div>{" "}
                <div className="text-center">
                  {" "}
                  <Image src={react} width={40} height={40} />{" "}
                </div>{" "}
                <div className="text-center">
                  {" "}
                  <Image src={typescript} width={40} height={40} />{" "}
                </div>{" "}
                <div className="text-center">
                  {" "}
                  <Image src={nodejs} width={40} height={40} />{" "}
                </div>{" "}
                <div className="text-center">
                  {" "}
                  <Image src={nextjs} width={40} height={40} />{" "}
                </div>{" "}
                <div className="text-center">
                  {" "}
                  <Image src={redux} width={40} height={40} />{" "}
                </div>{" "}
                <div className="text-center">
                  {" "}
                  <Image src={vuejs} width={40} height={40} />{" "}
                </div>{" "}
                <div className="text-center">
                  {" "}
                  <Image src={sass} width={40} height={40} />{" "}
                </div>{" "}
                <div className="text-center">
                  {" "}
                  <Image src={nuxtjs} width={40} height={40} />{" "}
                </div>
                <div className="text-center">
                  {" "}
                  <Image src={tailwind} width={40} height={40} />{" "}
                </div>{" "}
                
                <div className="text-center">
                  {" "}
                  <Image src={git} width={40} height={40} />{" "}
                </div>{" "}
                <div className="text-center">
                  {" "}
                  <Image src={jquery} width={40} height={40} />{" "}
                </div>{" "}
                {" "}
                
              </div>
          </div>
          
          
          <div 
          
          className="justify-self-center row-span-2 col-span-2 ">
            <div
            style={{
              height: "465px",
    overflowY: "scroll"}}
            className="customScroll relative p-4 col-span-1 row-span-1 w-72 h-full blurryBg drop-shadow-xl rounded-2xl">
            <p className="pb-4 text-3xl font-semibold bg-gradient-to-r from-black to-slate-500 text-transparent bg-clip-text">
              Experience
            </p> 
<ol className="relative border-l border-slate-700 dark:border-gray-200">                  
    <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3  rounded-full mt-1.5 -left-1.5 border border-white   bg-gray-700 dark:border-gray-900 dark:bg-gray-200"></div>
        <time className="mb-1 mt-0 text-base font-medium leading-none text-slate-700 dark:text-gray-500">February 2022</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-slate-700">Application UI code in Tailwind CSS</h3>
        <p className="mb-4 text-base font-medium text-slate-700 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce &amp; Marketing pages.</p>
    </li>
    <li className="mb-10 ml-4">
    <div className="absolute w-3 h-3  rounded-full mt-1.5 -left-1.5 border border-white   bg-gray-700 dark:border-gray-900 dark:bg-gray-200"></div>
        <time className="mb-1 mt-0 text-base font-medium leading-none text-slate-700 dark:text-gray-500">February 2022</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-slate-700">Application UI code in Tailwind CSS</h3>
        <p className="mb-4 text-base font-medium text-slate-700 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce &amp; Marketing pages.</p>
    </li>
    <li className="mb-10 ml-4">
    <div className="absolute w-3 h-3  rounded-full mt-1.5 -left-1.5 border border-white   bg-gray-700 dark:border-gray-900 dark:bg-gray-200"></div>
        <time className="mb-1 mt-0 text-base font-medium leading-none text-slate-700 dark:text-gray-500">February 2022</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-slate-700">Application UI code in Tailwind CSS</h3>
        <p className="mb-4 text-base font-medium text-slate-700 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce &amp; Marketing pages.</p>
    </li>
    <li className="ml-4">
    <div className="absolute w-3 h-3  rounded-full mt-1.5 -left-1.5 border border-white   bg-gray-700 dark:border-gray-900 dark:bg-gray-200"></div>
        <time className="mb-1 mt-0 text-base font-medium leading-none text-slate-700 dark:text-gray-500">February 2022</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-slate-700">Application UI code in Tailwind CSS</h3>
        <p className="mb-4 text-base font-medium text-slate-700 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce &amp; Marketing pages.</p>
    </li>
</ol>

            </div>
          </div>
  
          
          {/* <div className="p-5 row-span-auto col-span-auto bg-white w-60  rounded-2xl shadow-lg">
            <p className="pb-4 text-3xl font-semibold bg-gradient-to-r from-black to-slate-500 text-transparent bg-clip-text">
              Tools
            </p>
            <div className=" grid grid-cols-3 gap-4">
              <Image src={vscode} width={50} height={50} />
              <Image src={docker} width={60} height={50} />
              <Image src={npm} width={50} height={50} />
            </div>
          </div> */}
        </div>
        </>
        
      )}
      {props.navigate == "projects" && (
        <>
          <div
            style={{
                width: "100%",
  height: "100%",
  overflowY: "hidden",
  overflowX: "auto",
            }}
          className="customScroll container pt-6 p-4 flex  grid-cols-auto-fit grid-row-auto-fit auto-rows-max auto-cols-max grid-flow-rows grid-flow-col w-full gap-3">
            <div 
            className=" row-span-2 blurryBg  w-full rounded-2xl">
              <div className="maxCW p-4">
                <div className="pb-3">
                  <p className=" text-xl text-slate-700">Project</p>
                  <p className=" text-2xl font-semibold bg-gradient-to-r from-black to-slate-400 text-transparent bg-clip-text">
                    Movie Trends <br/>(Hulu Clone)
                  </p>
                </div>
                <p className=" text-xl text-slate-700 mb-1">
                  Technologies used
                </p>
                <div className="flex justify-evenly">
                  <Image src={javascriptOrigine} width={30} height={30} />
                  <Image src={nextjs} width={30} height={30} />
                  <Image src={react} width={30} height={30} />
                  <Image src={tailwind} width={30} height={30} />
                </div>
                <div className="mt-3">
                  <Image
                    src={huluclone}
                    width={280}
                    height={200}
                    className="rounded-2xl"
                  />
                </div>
                <div className="mt-2">
                  <button 
                  onClick={()=>{window.open("https://hulu-clone-seven-eta.vercel.app/", "_blank");}}
                  className="bg-black hover:scale-105 transition ease-in w-full flex shadow-lg justify-center  p-1 rounded-full">
                    <p className="text-lg text-white bg-black">View Project</p>
                    <div className="ml-2 mt-1">
                      <Image src={external} width={21} height={21} />
                    </div>
                  </button>
                  <button 
                  onClick={()=>{window.open("https://github.com/baamelyoussef/Hulu-clone", "_blank");}}
                  className="bg-black mt-2 hover:scale-105 transition ease-in w-full flex justify-center shadow-lg p-1 rounded-full">
                    <p className="text-lg text-white bg-black">Check on Github</p>
                    <div className="ml-2 mt-1">
                      <Image src={githubIcon} width={17} height={17} />
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div 
            className=" row-span-2 blurryBg  w-full rounded-2xl">
              <div className="maxCW p-4">
                <div className="pb-3">
                  <p className=" text-xl text-slate-700">Project</p>
                  <p className=" text-2xl font-semibold bg-gradient-to-r from-black to-slate-400 text-transparent bg-clip-text">
                  Organization <br></br> Funding  App
                  </p>
                </div>
                <p className=" text-xl text-slate-700 mb-1">
                  Technologies used
                </p>
                <div className="flex justify-evenly">
                <Image src={javascriptOrigine} width={30} height={30} />
                  {/* <Image src={vuetify} width={30} height={30} /> */}
                  <Image src={vuejs} width={30} height={30} />
                  <Image src={tailwind} width={30} height={30} />
                </div>
                <div className="mt-3">
                  <Image
                    src={np}
                    width={280}
                    height={200}
                    className="rounded-2xl"
                  />
                </div><div className="mt-2">
                  
                  <button 
                  onClick={()=>{window.open("https://npoproject.netlify.app/", "_blank");}}
                  className="bg-black hover:scale-105 transition ease-in w-full flex shadow-lg justify-center  p-1 rounded-full">
                    <p className="text-lg text-white bg-black">View Project</p>
                    <div className="ml-2 mt-1">
                      <Image src={external} width={21} height={21} />
                    </div>
                  </button>
                  <button 
                  onClick={()=>{window.open("https://github.com/baamelyoussef/NPO-vue", "_blank");}}
                  className="bg-black mt-2 hover:scale-105 transition ease-in w-full flex justify-center shadow-lg p-1 rounded-full">
                    <p className="text-lg text-white bg-black">Check on Github</p>
                    <div className="ml-2 mt-1">
                      <Image src={githubIcon} width={17} height={17} />
                    </div>
                  </button>
                </div>
                
              </div>
            </div>           
            <div className=" row-span-2  blurryBg w-full rounded-2xl">
              <div className="maxCW p-4">
                <div className="pb-3 "
                  style={{
                    width:"200px !important"
                  }}>
                  <p className=" text-xl text-slate-700">Project</p>
                  <p className=" text-2xl font-semibold bg-gradient-to-r from-black to-slate-700 text-transparent bg-clip-text">
                  Newsletter Management <br></br> & Generation
                  </p>
                </div>
                <p className=" text-xl text-slate-700 mb-1">
                  Technologies used
                </p>
                <div className="flex justify-evenly">
                  <Image src={javascriptOrigine} width={30} height={30} />
                  {/* <Image src={vuetify} width={30} height={30} /> */}
                  <Image src={vuejs} width={30} height={30} />
                  <Image src={sass} width={30} height={30} />
                </div>
                <div className="mt-3">
                  <Image
                    src={okynewsletter}
                    width={280}
                    height={200}
                    className="rounded-2xl"
                  />
                </div>
                <div className="mt-2">
                  <button 
                  onClick={()=>{window.open("https://www.okynewslettersdemo.000webhostapp.com", "_blank");}}

                  className="bg-black hover:scale-105 transition ease-in w-full flex shadow-lg justify-center  p-1 rounded-full">
                    <p className="text-lg text-white bg-black">View Project</p>
                    <div className="ml-2 mt-1">
                      <Image src={external} width={21} height={21} />
                    </div>
                  </button>
                  <button 
                  onClick={()=>{window.open("https://github.com/baamelyoussef/OkyNewsletters", "_blank");}}
                  className="bg-black mt-2 hover:scale-105 transition ease-in w-full flex justify-center shadow-lg p-1 rounded-full">
                    <p className="text-lg text-white bg-black">Check on Github</p>
                    <div className="ml-2 mt-1">
                      <Image src={githubIcon} width={17} height={17} />
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className=" row-span-2  blurryBg w-full rounded-2xl">
              <div className="maxCW p-4">
                <div className="pb-3 "
                  style={{
                    width:"200px !important"
                  }}>
                  <p className=" text-xl text-slate-700">Project</p>
                  <p className=" text-2xl font-semibold bg-gradient-to-r from-black to-slate-700 text-transparent bg-clip-text">
                  Outmailer : Detect spam<br></br> & faulsy emails
                  </p>
                </div>
                <p className=" text-xl text-slate-700 mb-1">
                  Technologies used
                </p>
                <div className="flex justify-evenly">
                  <Image src={javascriptOrigine} width={30} height={30} />
                  {/* <Image src={vuetify} width={30} height={30} /> */}
                  <Image src={nextjs} width={30} height={30} />
                  <Image src={react} width={30} height={30} />
                  <Image src={typescript} width={30} height={30} />
                </div>
                <div className="mt-3">
                  <Image
                    src={outmailer}
                    width={280}
                    height={200}
                    className="rounded-2xl"
                  />
                </div>
                <div className="mt-2">
                  <button
                  onClick={()=>{window.open("https://outmailer.vercel.app/home", "_blank");}}
                  className="bg-black hover:scale-105 transition ease-in w-full flex shadow-lg justify-center  p-1 rounded-full">
                    <p className="text-lg text-white bg-black">View Project</p>
                    <div className="ml-2 mt-1">
                      <Image src={external} width={21} height={21} />
                    </div>
                  </button>
                  <button 
                                      onClick={()=>{window.open("https://github.com/baamelyoussef/Outmailer", "_blank");}}
                  className="bg-black mt-2 hover:scale-105 transition ease-in w-full flex justify-center shadow-lg p-1 rounded-full">
                    <p className="text-lg text-white bg-black">Check on Github</p>
                    <div className="ml-2 mt-1">
                      <Image src={githubIcon} width={17} height={17} />
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className=" row-span-2  blurryBg w-full rounded-2xl">
              <div className="maxCW p-4">
                <div className="pb-3 "
                  style={{
                    width:"200px !important"
                  }}>
                  <p className=" text-xl text-slate-700">Project</p>
                  <p className=" text-2xl font-semibold bg-gradient-to-r from-black to-slate-700 text-transparent bg-clip-text">
                  Sneakers eCommerce <br></br>store (Nike Inspired)
                  </p>
                </div>
                <p className=" text-xl text-slate-700 mb-1">
                  Technologies used
                </p>
                <div className="flex justify-evenly">
                  <Image src={javascriptOrigine} width={30} height={30} />
                  <Image src={typescript} width={30} height={30} />
                  <Image src={react} width={30} height={30} />
                  <Image src={tailwind} width={30} height={30} />
                </div>
                <div className="mt-3">
                  <Image
                    src={nikeEcom}
                    width={280}
                    height={200}
                    className="rounded-2xl"
                  />
                </div>
                <div className="mt-2">
                  <button 
                  onClick={()=>{window.open("https://ecomestore-nikeinspired.vercel.app/", "_blank");}}
                  className="bg-black hover:scale-105 transition ease-in w-full flex shadow-lg justify-center  p-1 rounded-full">
                    <p className="text-lg text-white bg-black">View Project</p>
                    <div className="ml-2 mt-1">
                      <Image src={external} width={21} height={21} />
                    </div>
                  </button>
                  <button 
                  onClick={()=>{window.open("https://github.com/baamelyoussef/ecomestore_nikeinspired", "_blank");}}
                  className="bg-black mt-2 hover:scale-105 transition ease-in w-full flex justify-center shadow-lg p-1 rounded-full">
                    <p className="text-lg text-white bg-black">Check on Github</p>
                    <div className="ml-2 mt-1">
                      <Image src={githubIcon} width={17} height={17} />
                    </div>
                  </button>
                </div>
              </div>
            </div>
           
          </div>
        </>
      )}
      {props.navigate == "media" && (
        <>
          <div className="max-sm:hidden pt-6 p-4 grid place-content-center grid-cols-auto-fit grid-row-auto-fit auto-rows-max auto-cols-max grid-flow-rows grid-flow-col w-full h-full gap-3">
            <div className="col-span-1 row-span-2 p-4 bg-black drop-shadow-xl rounded-2xl w-60 h-full">
              <button className="relative flex justify-center items-center bg-transparent w-full h-full">
                <Image
                  src={githubIcon}
                  width={80}
                  height={80}
                  className=" rounded-2xl"
                />
                <button
                  onClick={() =>
                    window.open("https://github.com/baamelyoussef", "_blank")
                  }
                  className="pt-1 pl-1 transition ease-in delay-100 hover:ring-2 ring-transparent ring-offset-4 ring-offset-white absolute z-40  bg-transparent w-10 rounded-full bottom-1 right-1"
                >
                  <Image
                    src={arrowRight}
                    width={30}
                    height={30}
                    className=" rounded-2xl"
                  />
                </button>
              </button>
            </div>
            <div className="col-span-1 row-span-1 w-64 h-64 bg-blue-500 drop-shadow-xl rounded-2xl">
              <button className="relative flex justify-center items-center bg-transparent w-full h-full">
                <Image
                  src={linkedinIcon}
                  width={80}
                  height={80}
                  className=" rounded-2xl"
                />
                <button
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/imyoussefbaamel/",
                      "_blank"
                    )
                  }
                  className="pt-1 pl-1 transition ease-in delay-100 hover:ring-2 ring-transparent ring-offset-4 ring-offset-white absolute z-40  bg-transparent w-10 rounded-full bottom-3 right-3"
                >
                  <Image
                    src={arrowRight}
                    width={30}
                    height={30}
                    className=" rounded-2xl"
                  />
                </button>
              </button>
            </div>
            <div
              className="col-span-1 row-span-1 w-64 h-64 drop-shadow-xl rounded-2xl"
              style={{
                background:
                  "radial-gradient( circle farthest-corner at 35% 90%, #fec564, transparent 50% ), radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), radial-gradient( ellipse farthest-corner at 20% -50%, #5258cf, transparent 50% ), radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), radial-gradient( ellipse farthest-corner at 60% -20%, #893dc2, transparent 50% ), radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), linear-gradient( #6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100% )",
              }}
            >
              <button className="relative flex justify-center items-center bg-transparent w-full h-full">
                <Image
                  src={instagramIcon}
                  width={100}
                  height={100}
                  className=" rounded-2xl"
                />
                <button
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/baamel.youssef/",
                      "_blank"
                    )
                  }
                  className="pt-1 pl-1 transition ease-in delay-100 hover:ring-2 ring-transparent ring-offset-4 ring-offset-white absolute z-40  bg-transparent w-10 rounded-full bottom-3 right-3"
                >
                  <Image
                    src={arrowRight}
                    width={30}
                    height={30}
                    className=" rounded-2xl"
                  />
                </button>
              </button>
            </div>
          </div>
          <div className="sm:hidden pt-6 p-4 flex flex-col  items-center w-full h-full gap-3">
            
            <div className="col-span-1 row-span-1 w-64 h-64 bg-black drop-shadow-xl rounded-2xl">
              <button className="relative flex justify-center items-center bg-transparent w-full h-full">
                <Image
                  src={githubIcon}
                  width={80}
                  height={80}
                  className=" rounded-2xl"
                />
                <button
                  onClick={() =>
                    window.open(
                      "https://github.com/baamelyoussef",
                      "_blank"
                    )
                  }
                  className="pt-1 pl-1 transition ease-in delay-100 hover:ring-2 ring-transparent ring-offset-4 ring-offset-white absolute z-40  bg-transparent w-10 rounded-full bottom-3 right-3"
                >
                  <Image
                    src={arrowRight}
                    width={30}
                    height={30}
                    className=" rounded-2xl"
                  />
                </button>
              </button>
            </div>
            <div className="col-span-1 row-span-1 w-64 h-64 bg-blue-500 drop-shadow-xl rounded-2xl">
              <button className="relative flex justify-center items-center bg-transparent w-full h-full">
                <Image
                  src={linkedinIcon}
                  width={80}
                  height={80}
                  className=" rounded-2xl"
                />
                <button
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/imyoussefbaamel/",
                      "_blank"
                    )
                  }
                  className="pt-1 pl-1 transition ease-in delay-100 hover:ring-2 ring-transparent ring-offset-4 ring-offset-white absolute z-40  bg-transparent w-10 rounded-full bottom-3 right-3"
                >
                  <Image
                    src={arrowRight}
                    width={30}
                    height={30}
                    className=" rounded-2xl"
                  />
                </button>
              </button>
            </div>
            <div
              className="col-span-1 row-span-1 w-64 h-64 drop-shadow-xl rounded-2xl"
              style={{
                background:
                  "radial-gradient( circle farthest-corner at 35% 90%, #fec564, transparent 50% ), radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), radial-gradient( ellipse farthest-corner at 20% -50%, #5258cf, transparent 50% ), radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), radial-gradient( ellipse farthest-corner at 60% -20%, #893dc2, transparent 50% ), radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), linear-gradient( #6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100% )",
              }}
            >
              <button className="relative flex justify-center items-center bg-transparent w-full h-full">
                <Image
                  src={instagramIcon}
                  width={100}
                  height={100}
                  className=" rounded-2xl"
                />
                <button
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/baamel.youssef/",
                      "_blank"
                    )
                  }
                  className="pt-1 pl-1 transition ease-in delay-100 hover:ring-2 ring-transparent ring-offset-4 ring-offset-white absolute z-40  bg-transparent w-10 rounded-full bottom-3 right-3"
                >
                  <Image
                    src={arrowRight}
                    width={30}
                    height={30}
                    className=" rounded-2xl"
                  />
                </button>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Container;
