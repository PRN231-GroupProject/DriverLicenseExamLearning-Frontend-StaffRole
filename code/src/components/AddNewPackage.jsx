import React, { useState } from 'react'
import axios from '../api/axios';
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const AddNewPackage = () => {
  const navigate = useNavigate();
  const [Package, setPackage] = useState({
    'packageName': '',
    'price': '',
    'description': '',
    'packageTypeId': '',
    'numberOfKmOrDays': '',
    'licenseTypeId': ''
  });

  const onSubmit = () => {
    Package.licenseTypeId = parseInt(Package.licenseTypeId);
    Package.numberOfKmOrDays = parseInt(Package.numberOfKmOrDays);
    Package.packageTypeId = parseInt(Package.packageTypeId);
    console.log(Package)

    AddPackage();
  }

  const AddPackage = async () => {
    try {


      const jwt = localStorage.getItem("jwt");
      const responseAddPackage = await axios.post("/package", Package, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${jwt}`
        },
      })
      if (responseAddPackage.status == 200) {
        toast.success('🦄 Add Package Successfully', {
          position: "top-right",
          autoClose: 100,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate("/Package");
      }

    } catch (error) {
     
      toast.error('🙊 Check your data again ', {
              position: "top-right",
              autoClose: 100,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            })
    }
  }
  const onChange = (e) => {
    const { name, value } = e.target;
    setPackage({ ...Package, [name]: value })
  }
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <form>
        <div class="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Package name</label>
            <input
              type="text"
              name='packageName'
              value={Package.packageName}
              onChange={onChange}
              id="first_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="type package name  " required />
          </div>
          <div>
            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Price </label>
            <input
              name='price'
              value={Package.price}
              onChange={onChange}
              type="number"
              id="last_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="type price(500,000 ~ 20,0000,000)" required />
          </div>
          <div>
            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Package Type Name</label>
            <select
              id="countries"
              name='packageTypeId'
              value={Package.packageTypeId}
              onChange={onChange}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected>Choose  Package Type</option>
              <option value="1">Km</option>
              <option value="2">Days</option>
            </select>
          </div>
          <div>
            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select License Type Name</label>
            <select
              id="countries"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name='licenseTypeId'
              value={Package.licenseTypeId}
              onChange={onChange}
            >
              <option selected>Choose  License Type</option>
              <option value="1">A1</option>
              <option value="2">A2</option>
              <option value="3">B1</option>
            </select>
          </div>
          <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">NumberOfKmOrDays</label>
            <input
              type="number"
              id="first_name"
              name='numberOfKmOrDays'
              onChange={onChange}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="type number of km or days " required />
          </div>
          <div>
            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Description</label>
            <input
              name='description'
              onChange={onChange}
              value={Package.description}
              type="text"
              id="last_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="type description" required />
          </div>
        </div>
      </form>
      <button onClick={onSubmit} type="submit" className="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    </>
  )
}

export default AddNewPackage