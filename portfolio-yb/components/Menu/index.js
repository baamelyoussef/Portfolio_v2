import React from 'react'

function index() {
  return (
    <div className='flex items-center justify-center mt-10'>
            <div className="backdrop-blur-md bg-slate-700 p-1  drop-shadow-xl  flex justify-around w-72  h-10  rounded-full">
            <button className="mr-1 transition ease-in delay-100 bg-transparent w-full text-white  hover:bg-slate-600 active:bg-slate-600 border-none outline-none  focus:bg-slate-600 focus:border-none focus:outline-none opacity-100 rounded-full">About</button>
            <button className=" transition ease-in delay-100 bg-transparent w-full text-white hover:bg-slate-600 active:bg-slate-600 border-none outline-none focus:bg-slate-600 focus:border-none focus:outline-none opacity-100 rounded-full">Projects</button>
            <button className="ml-1 transition ease-in delay-100 bg-transparent w-full text-white hover:bg-slate-600 active:bg-slate-600 border-none outline-none focus:bg-slate-600 focus:border-none focus:outline-none opacity-100 rounded-full">Media</button>
            </div>

</div>
  )
}

export default index