import React from 'react'

const Modal = (props) => {
  return (
    <div>
        {/* <!-- Modal toggle --> */}
        {/* <button class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="authentication-modal">
            Toggle modal
        </button> */}

        {/* <!-- Main modal --> */}
        {/* <div id="authentication-modal" tabindex="-1" class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex" aria-modal="true" role="dialog"> */}
        <div id={props.id} tabindex="-1" class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex" aria-modal="true" role="dialog">

            <div class="relative p-4 w-full max-w-lg h-full md:h-[200px]">
                {/* <!-- Modal content --> */}
                <div class="relative bg-white rounded-lg shadow ">
                    <button type="button" class="absolute top-3 right-2.5 text-gray-500 bg-transparent hover:bg-gray-50 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center " data-modal-toggle="authentication-modal">
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
                            <button type="button" class="  text-gray-500 bg-transparent hover:bg-gray-50 hover:text-gray-900 rounded-lg text-sm p-1.5  items-center " data-modal-toggle="authentication-modal">
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

export default Modal