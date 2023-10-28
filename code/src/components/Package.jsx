import React from 'react'
import { Header } from "../components";
const Package = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title="Package">
      </Header>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Package Type
              </th>
              <th scope="col" className="px-6 py-3">
                Package Name
              </th>
              <th scope="col" className="px-6 py-3">
                Price
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
                Lai May bay
              </td>
              <td className="px-6 py-4">
                2000
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

export default Package