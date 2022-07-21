import React from 'react'
import Image from "next/image"
import postImage from "../../public/img/landing/postImage.png"
import bidImage from "../../public/img/landing/bidsImage.png"
import colImage from "../../public/img/landing/colmage.png"
import payImage from "../../public/img/landing/payImage.png"


const How = () => {
  return (
    <div className=" py-[2rem] px-12 items-center  text-white h-[850px] top-0 " id='how'>
        <div className=' text-center py-[2rem]'>
            <p className=' h2 text-black font-semibold  text-4xl '> Explore The Marketplace</p>
        </div>
        <div className='flex justify-evenly'>
            <div class="max-w-[17rem] my-[1.3rem] bg-white rounded-lg border-gray-200 shadow-md">
                <Image class="rounded-t-lg" src={postImage} alt="" width="300px" height="200vh"/>

                <div class="p-1 rounded-lg  text-center" >
                    <h5 class="mb-2 text-2xl font-medium tracking-tight text-gray-900 dark:text-black">Post Job</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-[#747474]"> Post job to find on-demand professionals from around the globe that best match your requirements </p>
                </div>
            </div>
            <div class="max-w-[17rem] my-[1.3rem] bg-white rounded-lg  border-gray-200 shadow-md">
                <Image class="rounded-t-lg" src={bidImage} alt="" width="300%" height="200vh"/>

                <div class="p-1 rounded-lg text-center" >
                    <h5 class="mb-2 text-2xl font-medium tracking-tight text-gray-900 dark:text-black"> Get Bid</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-[#747474]"> Choose people by their creativity and previous projects, not just resumes </p>
                </div>
            </div>
            <div class="max-w-[17rem] my-[1.3rem] bg-white rounded-lg border-gray-200 shadow-md">
                <Image class="rounded-t-lg" src={colImage} alt="" width="300%" height="200vh"/>

                <div class="p-1rounded-lg text-center" >
                    <h5 class="mb-2 text-2xl font-medium tracking-tight text-gray-900 dark:text-black">Collaborate</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-[#747474]"> Connect and chat with other companies and the best professionals. </p>
                </div>
            </div>
            <div class="max-w-[17rem] my-[1.3rem] bg-white rounded-lg border-gray-200 shadow-md">
                <Image class="rounded-t-lg" src={payImage} alt="" width="300%" height="200vh"/>

                <div class="p-1 rounded-lg  text-center" >
                    <h5 class="mb-2 text-2xl font-medium tracking-tight text-gray-900 dark:text-black">Pay freelancers</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-[#747474]"> Pay freelancers based on agreement and hourly rate </p>
                </div>
            </div>
        </div>
        <div className=' text-center py-[5rem]'>
            <p className=' h2 text-black text-4xl '> Find Top Talent for Jobs & Test New Ideas</p>
            <button className=" xl: ml-auto bg-[#1d9bf0] 
            text-white rounded-full w-56 h-[52px] text-lg my-8 font-bold shadow-md 
            hover:bg-[#1a8cd8]">
                Post a Job Now...
             </button>
        </div>
    </div>
  )
}

export default How