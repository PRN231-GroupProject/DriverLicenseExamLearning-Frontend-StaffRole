import React, { useEffect, useState } from 'react'
import { Header } from "../components";
import axios from "../api/axios";
import { AiFillDelete } from "react-icons/ai";
import { CgDetailsMore } from "react-icons/cg";
import { GrUpdate } from "react-icons/gr";
import { Button, Modal } from 'react-bootstrap';
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
//?Just take member have roleId = 4
//* https://www.driverlicenseexamlearning.somee.com/api/user?filter=%20roleId%20eq%204
const Member = () => {
    const navigate = useNavigate();
    const [isDeletedID, setIsDeleteID] = useState();
    const [Members, setMembers] = useState([]);
    const [showModal, setShow] = useState(false);
    const getMentor = async () => {
        const jwt = localStorage.getItem("jwt");
        const responseMember = await axios.get("user?filter=%20roleId%20eq%204", {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${jwt}`
            }
        });

        setMembers(responseMember.data);
    }
    useEffect(() => {
        getMentor()
    }, [])
    console.log(Members)
    const handleClose = () => {
        console.log('close')
        setShow(false)
    };
    const handleShow = () => setShow(true);
    const handleDelete = (e) => {
        handleShow();
        setIsDeleteID(e);
        console.log('Delete function' + e)
    }

    const acceptConfirmDelete = async () => {

        let deleteData = {

            "accountId": parseInt(isDeletedID),
            "reason": 'com suon hoc mon'


        }

        console.log(deleteData)

        const jwt = localStorage.getItem("jwt");
        const responseCar = await axios.delete("user", { data: { "accountId": parseInt(isDeletedID), "reason": "com suon hoc mon" } }, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${jwt}`
            }
        });

        if (responseCar.status == 200) {

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
            handleClose();
        }
    }
    return (

        <>
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
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Email
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Phone Number
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Status
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {Members.map((member, index) => (
                                <tr key={index} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                    <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {member.userId}
                                    </td>
                                    <td className="px-6 py-4">
                                        {member.userName}
                                    </td>
                                    <td className="px-6 py-4">
                                        {member.name}
                                    </td>
                                    <td className="px-6 py-4">
                                        {member.email}
                                    </td>
                                    <td className="px-6 py-4">
                                        {member.phoneNumber}
                                    </td>
                                    <td className="px-6 py-4">
                                        {member.status}
                                    </td>
                                    <td className="px-6 py-4  flex gap-3">
                                        
                                        <button className='btn btn-info  ' onClick={() => {
                                            navigate("/ViewMemberDetail", { state: { id: member.userId } })
                                        }}>
                                            <CgDetailsMore />
                                        </button>
                                        <button className='btn btn-danger ' onClick={() => handleDelete(member.userId)}>
                                            <AiFillDelete />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
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
        </>
    )
}

export default Member