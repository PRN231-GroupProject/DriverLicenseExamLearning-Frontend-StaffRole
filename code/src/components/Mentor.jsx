import React, { useEffect, useState } from 'react'
import { Header } from "../components";
import axios from "../api/axios";
import { AiFillDelete } from "react-icons/ai";
import { CgDetailsMore } from "react-icons/cg";
import { GrUpdate } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';
//?  get all member have roleId = 3
//* https://www.driverlicenseexamlearning.somee.com/api/user?filter=%20roleId%20eq%203
const Mentor = () => {
  const navigate = useNavigate();
  const [Mentors, setMentors] = useState([]);
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
                  <button className='btn btn-warning' onClick={() => {
                    navigate("/UpdateMember", { state: { object: mentor } })
                  }}>
                    <GrUpdate />
                  </button>
                  <button className='btn btn-info' onClick={() => {
                    navigate("/ViewMemberDetail", { state: { id: mentor.userId } })
                  }}>
                    <CgDetailsMore />
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

export default Mentor