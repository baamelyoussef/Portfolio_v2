import React from 'react'
import Image from 'next/image'
import darkModePng from '../../assets/img/darkmode.png'
import lightModePng from '../../assets/img/lightmode.png'
import {useTheme} from 'next-themes'

function index() {
  const {theme, setTheme} = useTheme()

  return (
    <div className='flex items-center  justify-between mt-10'>
            <div className="backdrop-blur-md bg-slate-800 p-1  drop-shadow-xl  flex justify-around w-10  h-10  rounded-full">
            <button 
              className="transition ease-in delay-100 bg-transparent w-full text-white border-none outline-none  focus:border-none focus:outline-none opacity-100 rounded-full"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >{theme === 'dark'?
              <Image
            
            src={darkModePng}
            width={35}
            height={35}
          />:
          <Image
            
            src={lightModePng}
            width={35}
            height={35}
          />}
          </button>
            </div>
            <div className="backdrop-blur-md bg-transparent border-2 border-slate-700  p-1  drop-shadow-xl  flex justify-around w-72  h-10  rounded-full">
            <button className="mr-1 transition ease-in delay-100 bg-transparent w-full text-slate-700  hover:bg-slate-600 hover:text-white active:bg-slate-600 border-none outline-none active:text-white  focus:bg-slate-600 focus:border-none focus:outline-none focus:text-white opacity-100 rounded-full">About</button>
            <button className=" transition ease-in delay-100 bg-transparent w-full text-slate-700 hover:bg-slate-600 hover:text-white active:bg-slate-600 border-none outline-none active:text-white focus:bg-slate-600 focus:border-none focus:outline-none focus:text-white opacity-100 rounded-full">Projects</button>
            <button className="ml-1 transition ease-in delay-100 bg-transparent w-full text-slate-700 hover:bg-slate-600 hover:text-white active:bg-slate-600 border-none outline-none active:text-white focus:bg-slate-600 focus:border-none focus:outline-none focus:text-white opacity-100 rounded-full">Media</button>
            </div>
            <div className="backdrop-blur-md bg-slate-700 p-1  drop-shadow-xl  flex justify-around w-24  h-10  rounded-full">
            <button className=" transition ease-in delay-100 bg-transparent w-full text-white  hover:bg-slate-600 active:bg-slate-600 border-none outline-none  focus:bg-slate-600 focus:border-none focus:outline-none opacity-100 rounded-full"><a href="mailto:imbaamelyoussef@gmail.com">Contact</a></button>
            </div>

</div>
  )
}

export default index