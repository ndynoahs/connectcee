import React from 'react'

const SelectInput = ({ name, selected,value,label }) => {
  return (
    <div class="pt-4" >
        <label for="" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"> {label}</label>
        <select id={name} class="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
            <option selected="">{selected}</option>
            <option value="US"> {value} </option>
        </select>

    </div>
  )
}

export default SelectInput