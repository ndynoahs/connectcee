import React from 'react'
import { useState } from 'react'
const Navbar = () => {
    const [active, setIsActive] = useState(false)
    const menubtn = () => {
        setIsActive(true)
    }
  return (
    <div class="sticky px-[4rem] top-0 z-50 dark:bg-[#007eb9f9] backdrop-blur-[.5rem]">      
        <nav class=" px-2 sm:px-4 py-7   ">
            <div class="container flex flex-wrap justify-between items-center mx-auto">
                <a href="https://flowbite.com/" class="flex items-center">
                    {/* <img src="/docs/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo"/> */}
                    <span class="self-center text-[2rem] font-semibold whitespace-nowrap dark:text-white">ConnectCee</span>
                </a>
                <button data-collapse-toggle="mobile-menu" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
                <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
                    <ul class="flex flex-col mt-4 text-[6rem] md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        <li>
                        <a href="#" class={`homeNavbtn ${active && "text-gray-100" }`} aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#services" class={`homeNavbtn ${active && "text-gray-100" }`} onClick={menubtn}>Explore</a>
                        </li>
                        <li>
                            <a href="#how" class={`homeNavbtn ${active && "text-gray-100" }`}>How it works</a>
                        </li>
                           <li>
                            <a href="/login" class={`homeNavbtn ${active && "text-gray-100" }`}>Sigin</a>
                        </li>
                        <li>
                            <a href="/signup" class="homeNavbtn">Sign up</a>
                        </li>
                        {/* <li>
                            <button type="button" class="text-[#007eb9] bg-blue-700 hover:bg-[#007eb9] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-white dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>                        
                        </li> */}
                        {/* <li>
                            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
                        </li> */}
                        
                    </ul>
                    
                </div>
            </div>
        </nav>


    </div>
  )
}

export default Navbar