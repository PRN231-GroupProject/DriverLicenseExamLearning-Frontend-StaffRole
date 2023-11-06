import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from '../api/axios';
import { ToastContainer, toast } from "react-toastify";

const MentorApplicationDetail = () => {
    const location = useLocation()
    const [mentorInfo, setMentorInfo] = useState(location.state.mentorDetail);
    const [submitMentorApplication, SetSubmitMentorApplication] = useState({
        "status": "",
        "email": "",
        "subject": "",
        "body": ""
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        SetSubmitMentorApplication({ ...submitMentorApplication, [name]: value });

    }
    const submit = async () => {
        submitMentorApplication.email = mentorInfo.email;
        if (submitMentorApplication.status == "Accepted") {
            submitMentorApplication.subject = "Configurations from Dryver to be Mentor"
        }
        if (submitMentorApplication.status == "Denied") {
            submitMentorApplication.subject = "Thanks you <3"
        }
        console.log(submitMentorApplication)

        const jwt = localStorage.getItem("jwt");
        const responseSubmitMentorApplication = await axios.post("/mentor-application", {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${jwt}`
            }
        })
        if (responseSubmitMentorApplication.status == 200) {
            toast.success('🦄 Wow so easy!', {
                position: "top-right",
                autoClose: 100,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }

    }
    console.log(location.state.mentorDetail);
    return (
        <div className='py-8 px-4 mx-auto max-w-2xl lg:py-16'>
            <ToastContainer
                position="top-right"
                autoClose={100}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <h3 className='text-center mb-4'>Mentor Information</h3>
            <form>
                <div class="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mentor Name</label>
                        <input
                            value={mentorInfo.mentorName}
                            type="text"
                            id="first_name"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="John"
                            disabled />
                    </div>
                    <div>
                        <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                        <input
                            value={mentorInfo.name}
                            type="text"
                            id="last_name"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Doe"
                            disabled />
                    </div>
                    <div>
                        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                        <input
                            value={mentorInfo.phoneNumber}
                            type="text"
                            id="first_name"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="John"
                            disabled />
                    </div>
                    <div>
                        <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input
                            value={mentorInfo.email}
                            type="text"
                            id="last_name"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Doe"
                            disabled />
                    </div>
                    <div>
                        <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Experience</label>
                        <input
                            value={mentorInfo.experience}
                            type="text"
                            id="last_name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Doe"
                            disabled />
                    </div>
                    <div>

                    </div>
                    <figure className="max-w-lg">
                        <img className="h-auto max-w-full rounded-lg" src={"https://firebasestorage.googleapis.com/v0/b/prn221-save-image.appspot.com/o/MentorApplication%2F" + mentorInfo.bio + "?alt=media&token=4fba535f-2cca-40a1-ab60-de42778a10b5"} alt="image description" />
                        <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">Image caption</figcaption>
                    </figure>
                    <div></div>
                    <div className='h-auto max-w-full rounded-lg'>
                        <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message</label>
                        <input
                            value={submitMentorApplication.body}
                            type="text"
                            id="last_name"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="please add message "
                            onChange={handleChange}
                            required
                            name='body' />
                    </div>
                    <div>
                        <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status</label>
                        <select
                            id="category"
                            name='status'
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            onChange={handleChange}
                            required=""
                            type='text'
                            value={submitMentorApplication.status}
                        >
                            <option selected="" value="">Accept Or Deny </option>
                            <option value="Accepted">Accept</option>
                            <option value="Denied">Deny</option>
                        </select>
                    </div>
                </div>
            </form>
            <button className='btn btn-info mt-4' onClick={submit}>
                Submit
            </button>
        </div>
    )
}

export default MentorApplicationDetail