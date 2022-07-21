import React from 'react'
import Image from "next/image";

import avater from "../../public/img/items/avatar-4.jpg"
// import cleanerImage from "../../public/img/landing/bids.png"



const Topnav = () => {
  return (
    <div className='lg:px-[5rem] '>
        <nav class="bg-white border-gray-200 px-9 sm:px-4 py-2 rounded">
            <div class="container flex flex-wrap justify-between items-center mx-auto">
                <a href="/" class="flex items-center">
                    {/* <img src="/docs/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo"/> */}
                    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-black">Connectcee</span>
                </a>
                <div class="flex items-center md:order-2">
                    <button type="button" class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-1 focus:ring-gray-200" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="dropdown">
                        <span class="sr-only">Open user menu</span>
                        <Image class="" width="30px" height="30px" src={avater} alt="user photo"/>
                        {/* <span class="top-7 absolute  w-3 h-3 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span> */}

                    </button>
                    <div class="py-3 px-4 ">
                        <span class="block text-sm text-gray-900 ">Bonnie Green</span>
                        <span class="block text-sm font-medium text-gray-500 truncate ">freelancer</span>

                    </div>                   
                     {/* <!-- Dropdown menu --> */}
                    <div class="hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow divide-gray-600position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(1015px, 1819px);" data-popper-placement="bottom" id="dropdown" >
                        <div class="py-3 px-4">
                        <span class="block text-sm text-gray-900 ">Bonnie Green</span>
                        <span class="block text-sm font-medium text-gray-500 truncate dark:text-gray-500">name@flowbite.com</span>
                        </div>
                        <ul class="py-1" aria-labelledby="dropdown">
                        <li>
                            <a href="/profile" class="block py-2 px-4 text-sm text-gray-700 hover:bg-blue-500  hover:text-white">Profile</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-blue-500  hover:text-white">Earnings  </a>
                        </li>
                        {/* <li>
                            <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-blue-500  hover:text-white">Settings</a>
                        </li> */}
                        <li>
                            <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-blue-500  hover:text-white">Sign out</a>
                        </li>
                        </ul>
                    </div>
                    {/* <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button> */}
                </div>
                {/* <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
                    <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                    <li>
                        <a href="#" class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                    </li>
                    </ul>
                </div> */}
            </div>
        </nav>

    </div>
  
  )
}

export default Topnav