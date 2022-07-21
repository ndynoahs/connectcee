import React from 'react'
import Input from './Input'

const Login = () => {
  return (
    <div className='section h-[700px] py-[5rem] bg-[#F4F6FA]'>
        {/* <div className='flex flex-col justify-center items-center'>
            <h3 className='pb-10 font-bold text-[1.6rem]'>Login</h3> 
            <form className='lg:w-[40%] md:max-w-[100%] lg:border-[2px] border-gray-300 shadow-md p-10 bg-white'>
                <div class="mb-6">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-500 ">Your email</label>
                    <input type="email" id="email" class="bg-gray-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-300 focus:border-blue-300 block w-full p-2.5" placeholder="name@flowbite.com" required=""/>
                </div>
                <div class="mb-6">
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-500 ">Your password</label>
                    <input type="password" id="password" class="bg-gray-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-300 focus:border-blue-300 block w-full p-2.5 " required=""/>
                </div>
                <div class="flex items-start mb-6">
                    <div class="flex items-center h-5">
                    <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-400 rounded bg-gray-10 focus:ring-300 focus:ring-blue-300" required=""/>
                    </div>
                    <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                </div>
                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
        </div> */}

        <div className='flex flex-col justify-center items-center'>
            <div className='flex flex-col justify-center items-center w-[100%] lg:w-[50%] md:max-w-[100%] lg:border-[2px] h-[350px] border-gray-300 shadow-md p-10 bg-white'> 
                    <h3 className='pb-10 font-bold text-[1.6rem]'>Login</h3>
                    <div className='w-[85%] md:w-[50%] lg:w-[60%] '>
                        <Input for="email" id="email" label="" placeholder="email address"/>
                        <Input for="password" id="password" label="" placeholder="password"/>
                        <p><input type="checkbox"/> remember me</p>
                    </div>

                    <p className='pt-10 text-[15px]'>Don't have an account? <a href='/signup' className='text-blue-400'> create one</a></p>


              
            </div>
        </div>


    </div>

  )
}

export default Login