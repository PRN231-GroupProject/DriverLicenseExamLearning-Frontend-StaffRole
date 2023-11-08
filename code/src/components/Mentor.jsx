import React, { useEffect, useState } from 'react'
import { Header } from "../components";
import axios from "../api/axios";
import { AiFillDelete } from "react-icons/ai";
import { CgDetailsMore } from "react-icons/cg";
import { GrUpdate } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';
import { Modal, Button } from "react-bootstrap";

import { toast , ToastContainer } from "react-toastify";
//?  get all member have roleId = 3
//* https://www.driverlicenseexamlearning.somee.com/api/user?filter=%20roleId%20eq%203
const Mentor = () => {

  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false)
  const [Mentors, setMentors] = useState([]);
  const getModelShow = () => setShowModal(true);
  const getModelClose = () => setShowModal(false);
  const getMentor = async () => {
    const jwt = localStorage.getItem("jwt");
    const responseMentor = await axios.get("user?filter=%20roleId%20eq%203", {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`
      }
    });

    setMentors(responseMentor.data);
  }
  useEffect(() => {
    getMentor()
  }, [])
  console.log(Mentors)
  const acceptConfirmDelete = async () => {

    const jwt = localStorage.getItem("jwt");
    const responseDeleteMember = await axios.delete("")
    toast.success('🦄 Delete Successfully!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    getModelClose();
  }
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title="Mentor">
      </Header>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
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
                Phone Number
              </th>
              <th scope="col" className="px-6 py-3">
                Phone Number
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {Mentors.map((mentor, index) => (
              <tr key={index} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {mentor.userId}
                </td>
                <td className="px-6 py-4">
                  {mentor.name}
                </td>
                <td className="px-6 py-4">
                  {mentor.phoneNumber}
                </td>
                <td className="px-6 py-4">
                  <button className='btn btn-info' onClick={() => {
                    navigate("/ViewMemberDetail", { state: { id: mentor.userId } })
                  }}>
                    <CgDetailsMore />
                  </button>
                  <button className='btn btn-danger ' onClick={() => getModelShow()}>
                    <AiFillDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal show={showModal} onHide={getModelClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Delete User
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Do you really want to ban this use !!!!
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={() => getModelClose()}>
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

export default Mentor