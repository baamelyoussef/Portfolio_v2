import Image from "next/image";
import beachPic from "../../assets/img/beachPic.jpg";
import arrowRight from "../../assets/img/arrowRight.png";
import arrowLeft from "../../assets/img/arrowLeft.png";
import githubIcon from "../../assets/img/githubIcon.png";
import linkedinIcon from "../../assets/img/linkedinIcon.png";
import instagramIcon from "../../assets/img/instagramIcon.png";
import meMoji from "../../assets/img/memoji.png";
import horseRiding from "../../assets/img/horseRiding.png";
import react from "../../assets/img/react.png";
import reactbw from "../../assets/img/reactbw.png";
import surf from "../../assets/img/surf.png";
import redux from "../../assets/img/redux.png";
import reduxbw from "../../assets/img/reduxbw.png";
import nodejs from "../../assets/img/nodejs.png";
import vuejs from "../../assets/img/vuejs.png";
import sass from "../../assets/img/sass.png";
import nuxtjs from "../../assets/img/nuxtjs.png";
import nodejsbw from "../../assets/img/nodejsbw.png";
import nextjs from "../../assets/img/nextjs.png";
import typescript from "../../assets/img/typescript.png";
import runningShoes from "../../assets/img/runningShoes.png";
import javascriptOrigine from "../../assets/img/javascriptOrigine.png";
import javascriptbw from "../../assets/img/javascriptbw.png";
import typescriptbw from "../../assets/img/typescriptbw.png";
import pic1 from "../../assets/img/pic1.jpg";
import pic2 from "../../assets/img/pic2.jpg";
import pic3 from "../../assets/img/pic3.jpg";
import pic4 from "../../assets/img/pic4.jpg";
import { useState, useEffect } from "react";
function index() {
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
    if(index==1){
      setDisplayedHobby(runningShoes);
    }
    if(index==2){
      setDisplayedHobby(surf);
    }
  };
  return (
    <div>
      <div className=" p-4 grid place-content-center grid-cols-auto-fit grid-row-auto-fit auto-rows-max auto-cols-max grid-flow-rows grid-flow-col w-full gap-3">
      <div class="p-5 row-span-1 col-span-3 bg-white w-60  rounded-2xl shadow-lg">
            <p className="pb-4 text-3xl font-semibold bg-gradient-to-r from-slate-700 to-slate-500 text-transparent bg-clip-text">
              Skills
            </p>
            <div class=" grid grid-cols-4 gap-4">
            <Image
              src={javascriptOrigine}
              width={50}
              height={50} 
            />
            <Image
              src={react}
              width={50}
              height={50}  
            />
            <Image
              src={typescript}
              width={50}
              height={50} 
            />
            <Image
              src={nodejs}
              width={50}
              height={50}
            />
            <Image
              src={nextjs}
              width={50}
              height={50}
            />
            <Image
              src={redux}
              width={50}
              height={50}
            />
            <Image
              src={vuejs}
              width={50}
              height={50}
            />
            <Image
              src={sass}
              width={50}
              height={50}
            />
            <Image
              src={nuxtjs}
              width={50}
              height={50}
            />

            </div>
            
  </div>
        <div className="p-4 row-span-2 col-span-2 w-full bg-white dark:bg-slate-500 drop-shadow-xl rounded-2xl">
          <Image
            src={meMoji}
            width={150}
            height={165}
            className="rounded-2xl"
          />
          <h4 className="font-medium">Hey there,</h4>
          <h3 className="font-semibold">
            My name is{" "}
            <span className="bg-gradient-to-r from-slate-700 to-slate-500 text-transparent bg-clip-text">
              Youssef Baamel
            </span>{" "}
            & I'm a
          </h3>
          <h1 className="text-4xl bg-gradient-to-r from-slate-700 to-slate-500 text-transparent bg-clip-text">
            <b>Front End Engineer</b>
          </h1>
          <p className="w-80">
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
        <div className=" row-span-1 col-span-1">
          <div className="relative p-3 col-span-1 row-span-1 w-full h-full bg-white drop-shadow-xl rounded-2xl">
            <p className="text-3xl font-semibold bg-gradient-to-r from-slate-700 to-slate-500 text-transparent bg-clip-text">
              Hobbies
            </p>
            <ul className="mt-4">
              <li>
                <p className="text-2xl font-semibold cursor-pointer text-slate-400 hover:text-slate-700 focus:text-slate-700"
                onClick={()=>displayHobby(0)}>
                  Horse Riding
                </p>
              </li>
              <li>
                <p className="text-2xl font-semibold cursor-pointer text-slate-400 hover:text-slate-700"
                onClick={()=>displayHobby(1)}>
                  Running
                </p>
              </li>
              <li>
                <p className="text-2xl font-semibold cursor-pointer text-slate-400 hover:text-slate-700"
                onClick={()=>displayHobby(2)}>
                  Surfing
                </p>
              </li>
            </ul>
            <button className="pt-1 pl-1  absolute z-40  bg-transparent w-auto rounded-full bottom-1 right-1">
              <Image src={displayedHobby} width={150} height={150} />
            </button>
          </div>
        </div>
        
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
        <div className="col-span-1 row-span-1 w-64 h-64 drop-shadow-xl rounded-2xl"
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
        {/* <div class="p-5 grid place-content-center grid-cols-auto-fit grid-row-auto-fit auto-rows-max auto-cols-max grid-flow-rows grid-flow-col w-full gap-3">
  
  <div class="col-span-2  bg-white w-22">02</div>
  <div class="row-span-2  bg-white w-16">03</div>
</div> */}
    </div>
  );
}

export default index;
