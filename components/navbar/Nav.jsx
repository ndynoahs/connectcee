import React from 'react'
import { HomeIcon } from '@heroicons/react/outline'

const nav = () => {
  return (
    <div className='lg:px-[3rem] '>

        <nav class="bg-white border-gray-200 p-2 sm:px-4 py-2.5 rounded ">
            <div class="container flex flex-wrap justify-between items-center mx-auto">       
                <div class="flex md:order-2">
                    <button type="button" data-collapse-toggle="mobile-menu-6" aria-controls="mobile-menu-3" aria-expanded="false" class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100  focus:outline-none focus:ring-2 focus:ring-gray-200 rounded-lg text-sm p-2.5 mr-1">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                    </button>
                    <div class="hidden relative md:block">
                    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                    </div>
                    <input type="text" id="search-navbar" class="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-500 sm:text-sm focus:ring-gray-500 focus:border-gray-300  placeholder-gray-400  " placeholder="Search..."/>
                    </div>
                    <button data-collapse-toggle="mobile-menu-3" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-200 dark:text-gray-400" aria-controls="mobile-menu-3" aria-expanded="false">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>
                <div class="hidden justify-between items-center w-full px-7 md:flex md:w-auto md:order-1" id="mobile-menu-3">
                    <div class="relative mt-3 md:hidden">
                        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                        </div>
                        <input type="text" id="search-navbar" class="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-500 sm:text-sm focus:ring-gray-200 focus:border-gray-400  placeholder-gray-100 " placeholder="Search..."/>
                    </div>
                    <ul class=" relative flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        <li>
                            <a href="/dashboard" class="block py-2 pr-4 pl-3 text-gray-600 rounded hover:text-gray-700 md:bg-transparent md:text-gray-500 md:p-0 " aria-current="page"> <span><HomeIcon className="h-5 w-5 text-gray-500 absolute lg:left-[-1.4rem] lg:top-0 md:left-[-1.3rem] md:top-0 left-[-.7rem] hidden"/></span> Home</a>
                        </li>
                        <li>
                            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" 
                                class="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-500 hover:text-gray-700 border-b border-gray-100 hover:bg-gray-50 
                                    md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0 md:w-auto 
                                    ">
                                        Work 
                                    <svg class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" 
                                     clip-rule="evenodd"></path>
                                    </svg>
                            </button>
                            {/* <!-- Dropdown menu --> */}
                            <div id="dropdownNavbar" class="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44  " className="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate(714px, 2391px);" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top">
                                <ul class="py-1 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                    <li>
                                        <a href="#" class="block px-4 py-2 text-gray-600 text-[14px] hover:bg-gray-100  hover:text-gray-700">Find Work</a>
                                    </li>
                                    <li>
                                        <a href="#" class="block px-4 py-2 text-gray-600 text-[14px] hover:bg-gray-100 hover:text-gray-700">Active jobs</a>
                                    </li>  
                                    <li>
                                        <a href="#" class="block px-4 py-2 text-gray-600 text-[14px]hover:bg-gray-100 hover:text-gray-700">All Contracts</a>
                                    </li>  
                                    <li>
                                        <a href="#" class="block px-4 py-2 text-gray-600 text-[14px] hover:bg-gray-100 hover:text-gray-700">Proposals Sent</a>
                                    </li>                    
                                </ul>
                               
                            </div>
                        </li>
                        <li>
                            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownJobs" class="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-500 border-b border-gray-50 hover:bg-gray-50 hover:text-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0 md:w-auto ">Jobs <svg class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
                            {/* <!-- Dropdown menu --> */}
                            <div id="dropdownJobs" class="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44  " className="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate(714px, 2391px);" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top">

                                <ul class="py-1 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                    <li>
                                        <a href="#" class="block px-4 py-2 text-gray-600 text-[14px]hover:bg-gray-100 hover:text-gray-700">Active Jobs</a>
                                    </li>  
                                    <li>
                                        <a href="#" class="block px-4 py-2 text-gray-600 text-[14px]hover:bg-gray-100 hover:text-gray-700">Jobs in progress</a>
                                    </li>  
                                    <li>
                                        <a href="#" class="block px-4 py-2 text-gray-600 text-[14px]hover:bg-gray-100 hover:text-gray-700">Completed Jobs</a>
                                    </li>  
                                    
                                    <li>
                                        <a href="#" class="block px-4 py-2 text-gray-600 text-[14px]hover:bg-gray-100 hover:text-gray-700">Awarded Contracts</a>
                                    </li>  
                                </ul>
                          
                            </div>
                        </li>
                        <li>
                        <a href="/wallet" class="block py-2 pr-4 pl-3 text-gray-500 border-b border-gray-100 hover:text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-gray-600 md:p-0  ">Wallet</a>
                        </li>
                        <li>
                        <a href="postJob" class="block py-2 pr-4 pl-3 text-gray-500 border-b border-gray-100 hover:text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-600 md:p-0  ">Post Job</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    </div>
  )
}

export default nav