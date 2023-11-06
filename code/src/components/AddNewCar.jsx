import React, { useEffect, useState } from 'react'
import axios from '../api/axios';
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
const AddNewCar = () => {
  const navigate = useNavigate();
  const [Car, setCar] = useState({
    'carName': '',
    'image': '',
    'status': '',
    'carType': ''
  })

  const onChange = (e) => {
    const { name, value } = e.target
    setCar({ ...Car, [name]: value });
  }
  const AddCar = async () => {
    const jwt = localStorage.getItem("jwt");
    const responseAddCar = await axios.post("/car", Car, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`
      },

    })
    if (responseAddCar.status == 200) {
    await  toast.success('🦄 Wow so easy!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate("/Car")
    }
  }
  const Submit = () => {
    console.log(Car)
    AddCar();
  }
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
      <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
        <form>
          <div>
            <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Car name</label>
            <input
              name='carName'
              onChange={onChange}
              value={Car.carName}
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="type car name"
              required />
          </div>
          <label for="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select status</label>
          <select id="countries"
            name='status'
            onChange={onChange}
            value={Car.status}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Choose a status</option>
            <option value="Active">Active</option>
            <option value="InActive">Inactive</option>
          </select>
          <label for="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Car Type</label>
          <select
            id="countries"
            name='carType'
            onChange={onChange}
            value={Car.carType}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Choose a type</option>
            <option value="Honda">Honda </option>
            <option value="KIA Afternoon">KIA Afternoon</option>
            <option value="Toyotao">Toyotao</option>
            <option value="Mazda">Mazda</option>
          </select>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload Car Image</label>
          <input
            name='image'
            value={Car.image}
            onChange={onChange}
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            id="file_input" type="file" />

        </form>
        <button onClick={Submit} type="submit" className="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </div>
    </>
  )
}

export default AddNewCar