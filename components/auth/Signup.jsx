import Input from './Input'
import SelectLocation from './SelectLocation'
import { useState } from 'react'

const Signup = () => {
    const [validEmail, setvalidEmail] = useState(true)
  return (
    <div className='section md:py-[3rem] bg-[#F4F6FA]'>
        <div className='flex flex-col justify-center items-center'>
            <div className='flex flex-col items-center w-[100%] lg:w-[50%] md:max-w-[100%] lg:border-[2px] h-[750px] md:h-[700px] border-gray-300 shadow-md pt-8 bg-white'> 
                <h3 className='pb-10 font-bold text-[1.6rem]'>Sign up</h3>
                <div className='w-[85%] md:w-[50%] lg:w-[70%] relative'>
                    <div className='md:flex justify-between '>
                        <Input for="firstName" id="firstName" label="" placeholder="first Name"/>
                        <Input for="lastName" id="lastName" label="" placeholder="last Name" />

                    </div>
                    <Input for="email" id="email" label="" placeholder="Email Address" />
                    {validEmail &&
                      <p class="mt-2 pb-5 text-sm text-green-600 dark:text-green-500 "><span class="font-medium">Well done!</span>You can proceed to create an account.</p> || 
                      <p class="mt-2 pb-5 text-sm text-red-600 dark:text-red-500 " ><span class="font-medium">Oh, Sorry!</span>  email already exists.</p>                    
                    }
                    <Input for="password" id="password" label="" placeholder="password" />
                    <Input for="confirmPassword" id="confirmPassword" label="" placeholder="confirm password" />
                    <SelectLocation />
                    <div class="pt-4" >
                        <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"> Employer or Freelancer? </label>
                        <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                            <option selected="">Choose an option</option>
                            <option value="US"> Employer </option>
                            <option value="CA">Freelancer</option>
                        </select>

                    </div>
                    <div className='pt-5 right-0 absolute'>
                        <button className='border border-gray-200 p-2 rounded-[10px] text-gray-50 bg-blue-500 '> Register</button>
                    </div>
                </div>
                <p className='pt-10 text-[15px]'>Have an account? <a href='/login' className='text-blue-400'> login</a></p>

            </div>
        </div>


    </div>
  )
}

export default Signup