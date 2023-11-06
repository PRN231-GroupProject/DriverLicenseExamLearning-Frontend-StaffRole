import React, { useEffect, useState } from 'react'
import { Header } from '../components'
import { CgDetailsMore } from "react-icons/cg";
import axios from '../api/axios';
import { useNavigate } from 'react-router-dom';
;
const MentorApplication = () => {
  
  const navigate = useNavigate();
  const [mentorApplication, setMentorApplication] = useState([]);
  const getMentorApplication = async () => {
    const jwt = localStorage.getItem("jwt");
    const responseMentorApplication = await axios.get("mentor-application", {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`
      }
    });

    setMentorApplication(responseMentorApplication.data);
    console.log(responseMentorApplication.data)
  }
  useEffect(() => {
    getMentorApplication();

  }, [])
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title="Mentor Application">
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
                Phone Number
              </th>
              <th scope="col" className="px-6 py-3">
                Gmail
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {mentorApplication.map((mentor, index) => (
              <tr key={index} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {index}
                </td>
                <td className="px-6 py-4">
                  {mentor.name}
                </td>
                <td className="px-6 py-4">
                  {mentor.phoneNumber}
                </td>
                <td className="px-6 py-4">
                  {mentor.email}
                </td>
                <td className="px-6 py-4">
                  <button className='btn btn-info'  onClick={() => {
                  navigate("/MentorApplicationDetail", {state : { mentorDetail : mentor}})
                }}>
                    <CgDetailsMore />
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

export default MentorApplication