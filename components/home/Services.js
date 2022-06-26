import React from 'react'
import Image from "next/image";
import deliveryImage from "../../public/img/landing/Rectangle-40.png"
import cleanerImage from "../../public/img/landing/Rectangle-38.png"
import laundryImage from "../../public/img/landing/Rectangle-39.png"
import img1 from "../../public/img/landing/Rectangle-42.png"
import dishImage from "../../public/img/landing/Rectangle-42.png"


const Services = () => {
  return (
    <div className=" py-[2rem] px-12 items-center   text-white h-[1000px] top-0 " id='services'>
      <div className=' text-center py-[2rem]'>
        <p className=' h2 text-black text-4xl font-bold'> Explore The Marketplace</p>
      </div>

      <div className="flex flex-wrap py-[2rem] items-center    text-white h-[800px] top-0 justify-around ">

        <div class="max-w-[20rem] my-[1.3rem] bg-white rounded-lg border border-gray-200 shadow-md">
          <a href="#">
            <Image class="rounded-t-lg" src={deliveryImage} alt="" width="500%" height="400vh"/>
          </a>
          <div class="p-1 dark:bg-gray-700 dark:hover:bg-black rounded-lg border" >
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Delivery Service</h5>
            </a>
              {/* <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> Get your items delivered </p> */}
          </div>
        </div>
        <div class="max-w-[20rem] my-[1.3rem] bg-white rounded-lg border border-gray-200 shadow-md">
          <a href="#">
            <Image class="rounded-t-lg" src={cleanerImage} alt="" width="500%" height="400vh"/>
          </a>
          <div class="p-1 dark:bg-gray-700 dark:hover:bg-black rounded-lg border" >
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Cleaner</h5>
            </a>
              {/* <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> Get your items delivered </p> */}
          </div>
        </div>
        <div class="max-w-[20rem] my-[1.3rem] bg-white rounded-lg border border-gray-200 shadow-md">
          <a href="#">
            <Image class="rounded-t-lg" src={laundryImage} alt="" width="500%" height="400vh"/>
          </a>
          <div class="p-1 dark:bg-gray-700 dark:hover:bg-black rounded-lg border" >
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Laundry</h5>
            </a>
              {/* <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> Get your items delivered </p> */}
          </div>
        </div>
        <div class="max-w-[20rem] my-[1.3rem] bg-white rounded-lg border border-gray-200 shadow-md">
          <a href="#">
            <Image class="rounded-t-lg" src={dishImage} alt="" width="500%" height="400vh"/>
          </a>
          <div class="p-1 dark:bg-gray-700 dark:hover:bg-black rounded-lg border" >
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Delivery Service</h5>
            </a>
              {/* <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> Get your items delivered </p> */}
          </div>
        </div>
        <div class="max-w-[20rem] my-[1.3rem] bg-white rounded-lg border border-gray-200 shadow-md">
          <a href="#">
            <Image class="rounded-t-lg" src={deliveryImage} alt="" width="500%" height="400vh"/>
          </a>
          <div class="p-1 dark:bg-gray-700 dark:hover:bg-black rounded-lg border" >
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Delivery Service</h5>
            </a>
              {/* <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> Get your items delivered </p> */}
          </div>
        </div>
        <div class="max-w-[20rem] my-[1.3rem] bg-white rounded-lg border border-gray-200 shadow-md">
          <a href="#">
            <Image class="rounded-t-lg" src={cleanerImage} alt="" width="500%" height="400vh"/>
          </a>
          <div class="p-1 dark:bg-gray-700 dark:hover:bg-black rounded-lg border" >
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Cleaner</h5>
            </a>
              {/* <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> Get your items delivered </p> */}
          </div>
        </div>
        <div class="max-w-[20rem] my-[1.3rem] bg-white rounded-lg border border-gray-200 shadow-md">
          <a href="#">
            <Image class="rounded-t-lg" src={laundryImage} alt="" width="500%" height="400vh"/>
          </a>
          <div class="p-1 dark:bg-gray-700 dark:hover:bg-black rounded-lg border" >
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Laundry</h5>
            </a>
              {/* <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> Get your items delivered </p> */}
          </div>
        </div>
        <div class="max-w-[20rem] my-[1.3rem] bg-white rounded-lg border border-gray-200 shadow-md">
          <a href="#">
            <Image class="rounded-t-lg" src={dishImage} alt="" width="500%" height="400vh"/>
          </a>
          <div class="p-1 dark:bg-gray-700 dark:hover:bg-black rounded-lg border" >
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Delivery Service</h5>
            </a>
              {/* <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> Get your items delivered </p> */}
          </div>
        </div>
    
    
        
        
        
        
        
        
        

        
      

        

      </div>
    </div>

  )
}

export default Services