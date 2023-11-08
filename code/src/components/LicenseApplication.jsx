import React, { useEffect, useState } from 'react'
import { Header } from "../components";
import { CgDetailsMore } from "react-icons/cg";
import axios from '../api/axios';
import { useNavigate } from "react-router-dom";

const LicenseApplication = () => {
  const navigate = useNavigate();
 
  const [LicenseApplication, setLicenseApplication] = useState([]);
  const getLicenseApplication = async () => {
    const jwt = localStorage.getItem("jwt");
    const responseLicenseApplication = await axios.get("license_application/ByStaff", {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`
      }
    });
    console.log(responseLicenseApplication.data);
    setLicenseApplication(responseLicenseApplication.data);
  }
  useEffect(() => {
    getLicenseApplication();
  }, [])
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
            {LicenseApplication.map((license, index) => (
              license.loader.map((loader) => (
                <tr key={index} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                  <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {license.userId}
                  </td>
                  <td className="px-6 py-4">
                    {loader.licenseTypeID}
                  </td>
                  <td className="px-6 py-4">
                    {loader.licenseApplicationId}
                  </td>
                  <td className="px-6 py-4">
                    {loader.status}
                  </td>
                  <td className="px-6 py-4">
                    <button className='btn btn-info' onClick={() => (navigate("/LicenseApplicationDetail", { state: { license: loader, userId: license.userId } }))}>
                      <CgDetailsMore />
                    </button>
                  </td>
                </tr>
              ))
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default LicenseApplication