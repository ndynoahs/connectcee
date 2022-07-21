import React from 'react'
import Head from 'next/head'
import Topnav from '../components/navbar/Topnav'
import Nav from '../components/navbar/Nav'
import Jobform from '../components/postJob/Jobform'

const postJob = () => {
  return (
    <div>
      <Head>
            <title>Profile</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" href="https://unpkg.com/flowbite@1.4.7/dist/flowbite.min.css" />
      </Head>
      <Topnav />
      <Nav />
      <hr />

      <main>
        <div className="pl-[9rem] pt-12 py-5 text-gray-500 text-[27px] font-semibold">
          <p>Create Job</p>
        </div>
        <div className='section md:py-[3rem] bg-[#F4F6FA] flex flex-col justify-center items-center'>
          <div className=' relative items-center w-[100%] lg:w-[80%] md:max-w-[100%] lg:border-[2px] h-[750px] md:h-[800px] border-gray-300 shadow-md pt-8 bg-white'>
            <Jobform/>
            <button className="button absolute bottom-[2rem] right-[18rem] ">
              Continue
            </button>
                
          </div>
        </div>

      </main>
      <script src="https://unpkg.com/flowbite@1.4.7/dist/flowbite.js"></script>

    </div>
  )
}

export default postJob