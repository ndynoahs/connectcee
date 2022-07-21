import React from 'react'
import { HeartIcon } from '@heroicons/react/solid'
// import { CheckCircleIcon } from '@heroicons/react/outline'
import { CheckCircleIcon } from '@heroicons/react/solid'
import { LocationMarkerIcon } from '@heroicons/react/solid'

const Cardx = () => {
  return (
    <div className='flex  justify-center'>
        <div class="block p-10 md:px-[4rem] md:py-[3rem]  mb-[5rem] w-[100%] bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 relative ">
            <h5 class="mb-2 text-xl font-normal tracking-tight text-black w-[90%]">Noteworthy technology acquisitions 2021 Noteworthy technology acquisitions 202</h5>
            <HeartIcon className="h-8 w-8 text-gray-400 absolute right-[2rem] top-11 md:right-[3rem]  "/>


            <div class=" text-gray-600">Posted Sun Jan 23 2022 </div>

            <div class="flex pt-9 ">
                <p className='text-black '> Budget: <span> $10 </span>  </p>
                <div class='flex pl-5'>
                    <CheckCircleIcon className='h-6 w-4 text-gray-500 cursor-pointer' />
                    {/* <CheckCircleIcon className='h-6 w-4 text-green-700' /> */}
                    <p class="text-[13px] text-gray-400 pl-1"> payment Verified </p>
                </div>
            </div>
            <p className='pt-[1.3rem] text-black text-[20px]'> I need someone around 35 Nort... <span class='text-[17px] text-blue-400 cursor-pointer'>view</span></p>
            <div class='flex pt-3'>
                <p className='text-[13px] text-black font-semibold'>category :</p>
                <div className='text-[13px] ml-3 rounded-full border w-20 h-[25px] font-semibold text-blue-400 text-center'> 
                    <p>Logistics </p>
                </div>
            </div>
            <div class="flex justify-between pt-3">
                <p class="text-black"> Proposals submitted: <span> 1</span></p>
                <div class='flex'>
                    {/* <LocationMarkerIcon className='h-6 w-4 text-gray-500' /> */}
                    <LocationMarkerIcon className='h-6 w-4 text-blue-500' />
                    <p class="text-[13px] text-black pl-1"> London</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Cardx