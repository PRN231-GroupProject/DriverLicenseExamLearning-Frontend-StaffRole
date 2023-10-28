import React from 'react'
import { Header } from "../components";
const Car = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title="Car">
      </Header>

      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              Car Name
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Car Type
            </th>
            <th scope="col" className="px-6 py-3">
              Detail
            </th>
          </tr>
        </thead>
        <tbody>
          <tr key="1" className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              1
            </td>
            <td className="px-6 py-4">
              Toi tin minh dang
            </td>
            <td className="px-6 py-4">
            Active
            </td>
            <td className="px-6 py-4">
              Xe Dap
            </td>
            <td className="px-6 py-4">
              <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View Detail</a>
            </td>
          </tr>
        </tbody>
      </table>

    </div>
  )
}

export default Car