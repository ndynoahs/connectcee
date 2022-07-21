import React from 'react'

const Jobinput = ({  label, name, type, placeholder }) => (
    <div class="mb-6 ">
        <label  class="block mb-2 text-sm font-medium text-gray-700 ">{label}</label>
        <input type={type} id={name} class="bg-gray-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-300 focus:border-blue-300 block w-full p-3" placeholder={placeholder} required=""/>
    </div>
  
)

export default Jobinput