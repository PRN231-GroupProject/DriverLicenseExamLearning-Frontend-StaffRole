import React, { useContext, useEffect, useState } from 'react'
import { Header } from "../components";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import { FcAddDatabase, FcDeleteDatabase } from "react-icons/fc";
import { MdOutlineAdd } from "react-icons/md";
import { CgDetailsMore } from "react-icons/cg";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { IoCreateSharp } from "react-icons/io5";
import { ExamContext } from "../context/ExamContextProvider";
import { ToastContainer ,toast } from "react-toastify";
import axios from '../api/axios';
const QuestionBank = () => {
  //? Fetch data in api 
  const navigate = useNavigate();
  const [Questions, setQuestions] = useState([])
  const getQuestionBanks = async () => {
    const jwt = localStorage.getItem("jwt");
    const responseQuestionBanks = await axios.get("questionbank", {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`
      }
    });
    setQuestions(responseQuestionBanks.data);
  }
  useEffect(() => {
    getQuestionBanks();
  }, []);
  console.log(Questions);
  const [isOpen, setIsOpen] = useState(false)
  const exam = useContext(ExamContext);


  const [formData, setFormData] = useState({
    question: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    answer: '',
    licenseType: '',
    isParalysis: '',
    image: ''
  })


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

  };


  const handleSubmit = (e) => {


    console.log(e)
    exam.addQuestionToExam(e)
  }



  return (

    <div className='m-2 md:m-10  md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title="Question Bank">
      </Header>
      <div className='w-full pb-4'>
        <Link to="/AddSingleQuestion">
          <button type="button" className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2">
            <div className='pr-4'>
              <IoCreateSharp />
            </div>
            Add New Question
          </button>
        </Link>
      </div>
      <div className='w-full pb-4'>
        <Link to="/AddQuestion">
          <button type="button" className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2">
            <div className='pr-4'>
              <FcAddDatabase />
            </div>
            Create New Quiz
          </button>
        </Link>
      </div>

      <div className="flex items-center justify-between pb-4 bg-white dark:bg-gray-900">
        <div className='relative flex flex-col items-center  rounded-lg ' >
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className=' inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'>
            LicenseTypeID
            {!isOpen ? (
              <AiOutlineCaretDown className='h-8' />
            ) : (
              <AiOutlineCaretUp className='h-8' />
            )}
          </button >
          {isOpen &&
            <div className='z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-6000'>
              <div className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
                <h3 className='font-bold'>A1</h3>
              </div>
              <div className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
                <h3 className='font-bold'>A2</h3>
              </div>
              <div className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
                <h3 className='font-bold'>B1</h3>
              </div>
            </div>}
        </div>
        <label for="table-search" class="sr-only">Search</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input type="text" id="table-search-users" class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search by question" />
        </div>
      </div>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              Question
            </th>
            <th scope="col" className="px-6 py-3">
              LicenseTypeID
            </th>
            <th scope="col" className="px-6 py-3">
              Answer
            </th>
            <th scope="col" className="px-6 py-3">
              Detail
            </th>
          </tr>
        </thead>
        <tbody>
          {Questions.map((licensetype) => (
            licensetype.questions.map((question, index) => (
              <tr key={index} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white" >
                  {question.questionId}
                </td>
                <td className="px-6 py-4" name="question" value>
                  {question.text}
                </td>
                <td className="px-6 py-4">
                  {licensetype.name}
                </td>
                <td className="px-6 py-4">
                  {question.answer}
                </td>
                <td className="px-6 py-4 flex gap-3">
                  <button className='btn btn-success' onClick={() => { navigate("/Question", { state: { question: question } }) }}>
                    <CgDetailsMore />
                  </button>
                  <button className='btn btn-info'
                    onClick={() => handleSubmit(question)}
                  >
                    <MdOutlineAdd />
                  </button>
                  <button className='btn btn-danger'>
                    <FcDeleteDatabase />
                  </button>
                </td>
              </tr>
            ))
          ))}
        </tbody>
      </table>
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
    </div>

  )
}

export default QuestionBank