import React, { useEffect, useState } from 'react'
import { Header } from "../components";
import axios from '../api/axios';
import { AiFillDelete } from "react-icons/ai";
import { CgDetailsMore } from "react-icons/cg";
import { GrUpdate } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';
import { IoCreateSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
const Car = () => {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleOpen = () => setShowModal(true);
  const [isDeleteCar, setIsDeleteCar] = useState();
  const navigate = useNavigate();
  const handleDelete = (e) => {
    handleOpen();
    setIsDeleteCar(e);
    console.log(e);
  }
  const [Cars, setCars] = useState([])
  const acceptConfirmDelete = () => {

    const jwt = localStorage.getItem("jwt");
    const responseData = axios.delete(`car?CarID=${isDeleteCar}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`
      }
    })
    if (responseData.status == 200) {
      handleClose();
      toast.success('🦄 Wow so easy!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }
  const getCars = async () => {
    const jwt = localStorage.getItem("jwt");
    const responseCar = await axios.get("car", {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`
      }
    });

    setCars(responseCar.data)
  }

  useEffect(() => {
    getCars()
  }
    , [])
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
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
      <Header category="Page" title="Car">
      </Header>
      <div className='w-full pb-4'>
        <Link to="/AddNewCar">
          <button type="button" className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2">
            <div className='pr-4'>
              <IoCreateSharp />
            </div>
            Add New Package
          </button>
        </Link>
      </div>
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
          {Cars.map((car, index) => (
            <tr key={index} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {car.carId}
              </td>
              <td className="px-6 py-4">
                {car.carName}
              </td>
              <td className="px-6 py-4">
                {car.status}
              </td>
              <td className="px-6 py-4">
                {car.carType}
              </td>
              <td className="px-6 py-4 flex gap-3">
                <button className='btn btn-warning' onClick={() => {
                  navigate("/UpdateCar", { state: { car: car } })
                }}
                >
                  <GrUpdate />
                </button>
                <button className='btn btn-danger' onClick={() => handleDelete(car.carId)}>
                  <AiFillDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Delete User
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Do you really want to ban this use !!!!
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={() => handleClose()}>
            Close
          </Button>
          <button className='btn btn-danger' onClick={acceptConfirmDelete}>
            Delete
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Car