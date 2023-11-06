import React, { useEffect, useState } from 'react'
import { Header } from "../components";
import { CgDetailsMore } from "react-icons/cg";
import axios from '../api/axios';
import { useNavigate } from "react-router-dom";

const LicenseApplication = () => {
  const navigate = useNavigate();
  const data = [
    {
      "userId": 4,
      "loader": [
        {
          "licenseTypeID": 1,
          "licenseApplicationId": 1,
          "citizenIdentificationCard": "https://firebasestorage.googleapis.com/v0/b/prn221-save-image.appspot.com/o/license-application%2Fgroup_8_2__1.png?alt=media&token=2cdc8b0e-971b-43f2-899d-82423a38595c",
          "healthCertification": "https://firebasestorage.googleapis.com/v0/b/prn221-save-image.appspot.com/o/license-application%2F284268_A%20cat%20sitting%20in%20front%20of%20his%20laptop%2C%20crying%20when%20_xl-1024-v1-0.png?alt=media&token=2c177d20-74cd-487f-959e-54e28a5481b2",
          "userImage": "https://firebasestorage.googleapis.com/v0/b/prn221-save-image.appspot.com/o/license-application%2F831147_A%20cat%2C%20sitting%20in%20front%20of%20the%20computer%2C%20crying%20wh_xl-1024-v1-0.png?alt=media&token=674615d1-93c8-44c3-89f3-c250aa87be53",
          "curriculumVitae": "https://firebasestorage.googleapis.com/v0/b/prn221-save-image.appspot.com/o/license-application%2F246066_a%20raccoon%20with%20her%20yellow%20hamster%20playing%20together_xl-1024-v1-0.png?alt=media&token=62de1e64-b0b5-4962-983b-bdfd6eb59d18",
          "status": "Proccessing"
        },
        {
          "licenseTypeID": 1,
          "licenseApplicationId": 2,
          "citizenIdentificationCard": "quan trong.txt",
          "healthCertification": "pngwing.com.png",
          "userImage": "pngwing.com.png",
          "curriculumVitae": "pngwing.com.png",
          "status": "Proccessing"
        },
        {
          "licenseTypeID": 3,
          "licenseApplicationId": 3,
          "citizenIdentificationCard": "https://firebasestorage.googleapis.com/v0/b/prn221-save-image.appspot.com/o/license-application%2Fpngwing.com.png?alt=media&token=bb77f23c-abb2-4efe-babf-96a96174f681",
          "healthCertification": "https://firebasestorage.googleapis.com/v0/b/prn221-save-image.appspot.com/o/license-application%2Fpngwing.com.png?alt=media&token=feff131e-3a3c-49dc-8836-a9b307cbe2a6",
          "userImage": "https://firebasestorage.googleapis.com/v0/b/prn221-save-image.appspot.com/o/license-application%2Fpngwing.com.png?alt=media&token=d52dc40f-60ba-493d-a7ea-2bf82ebe33a4",
          "curriculumVitae": "https://firebasestorage.googleapis.com/v0/b/prn221-save-image.appspot.com/o/license-application%2Fpngwing.com.png?alt=media&token=7848e8c5-21f0-4376-8746-eb9dd87cd4bd",
          "status": "Proccessing"
        }
      ]
    }
  ]
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
            {data.map((license, index) => (
              license.loader.map((loader) => (
                <tr key={index} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                  <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {license.userId}
                  </td>
                  <td className="px-6 py-4">
                  </td>
                  {loader.licenseTypeID}
                  <td className="px-6 py-4">
                    {loader.licenseApplicationId}
                  </td>
                  <td className="px-6 py-4">
                    {loader.status}
                  </td>
                  <td className="px-6 py-4">
                    <button className='btn btn-info' onClick={() => (navigate("/LicenseApplicationDetail", {state : { license : loader,userId : license.userId}}))}>
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