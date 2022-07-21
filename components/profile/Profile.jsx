import { PhoneIcon } from '@heroicons/react/solid'
import Image from "next/image"

import { ShieldCheckIcon } from '@heroicons/react/solid'
import { UserIcon } from '@heroicons/react/solid'
import { MailIcon } from '@heroicons/react/solid'
import laundryImage from "../../public/img/landing/Rectangle-39.png"
import badge from "../../public/img/items/certifications.svg"
import reviewImage from "../../public/img/items/review-illustration.svg"

import React from 'react'
import { ClockIcon } from '@heroicons/react/solid'
import { CalendarIcon } from '@heroicons/react/solid'
import { ThumbUpIcon } from '@heroicons/react/solid'
import { StarIcon } from '@heroicons/react/solid'
import { CurrencyDollarIcon } from '@heroicons/react/solid'
import { ViewBoardsIcon } from '@heroicons/react/solid'
import { BadgeCheckIcon } from '@heroicons/react/outline'
import Input from '../auth/Input'
import Modal from './Modal'
import SelectLocation from '../auth/SelectLocation'

const Profile = () => {
  return (
    <div className="  ">
        <div className="p-[7rem] flex justify-between ">
            <div className="main ">
                <div class=" p-6 w-[53rem] h-[500px] bg-white rounded-lg border border-gray-200 shadow-md ">
                    <div className="flex justify-between ">
                        <div className="">
                            <Image class="rounded-t-lg" src={laundryImage} alt="" width="250%" height="250vh"/>
                            <div className="flex pt-5 ">
                                <span class=" w-[11px] h-[11px] bg-green-400 border-1 border-white dark:border-gray-800 rounded-full"></span>
                                <p className=" pl-3 text-[14px] text-green-400">I'm Online!</p>
                            </div>
                            {/* <div className="flex ">
                                <span class="  w-[11px] h-[11px] bg-green-400 border-1 border-white dark:border-gray-800 rounded-full"></span>
                                <p className=" pl-3 text-[14px] text-blue-400 ">Nigeria</p>
                            </div> */}
                            <div className="flex pt-2">
                                <ClockIcon class="w-[25px] h-[25px] border-1 text-gray-400 border-white dark:border-gray-800 rounded-full"/>
                                <p className=" pl-3 text-[14px]">It's currently 4:30pm here</p>
                            </div>
                            <div className="flex  pt-2">
                                <CalendarIcon class="w-[25px] h-[25px]  border-1 text-gray-400 border-white dark:border-gray-800 rounded-full"/>
                                <p className=" pl-3 text-[14px]">It's currently 4:30pm here</p>
                            </div>
                            <div className="flex  pt-2">
                                <ThumbUpIcon class="w-[25px] h-[25px] border-1 text-gray-400 border-white dark:border-gray-800 rounded-full"/>
                                <p className=" pl-3 text-[14px]"> 0 Recommendations </p>
                            </div>
                        </div>
                        <div className="flex-grow pl-9">
                            <div className="flex justify-between">
                                <p className="text-[23px] font-bold">Kingsley <span className="text-gray-500 text-[20px] font-light ">ndynoahs@gmail.com</span></p>
                                <button class="block p-1 bg-blue-500 text-white hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="button" data-modal-toggle="profile-modal">
                                    Edit profile
                                </button>
                            </div>
                            <div className="flex pt-6">
                                <span className="flex pr-6 text-[12px] " > 
                                    <StarIcon class="w-[16px] h-[16px] border-1 text-gray-400 border-white dark:border-gray-800 rounded-full"/>
                                    <StarIcon class="w-[16px] h-[16px] border-1 text-gray-400 border-white dark:border-gray-800 rounded-full"/>
                                    <StarIcon class="w-[16px] h-[16px] border-1 text-gray-400 border-white dark:border-gray-800 rounded-full"/>
                                    <StarIcon class="w-[16px] h-[16px] border-1 text-gray-400 border-white dark:border-gray-800 rounded-full"/>
                                    <StarIcon class="w-[16px] h-[16px] border-1 text-gray-400 border-white dark:border-gray-800 rounded-full"/>
                                    <p>0.0 (0 reviews)</p>
                                </span>
                                <span className="flex text-[12px]">
                                    <CurrencyDollarIcon class="w-[16px] h-[16px] border-1 text-green-600 border-white dark:border-gray-800 rounded-full"/>
                                    <ViewBoardsIcon class="w-[16px] h-[16px] border-1 text-gray-300 border-white dark:border-gray-800 rounded-full"/>
                                    <ViewBoardsIcon class="w-[16px] h-[16px] border-1 text-gray-300 border-white dark:border-gray-800 rounded-full"/>
                                    <p className="pl-1"> 400.0</p>
                                </span>
                            </div>
                            <div className="flex flex-wrap pt-5 justify-between">
                                <p className="w-[40%] pt-2"> <span className="pr-9 text-green-500 "> N/A</span> Active Jobs </p>
                                <p className="w-[40%] pt-2"> <span className="pr-9 text-green-500"> N/A</span>  Jobs Completed </p>
                                <p className="w-[40%] pt-2"> <span className="pr-9 text-green-500"> N/A</span> Jobs Posted</p>
                                <p className="w-[40%] pt-2"> <span className="pr-9 text-green-500"> N/A</span> Proposals sent  </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class=" p-6 mt-7 w-[53rem] h-[360px] bg-white rounded-lg border border-gray-200 shadow-md  ">
                    <p className="font-bold text-[19px]  pb-4"> Reviews </p>
                    <hr /> 
                    <div className='flex flex-col justify-center items-center pt-14'>
                        <Image class="rounded-t-lg" src={reviewImage} alt="" width="240%" height="140vh"/>
                        <p className="pt-5">  No reviews to see here!  </p>
                    </div>
                </div>


                <div class=" p-6 mt-7 w-[53rem] h-[180px] bg-white rounded-lg border border-gray-200 shadow-md">
                    <div className="flex justify-between pb-4">
                        <p className="font-bold text-[19px]  pb-4"> Skills </p>
                        {/* <button className="p-1 px-2 bg-blue-500 text-white"> */}
                        <button class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="skill-modal">
                            Add skills
                        </button>
                    </div>
                    <hr /> 
                    <p className="pt-4 text-gray-600"> No skills has been added. </p>
                </div>
                <div class=" p-6 mt-7 w-[53rem] h-[180px] bg-white rounded-lg border border-gray-200 shadow-md ">                  
                    <div className="flex justify-between pb-4">
                        <p className="font-bold text-[19px]  pb-4"> Preferred Categories</p>
                        <button class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="category-modal">
                            Add New
                        </button>
                    </div>
                    <hr /> 
                    <p className="pt-4 text-gray-600"> No Categories has been added. </p>
                </div>
            </div>

            <div className="side-bar ">
                <div class="block p-5 mb-[3rem] w-[20rem] h-[410px]  bg-white rounded-lg border border-gray-200 shadow-md relative ">
                    <p className="font-bold p-1 pb-2"> Verifications </p>
                    <hr />
                    <p className="flex p-1 pt-3 text-[14px]"> <UserIcon className="h-6 w-6 mr-2 text-gray-500 relative" /> Identity Verified <span className="absolute right-10 text-blue-500"> Verify</span></p>
                    <p className="flex p-1 pt-3  text-[14px]"> <ShieldCheckIcon className="h-6 w-6 mr-2 text-gray-500"/> Payment Verified  <span className="absolute right-10 text-blue-500"> Verify</span></p>
                    <p className="flex p-1 pt-3 text-[14px]"> <PhoneIcon className="h-6 w-6 mr-2 text-gray-500"/> Phone Verified  <span className="absolute right-10 text-blue-500"> Verify</span></p>
                    <p className="flex p-1 pt-3 text-[14px]"> <MailIcon className="h-6 w-6 mr-2 text-gray-500"/> Email Verified  <span className="absolute right-10 text-blue-500"> Verify</span></p>
                    <p className="flex p-1 pt-3 text-[14px]"> <UserIcon className="h-6 w-6 mr-2 text-gray-500"/> Facebook   <span className="absolute right-10 text-blue-500"> Connect</span></p>
                </div>
                <div class="p-5 mb-[5rem] w-[20rem] h-[300px]  bg-white rounded-lg border border-gray-200 shadow-md ">
                    <p className="font-bold p-1 pb-2"> Certifications </p>
                    <hr /> 
                    <div className='flex flex-col justify-center items-center pt-4'>
                        <Image class="rounded-t-lg" src={badge} alt="" width="90%" height="120vh"/>
                        <p className="pt-5"> You don't have any certifications yet. </p>
                    </div>
                </div>               
            </div>
        </div>


            {/* <!-- Modal toggle --> */}
        {/* <button class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="authentication-modal">
            Toggle modal
        </button> */}

        <div id="profile-modal" tabindex="-1" class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex" aria-hidden="true"  role="dialog">
            <div class="relative p-4 w-full max-w-[35rem] h-full md:h-[500px]">
                {/* <!-- Modal content --> */}
                <div class="relative bg-white rounded-lg shadow ">
                    <button type="button" class="absolute top-3 right-2.5 text-gray-500 bg-transparent hover:bg-gray-50 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center " data-modal-toggle="profile-modal">
                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        {/* <span class="sr-only">Close modal</span> */}
                    </button>
                    <div class="py-9 px-9 lg:px-8">
                        <h3 class="mb-4  text-[17px] font-medium text-gray-900 ">Edit Details</h3>
                        <hr/>
                        <form class="space-y-6 py-6" action="#">
                            <div className='md:flex justify-between '>
                                <Input for="firstName" id="firstName" label=" firstName" placeholder="first Name"/>
                                <Input for="lastName" id="lastName" label="lastName" placeholder="last Name" />
                            </div> 
                            <div className='md:flex justify-between '>
                                <Input for="email" id="email" label="email" placeholder=" email Address" />
                                <Input for="phone" id="phone" label="phone number" placeholder="phone number" />
                            </div> 
                            <SelectLocation />

                                                                                                   
                        </form>
                        <div className="flex justify-between pt-9">
                            <button type="button" class="  text-gray-500 bg-transparent hover:bg-gray-50 hover:text-gray-900 rounded-lg text-sm p-1.5  items-center " data-modal-toggle="profile-modal">
                                <span class="">Close</span>
                            </button>
                            <button className="bg-blue-500 text-gray-100 px-2 py-1 rounded-lg">Add</button>

                        </div>
                    </div>
                </div>
            </div>
        </div> 

        {/* <!-- Main modal --> */}
        <div id="skill-modal" tabindex="-1" class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex" aria-hidden="true" role="dialog">
            <div class="relative p-4 w-full max-w-lg h-full md:h-[200px]">
                {/* <!-- Modal content --> */}
                <div class="relative bg-white rounded-lg shadow ">
                    <button type="button" class="absolute top-3 right-2.5 text-gray-500 bg-transparent hover:bg-gray-50 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center " data-modal-toggle="skill-modal">
                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        {/* <span class="sr-only">Close modal</span> */}
                    </button>
                    <div class="py-9 px-9 lg:px-8">
                        <h3 class="mb-4  text-[17px] font-medium text-gray-900 ">Skills</h3>
                        <form class="space-y-6" action="#">
                            <div>
                                <label for="skill" class="block mb-2 text-sm font-medium text-gray-900 "> Add Skill</label>
                                <input type="text" name="text" id="skill" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-300 focus:border-blue-300 block w-full p-2.5  placeholder-gray-400 " required=""/>
                            </div>                           
                            
                        </form>
                        <div className="flex justify-between pt-9">
                            {/* <button className=" border px-2 py-1 rounded-lg"> */}
                            <button type="button" class="  text-gray-500 bg-transparent hover:bg-gray-50 hover:text-gray-900 rounded-lg text-sm p-1.5  items-center " data-modal-toggle="skill-modal">
                                {/* <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> */}
                                <span class="">Close</span>
                            </button>
                            <button className="bg-blue-500 text-gray-100 px-2 py-1 rounded-lg">Add</button>

                        </div>
                    </div>
                </div>
            </div>
        </div> 


        <div id="category-modal" tabindex="-1" class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex" aria-hidden="true"  role="dialog">
            <div class="relative p-4 w-full max-w-lg h-full md:h-[200px]">
                {/* <!-- Modal content --> */}
                <div class="relative bg-white rounded-lg shadow ">
                    <button type="button" class="absolute top-3 right-2.5 text-gray-500 bg-transparent hover:bg-gray-50 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center " data-modal-toggle="category-modal">
                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        {/* <span class="sr-only">Close modal</span> */}
                    </button>
                    <div class="py-9 px-9 lg:px-8">
                        <h3 class="mb-4  text-[17px] font-medium text-gray-900 ">Select your categories</h3>
                        <hr/>
                        <form class="space-y-6 pt-4" action="#">
                            <div className="flex flex-wrap justify-between text-[14px]">                       
                                <div class="flex items-center h-5 w-[25%] pt-2">
                                    <input id="remember" type="checkbox" value="" class="w-4 h-4  mr-2 bg-gray-50  border border-gray-200 focus:ring-2 focus:ring-blue-100 dark:border-gray-500  ring-offset-gray-500" required/>
                                    <p>Education</p>
                                </div>  
                                <div class="flex items-center h-5 w-[25%] pt-2">
                                    <input id="remember" type="checkbox" value="" class="w-4 h-4 mr-2 bg-gray-50  border border-gray-200 focus:ring-2 focus:ring-blue-100 dark:border-gray-500  ring-offset-gray-500" required/>
                                    <p>Logistics</p>
                                </div>
                                <div class="flex items-center h-5 w-[25%] pt-2">
                                    <input id="remember" type="checkbox" value="" class="w-4 h-4 mr-2 bg-gray-50  border border-gray-200 focus:ring-2 focus:ring-blue-100 dark:border-gray-500  ring-offset-gray-500" required/>
                                    <p>Laundry</p>
                                </div>  
                                <div class="flex items-center h-5 w-[25%] pt-2">
                                    <input id="remember" type="checkbox" value="" class="w-4 h-4 mr-2 bg-gray-50  border border-gray-200 focus:ring-2 focus:ring-blue-100 dark:border-gray-500  ring-offset-gray-500" required/>
                                    <p>Military</p>
                                </div>
                                <div class="flex items-center h-5 w-[25%] pt-2">
                                    <input id="remember" type="checkbox" value="" class="w-4 h-4 mr-2 bg-gray-50  border border-gray-200 focus:ring-2 focus:ring-blue-100 dark:border-gray-500  ring-offset-gray-500" required/>
                                    <p>Clubing</p>
                                </div> 
                                   
                            </div>                       
                            
                        </form>
                        <div className="flex justify-between pt-9">
                            {/* <button className=" border px-2 py-1 rounded-lg"> */}
                            <button type="button" class="  text-gray-500 bg-transparent hover:bg-gray-50 hover:text-gray-900 rounded-lg text-sm p-1.5  items-center " data-modal-toggle="category-modal">
                                {/* <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> */}
                                <span class="">Close</span>
                            </button>
                            <button className="bg-blue-500 text-gray-100 px-2 py-1 rounded-lg">Add</button>

                        </div>
                    </div>
                </div>
            </div>
        </div> 

    </div>
  )
}

export default Profile