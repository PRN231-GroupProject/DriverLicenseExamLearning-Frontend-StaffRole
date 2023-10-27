import React from 'react'
//?  get all member have roleId = 3
//* https://www.driverlicenseexamlearning.somee.com/api/user?filter=%20roleId%20eq%203
const Mentor = () => {
  return (
    <div className="flex pt-6 justify-center h-screen">
      <div classNames="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                User Name
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Phone Number
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
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                1
              </th>
              <td classNames="px-6 py-4">
                Comsuonhocmon
              </td>
              <td classNames="px-6 py-4">
                Comsuonhocmon
              </td>
              <td className="px-6 py-4">
                comsuonhocmon@gmail.com
              </td>
              <td className="px-6 py-4">
                0909090911
              </td>
              <td className="px-6 py-4">
                Active
              </td>
              <td classNames="px-6 py-4">
                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Mentor