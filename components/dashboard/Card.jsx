import React from 'react'
import { useState } from 'react'
import { HeartIcon } from '@heroicons/react/outline'

import { ThumbUpIcon } from '@heroicons/react/outline'

// import { CheckCircleIcon } from '@heroicons/react/outline'
import { CheckCircleIcon } from '@heroicons/react/solid'
import { LocationMarkerIcon } from '@heroicons/react/solid'




const Card = (props) => {
    console.log(props)
    // const [favourite, setFavourite] = useState(false)

    // let loveIcon = props.favourite 
  return (
    <div>
        <div class="block p-5 mb-[5rem] w-[25rem] md:max-w-[23.5rem] bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 relative ">
            <div class=" ">
                <h5 class="mb-2 text-[19px] font-semibold tracking-tight text-black w-[85%] truncate hover:text-clip">{props.title}</h5>
                <ThumbUpIcon className="h-8 w-8 text-gray-500 absolute right-[1rem] top-6 cursor-pointer"/>

                {/* <HeartIcon className="h-10 w-10 text-gray-400 "/> */}
                {/* <HeartIcon className="h-10 w-10 text-blue-500"/> */}
            </div>

            <div class=" text-gray-500 text-[13px]">Posted {props.date} </div>

            <div class="flex pt-9 ">
                <p className='text-black '> Budget: {props.currency}<span> {props.budget} </span>  </p>
                <div class='flex pl-5'>
                    <CheckCircleIcon className='h-6 w-4 text-gray-500' />
                    {/* <CheckCircleIcon className='h-6 w-4 text-green-700' /> */}
                    <p class="text-[13px] text-gray-400 pl-1"> payment {props.status}</p>
                </div>
            </div>
            <p className='pt-[1.3rem] text-black text-[18px]'> {props.details} <span class='text-[17px] text-blue-400 cursor-pointer '>view</span></p>
            <div class='flex pt-3'>
                <p className='text-[13px] text-black font-semibold'>category : </p>
                <div className='text-[13px] ml-3 rounded-full border w-20 h-[25px] font-semibold text-blue-400 text-center'> 
                    <p>{props.category} </p>
                </div>
            </div>
            <div class="flex justify-between pt-3">
                <p class="text-black"> Proposals submitted: <span>{props.proposal}</span></p>
                <div class='flex'>
                    {/* <LocationMarkerIcon className='h-6 w-4 text-gray-500' /> */}
                    <LocationMarkerIcon className='h-6 w-4 text-blue-500' />
                    <p class="text-[13px] text-black pl-1"> {props.location}</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Card