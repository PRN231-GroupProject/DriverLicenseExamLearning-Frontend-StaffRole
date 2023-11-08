import React, { useContext, useState } from 'react'
import { Header } from "../components";
import { ExamContext } from "../context/ExamContextProvider";
import { CartExam } from './Cart/CartExam';
import { MdAddTask } from "react-icons/md";
import axios from '../api/axios';
import { ToastContainer, toast } from "react-toastify";
const AddQuestion = () => {
  const cart = useContext(ExamContext);
  const questionCount = cart.items.reduce((sum, question) => sum += question.quantity, 0);
  const [QuestionInfo, setQuestionInfo] = useState({
    examName: '',
    licensetype: '',
    status: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuestionInfo({ ...QuestionInfo, [name]: value });

    if (name === 'licensetype') {
      console.log('hello inside')
      cart.setLicenseType(e.target.value)
    }
  };

  const submit = async () => {

    const jsonformat = {
      'status': '',
      'examName': '',
      'licenseTypeId': '',
      'questionID': []
    }
    jsonformat.status = QuestionInfo.status;
    jsonformat.examName = QuestionInfo.examName;
    jsonformat.licenseTypeId = parseInt(QuestionInfo.licensetype);

    const countQuestionAdd = questionCount;
    for (let index = 0; index < countQuestionAdd; index++) {
      jsonformat.questionID.push(parseInt(cart.items[index].question.questionId))
    }
    const jwt = localStorage.getItem("jwt");
    console.log(jsonformat)

    const responseAddQuiz = await axios.post("exam/Create", jsonformat, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`
      },
    });
    if (responseAddQuiz.status == 200) {
      toast.success('🦄  Add Question Successfully!', {
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
  return (
    <>
      <div className='m-2 md:m-10  md:p-10 bg-white rounded-3xl'>
        <Header category="Page" title="Question Bank">
        </Header>
        <section className="bg-white dark:bg-gray-900">
          <div className="px-4 mx-auto max-w-2xl ">
            <form action="#">
              <div className="sm:col-span-2">
                <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Exam Name</label>
                <input
                  type="text"
                  name="examName"
                  value={QuestionInfo.examName}
                  onChange={handleChange}
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type product name"
                  required="" />
              </div>
              <div>
                <label for="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status</label>
                <select
                  id="category"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={QuestionInfo.status}
                  name='status'
                  onChange={handleChange}
                >
                  <option selected="">Select status</option>
                  <option value="Private">Private</option>
                  <option value="Public">Active</option>
                </select>
              </div>
              <div>
                <label for="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">LicenseType</label>
                <select
                  name='licensetype'
                  onChange={handleChange}
                  id="category"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={QuestionInfo.licensetype}
                >
                  <option selected="" >Select License Type</option>
                  <option value="1">A1</option>
                  <option value="2">A2</option>
                  <option value="3">B1</option>
                </select>
              </div>
            </form>
          </div>
        </section>
      </div >
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
      {questionCount > 0 ?
        <>
          <h3>Number of Question :  {questionCount}</h3>
          {cart.items.map((currentQuestion, idx) => (
            <CartExam key={idx} question={currentQuestion.question}></CartExam>
          ))}
          <button className='btn btn-success' onClick={submit}>
            Submit <MdAddTask />
          </button>
        </> :
        <h1>Don't have any question add</h1>}
    </>

  )
}

export default AddQuestion
