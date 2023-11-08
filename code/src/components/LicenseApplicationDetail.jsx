import React, { useState } from 'react'
import { useLocation } from "react-router-dom";
import axios from '../api/axios';
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const LicenseApplicationDetail = () => {
    const navigate = useNavigate();
    const [submitLicenseApplication, setSubmitLicenseApplication] = useState({
        "licenseTypeID": '',
        "userID": '',
        "status": '',
        "message": ''
    })
    const location = useLocation();
    console.log(location.state.license)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setSubmitLicenseApplication({ ...submitLicenseApplication, [name]: value });

    }
    const Information = location.state.license;
    const userID = location.state.userId
    const submit = async () => {
        submitLicenseApplication.userID = parseInt(userID);
        submitLicenseApplication.licenseTypeID = parseInt(Information.licenseTypeID)
        console.log(submitLicenseApplication)
        const jwt = localStorage.getItem("jwt");
        const responseSubmit = await axios.post("license_application/Check", submitLicenseApplication, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${jwt}`
            }
        })
        if (responseSubmit.status == 200) {
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
            navigate("/LicenseApplication")
        }

    }
    console.log(location.state.userId)
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
                <div>
                    <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">License Type ID</label>
                    <input
                        value={Information.licenseTypeID}
                        type="text"
                        id="first_name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="John"
                        disabled />
                </div>
                <div>
                    <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">License Application ID</label>
                    <input
                        value={Information.licenseApplicationId}
                        type="text"
                        id="last_name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Doe"
                        disabled />
                </div>
                <figure className="max-w-lg">
                    <img className="h-auto max-w-full rounded-lg" src={Information.citizenIdentificationCard} alt="image description" />
                    <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">Citizen Identification Card</figcaption>
                </figure>
                <figure className="max-w-lg">
                    <img className="h-auto max-w-full rounded-lg" src={Information.healthCertification} alt="image description" />
                    <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">Health Certification</figcaption>
                </figure>
                <figure className="max-w-lg">
                    <img className="h-auto max-w-full rounded-lg" src={Information.userImage} alt="image description" />
                    <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">User Image</figcaption>
                </figure>
                <figure className="max-w-lg">
                    <img className="h-auto max-w-full rounded-lg" src={Information.curriculumVitae} alt="image description" />
                    <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">Curriculum Vitae</figcaption>
                </figure>
                <div className='h-auto max-w-full rounded-lg'>
                    <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message</label>
                    <input
                        value={submitLicenseApplication.message}
                        type="text"
                        id="last_name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="please add message "
                        onChange={handleChange}
                        required
                        name='message' />
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
                        value={submitLicenseApplication.status}
                    >
                        <option selected="" value="">Accept Or Deny </option>
                        <option value="Accepted">Accept</option>
                        <option value="Denied">Deny</option>
                    </select>
                </div>
            </form>
            <button className='btn btn-info mt-4' onClick={submit}>
                Submit
            </button>
        </div>
    )
}

export default LicenseApplicationDetail
