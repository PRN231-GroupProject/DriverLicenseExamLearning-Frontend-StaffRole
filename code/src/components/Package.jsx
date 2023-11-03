import React, { useEffect, useState } from 'react'
import { Header } from "../components";
import axios from '../api/axios';
import { AiFillDelete } from "react-icons/ai";
import { CgDetailsMore } from "react-icons/cg";
import { GrUpdate } from "react-icons/gr";
import { IoCreateSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
const Package = () => {
  const [Packages, setPackages] = useState([]);
  const getPackages = async () => {
    const jwt = localStorage.getItem("jwt");
    const responsePackage = await axios.get("package", {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`
      }
    });
    setPackages(responsePackage.data);
  }

  useEffect(() => {
    getPackages();
  }, [])

  console.log(Packages);
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title="Package">
      </Header>
      <div className='w-full pb-4'>
        <Link to="/AddNewPackage">
          <button type="button" className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2">
            <div className='pr-4'>
              <IoCreateSharp />
            </div>
            Add New Package
          </button>
        </Link>
      </div>
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
            {Packages.map((Ispackage, index) => (
              <tr key={index} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {Ispackage.packageId}
                </td>
                <td className="px-6 py-4">
                  {Ispackage.packageTypes[0].packageTypeName}
                </td>
                <td className="px-6 py-4">
                  {Ispackage.packageName}
                </td>
                <td className="px-6 py-4">
                  {Ispackage.price}
                </td>
                <td className="px-6 py-4">
                  <button className='btn btn-warning'>
                    <GrUpdate />
                  </button>
                  <button className='btn btn-danger '>
                    <AiFillDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Package