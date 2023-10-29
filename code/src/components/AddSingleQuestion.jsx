import React, { useState, useContext } from 'react'
import { GrStorage } from "react-icons/gr";
import { Modal } from "react-bootstrap";
import { QuestionContext } from '../context/CartContextProvider'
import { Link, useLocation } from "react-router-dom";
import CartQuestionBank from "../components/Cart/CartQuestionBank";
import { ToastContainer } from "react-toastify";

function AddSingleQuestion() {

    const cart = useContext(QuestionContext);
    console.log(cart.items)
    const [showCart, setShow] = useState(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const questionCount = cart.items.reduce((sum, question) => sum += question.quantity, 0);

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
        console.log(formData);
        e.preventDefault();
        cart.addQuestionToCart(formData)
        console.log(cart.items)
    }


    return (
        <>
            <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
                <section class="bg-white dark:bg-gray-900">
                    <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                        <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add New Question To Bank</h2>
                        <form onSubmit={handleSubmit} >
                            <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                                <div class="sm:col-span-2">
                                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Question</label>
                                    <input
                                        onChange={handleChange}
                                        type="text"
                                        name="question"
                                        value={formData.question}
                                        id="name"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Type question"
                                        required="" />
                                </div>
                                <div class="w-full">
                                    <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Option 1</label>
                                    <input
                                        type="text"
                                        name="option1"
                                        id="brand"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        onChange={handleChange}
                                        value={formData.option1}
                                        placeholder="Type Option 1"
                                        required="" />
                                </div>
                                <div class="w-full">
                                    <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Option 2</label>
                                    <input
                                        type="text"
                                        name="option2"
                                        id="price"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Type Option 2"
                                        required=""
                                        onChange={handleChange}
                                        value={formData.option2} />
                                </div>
                                <div class="w-full">
                                    <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Option 3</label>
                                    <input
                                        type="text"
                                        name="option3"
                                        id="brand"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Type Option 3"
                                        required=""
                                        onChange={handleChange}
                                        value={formData.option3} />
                                </div>
                                <div class="w-full">
                                    <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Option 4</label>
                                    <input type="text"
                                        name="option4"
                                        id="price"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Type Option 4"
                                        required=""
                                        onChange={handleChange}
                                        value={formData.option4} />
                                </div>
                                <div class="w-full">
                                    <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Answer</label>
                                    <input type="text"
                                        name="answer"
                                        id="price"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Type Answer "
                                        required=""
                                        onChange={handleChange}
                                        value={formData.answer} />
                                </div>
                                <div>
                                    <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                                    <select
                                        id="category"
                                        name='licenseType'
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        required=""
                                        onChange={handleChange}
                                    >
                                        <option selected="" value={formData.licenseType}>Select license type </option>
                                        <option value="A1">A1</option>
                                        <option value="A2">A2</option>
                                        <option value="A2">B1</option>
                                    </select>
                                </div>
                                <div>
                                    <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Paralysis Question</label>
                                    <select id="category" name='isParalysis' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                        <option selected="" value={formData.isParalysis}>Is Paralysis Question </option>
                                        <option value="True">True</option>
                                        <option value="False">False</option>
                                    </select>
                                </div>
                                <div classNames="sm:col-span-2">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload file</label>
                                    <input
                                        name='image'
                                        value={formData.image}
                                        onChange={handleChange}
                                        className="block w-full text-sm text-gray-900 border border-gray-300  cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                        aria-describedby="file_input_help"
                                        id="file_input"
                                        type="file" />
                                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                                </div>
                            </div>
                            <button onClick={() => handleSubmit} className=" mt-2 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Add Question
                                </span>
                            </button>
                        </form>
                        <button onClick={handleShow} className=" mt-4 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                            <span className=" items-center  inline-flex relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                <GrStorage />
                                View
                                {questionCount}
                            </span>
                        </button>
                    </div>
                </section>
            </div>
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
            <Modal show={showCart} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>
                        Question Cart
                    </Modal.Title>

                </Modal.Header>
                <Modal.Body>
                    {questionCount > 0 ? <>
                        <p>Question Want to Add</p>
                        {cart.items.map((currentQuestion, idx) => (
                            <CartQuestionBank key={idx} question={currentQuestion.question} ></CartQuestionBank>
                        ))}
                        <h1>Total: {questionCount}</h1>
                    </> :
                        <h1>Not Question add in bank yet</h1>}
                </Modal.Body>
            </Modal>
        </>
    )
}


export default AddSingleQuestion    