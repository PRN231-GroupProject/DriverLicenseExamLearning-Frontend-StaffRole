import React from 'react'
import { Header } from "../components";

const LicenseApplication = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title="License Application">
      </Header>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                User ID
              </th>
              <th scope="col" className="px-6 py-3">
                License Type ID
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr key="1" className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                1
              </td>
              <td className="px-6 py-4">
                1
              </td>
              <td className="px-6 py-4">
                1
              </td>
              <td className="px-6 py-4">
                Processing
              </td>
              <td className="px-6 py-4">
                <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View Detail</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default LicenseApplication