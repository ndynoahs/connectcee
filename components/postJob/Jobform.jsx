import React from 'react'
import Image from "next/image"
import Input from '../auth/Input'
import JobLocation from '../postJob/JobLocation'
import Jobinput from './Jobinput'
import SelectInput from './SelectInput'
import master from '../../public/img/items/mastercard.png'
import visa from '../../public/img/items/visa.png'
import paypal from '../../public/img/items/paypal.png'





const Jobform = () => {
  return (
        <div className='flex flex-col justify-center items-center'>
            {/* <div className='flex flex-col relative items-center w-[100%] lg:w-[80%] md:max-w-[100%] lg:border-[2px] h-[750px] md:h-[700px] border-gray-300 shadow-md pt-8 bg-white'> */}
                <div className='hidden w-[85%] md:w-[50%] lg:w-[50%] relative'>
                    <Jobinput for="jobTitle" id="jobTitle" label="Title" placeholder="" />
                    <label for="countries" class="block mb-3 text-sm font-medium text-gray-900 dark:text-gray-700"> Category </label>
                    <select id="countries" class="bg-gray-50 border mb-6 border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                        <option selected="">Select one</option>
                        <option value="US"> Logistics </option>
                        <option value="CA">Laundry</option>
                    </select>
                    <label for="countries" class="block mt-4 mb-3 text-sm font-medium text-gray-900 dark:text-gray-700"> Sub Category </label>
                    <select id="countries" class="bg-gray-50 border mb-6  border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                        <option selected="">Choose an option</option>
                        <option value="US"> Employer </option>
                        <option value="CA">Freelancer</option>
                    </select>
                    <Jobinput type="number" for="budget" id="budget" label="Budget" placeholder="" />
                    <JobLocation />

                    <label for="message" class="block mb-2 text-sm font-medium text-gray-700">Description</label>
                    <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300  " placeholder="Your message..."></textarea>
                </div> 
                {/* <button className="bg-blue-500 text-gray-100 px-2 py-1 rounded-lg absolute bottom-[3rem] right-[18rem] ">Continue</button> */}              
            {/* </div> */}
            <div className=' mt-9 w-[85%] md:w-[50%] lg:w-[50%] relative'>
                <div class="">
                    <p>In case you made a change, click on the review button on the payment tab to refresh these details.</p>
                    <p className="py-5">
                        <b>Title: </b>
                        <span id="title-preview"> I need somone to cook for me</span>
                    </p>
                    <p className="py-5">
                        <b>Category: </b>
                        <span id="category-preview">Food</span>
                    </p>
                    <p className="py-5">
                        <b>Sub Category: </b>
                        <span id="sub-preview">Cooking</span>
                    </p>
                    <p className="py-5">
                        <b>Budget: </b>
                        <span id="budget-preview">$10</span>
                    </p>
                    <p className="py-5">
                        <b>Description: </b>
                        <span id="title-preview">I stay in 42 Stampord street and i would need somone to cook for me.</span>
                    </p>
                    <p className="py-5">
                        <b>State: </b>
                        <span id="state-preview">England</span>
                    </p>
                    <p className="py-5">
                        <b>City: </b>
                        <span id="lga-preview">London</span>
                    </p>
                                                   
                </div>           
            </div> 

            <div className='hidden mt-9 w-[85%] md:w-[50%] lg:w-[50%] relative'>
                <label class="form-label">Payment method</label>
                <div className="bg-gray-10 border flex justify-between py-4 my-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-300 focus:border-blue-300  w-full p-3">
                    <div className="flex">
                        <input type="radio" required name="form-payment" value="visa" id="paymentCard" class="form-selectgroup-input"/>
                        <p className="pl-4 text-[16px]">Visa</p>
                    </div>    
                    <Image class="rounded-t-lg right-0" src={visa} alt="" width="70px" height="30vh"/>

                </div>
                <div className="bg-gray-10 border flex justify-between py-4 my-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-300 focus:border-blue-300  w-full p-3">
                    <div className="flex">
                        <input type="radio" required name="form-payment" value="mastercard" id="paymentCard" class="form-selectgroup-input"/>
                        <p className="pl-4 text-[16px]">Mastercard</p>
                    </div>
                    <Image class="rounded-t-lg absolute right-0" src={master} alt="" width="70px" height="30vh"/>
                </div>
                <div className="bg-gray-10 border flex justify-between py-4 my-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-300 focus:border-blue-300  w-full p-3">
                    <div className="flex">
                        <input type="radio" required name="form-payment" value="Paypal" id="paymentCard" class="form-selectgroup-input"/>
                        <p className="pl-4 text-[16px]">Paypal</p>
                    </div>
                    <Image class="rounded-t-lg absolute right-0" src={paypal} alt="" width="70px" height="30vh"/>
                </div>
                
                <div className="bg-gray-10 border flex py-4 my-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-300 focus:border-blue-300  w-full p-3">
                    <input type="radio" required name="form-payment relative" value="none" id="paymentCard" class="form-selectgroup-input"/>
                    <p className="pl-4 text-[16px]">Pay Later</p>
                </div>
                


            </div>

        </div>

        
  )
}

export default Jobform