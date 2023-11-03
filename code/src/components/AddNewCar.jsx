import React from 'react'

const AddNewCar = () => {
  return (
    <>
      <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
        <form>
          <div>
            <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Car name</label>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="type car name"
              required />
          </div>
          <label for="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select status</label>
          <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Choose a status</option>
            <option value="US">Active</option>
            <option value="CA">Inactive</option>
          </select>
          <label for="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Car Type</label>
          <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Choose a type</option>
            <option value="US">Honda tang</option>
            <option value="CA">KIA Afternoon</option>
            <option value="CA">Toyotao</option>
            <option value="CA">Mazda</option>
          </select>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload Car Image</label>
          <input
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            id="file_input" type="file" />

          <button type="submit" className="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
      </div>
    </>
  )
}

export default AddNewCar