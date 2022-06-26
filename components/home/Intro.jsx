import React from 'react'
import Image from "next/image"
import bg1 from "../../public/img/landing/world-1.png"
import bg2 from "../../public/img/landing/world-2.png"
const Intro = () => {

  return (
    <div className="flex py-[0] px-[5rem] items-center bg-[rgb(0,126,185)] text-white h-[600px] top-0 justify-between">
        <div className="flex-1  font-bold  ">
            <h1 className='text-[3rem] '>Hire people from all parts of Europe</h1>
            <h5 className='text-[1.5rem] py-5'>Get your work done easily with easyx</h5>

            {/* <button className=" "> Connect...</button> */}
            <button className=" xl: ml-auto bg-white 
            text-[#1d9bf0] rounded-full w-56 h-[52px] text-lg my-8 font-bold shadow-md 
            hover:bg-[#1a8cd8]">
                Connect...
             </button>
        </div>
        <div className=" ">
            <Image src={bg1} />
            {/* <Image src={bg2} /> */}

        </div>

    </div>
  )
}

export default Intro