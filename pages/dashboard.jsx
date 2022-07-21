import React from 'react'
import Head from 'next/head'
import Card from '../components/dashboard/Card'
import Workernav from '../components/navbar/Workernav'
import Topnav from '../components/navbar/Topnav'
import Nav from '../components/navbar/Nav'
import Cardx from '../components/dashboard/Cardx'
import jobDetails from '../components/dashboard/jobDetails'




const dashboard = () => {
    const jobsDetail = jobDetails.map(card => {
        return <Card
            key={card.id}
            {...card}
            // title={card.title} 
            // date={card.date} 
            // currency={card.currency} 
            // budget={card.budget} 
            // status= {card.status}
            // details= {card.details} 
            // category= {card.category}
            // proposal= {card.proposal}
            // location= {card.location}
        />
    })
    console.log(jobsDetail)

    const spots = 9
    

    return (
    <div>
        <Head>
            <title>Dashboard</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" href="https://unpkg.com/flowbite@1.4.7/dist/flowbite.min.css" />
        </Head>
        <main>

            <Topnav />
            <hr/>
            {/* <Workernav /> */}
            <Nav />
            <hr/>            
            <div className='px-[1.3rem] lg:px-[5rem] h-[400px] '>
                {/* {spots < 10 && <p className='text-black'>show values</p> || <p className='text-black'>not up to zero</p>} */}

                <p className='text-[1.5rem] md:text-[1.7rem] py-[3rem] text-gray-500'> Serach for jobs around you</p>

                <form>
                    <div class="flex h-[55px]">
                        {/* <label for="search-dropdown" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Your Email</label> */}
                        <button id="dropdown-button" data-dropdown-toggle="dropdown" class="flex-shrink-0 z-10 inline-flex 
                            items-center py-2.5 px-4 text-sm font-medium text-center text-white bg-[#1a8cd8]
                            border border-gray-300 rounded-l-lg hover:bg-[#1a8cd8] focus:ring-1 focus:outline-none focus:ring-gray-300 "
                            
                            type="button">All categories <svg class="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" 
                            xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" 
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" 
                            clip-rule="evenodd"></path></svg>
                        </button>
                        <div id="dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700" className="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate(338px, 6021px);" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top">
                            <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                                <li>
                                    <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Shopping</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Images</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">News</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Finance</a>
                                </li>
                            </ul>
                        </div>
                        <div class="relative w-[40rem] ">
                            <input type="search" id="search-dropdown" class="block w-full h-[55px] z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-100 border-l-2 border border-gray-300 focus:ring-blue-300 focus:border-blue-300" placeholder="Type your location" required=""/>
                            <button type="submit" class="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-500 rounded-r-lg border border-blue-500 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-100"><svg class="w-5 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
                        </div>
                    </div>
                </form>
                <p className='text-gray-500 pt-8'>Location: <span className='text-red-500'>London</span></p>

            </div>
            <div className="flex flex-wrap py-[3rem] px-[5rem] items-center bg-[#F4F6FA] text-white h-[900px] top-0 justify-center md:justify-between">
                <Card 
                    title= "Need a security in Newbart "
                    date= " Jan 23 2022"
                    currency= "$"
                    budget= "10"
                    details= " I need a security man and woman in..."
                    category= " Business"
                    proposal= " 3"
                    location= " Endland"

                />
                {/* <Card 

                />
                <Card />
                <Card />
                <Card />
                <Card />  */}

                {jobsDetail}


            </div>
            <div className=' flex '>
                <div className='hidden flex-col md:bg-[#F4F6FA] md:pt-[2rem] p-[5rem]'>
                    <h3> Info</h3>
                </div>
                {/* <div class="flex flex-grow flex-wrap py-[3rem] bg-[#F4F6FA] justify-center items-center">
                    <Cardx />
                    <Cardx />
                    <Cardx />
                </div> */}
            </div>

            
        </main>
        <script src="https://unpkg.com/flowbite@1.4.7/dist/flowbite.js"></script>

        



    </div>

  )
}

export default dashboard