import React from 'react'
import { Header } from "../components";
function AddQuestion({ props }) {




  return (
    <div className='m-2 md:m-10  md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title="Question Bank">
      </Header>
      <section className="bg-white dark:bg-gray-900">
        <div className="px-4 mx-auto max-w-2xl ">
          <form action="#">
            <div className="sm:col-span-2">
              <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Exam Name</label>
              <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type product name" required="" />
            </div>
            <div>
              <label for="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status</label>
              <select id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                <option selected="">Select status</option>
                <option value="TV">InActive</option>
                <option value="PC">Active</option>
              </select>
            </div>
            <div>
              <label for="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">LicenseType</label>
              <select id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                <option selected="">Select License Type</option>
                <option value="TV">A1</option>
                <option value="PC">A2</option>
                <option value="GA">B1</option>
              </select>
            </div>
          </form>
        </div>
      </section>
    </div >
  )
}

export default AddQuestion
