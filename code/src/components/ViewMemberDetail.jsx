import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
import axios from '../api/axios';
import MemberTransactionDetail from './MemberTransactionDetail';
const ViewMemberDetail = () => {
    const [countTransaction, setCount] = useState();
    const [UserDetail, setUserDetail] = useState([]);
    const [TransactionGet, setTransactionGet] = useState([]);

    const location = useLocation();
    useEffect(() => {
        console.log(" i am in effect")
        getMentor();
        getTransactionByItem();



    }, [])
    const getMentor = async () => {
        const jwt = localStorage.getItem("jwt");
        const responseMember = await axios.get(`user?$filter=userId eq ${location.state.id}`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${jwt}`
            }
        });

        console.log(responseMember.data[0])
        setUserDetail(responseMember.data[0]);
    }

    const getTransactionByItem = async () => {
        const jwt = localStorage.getItem("jwt");
        const responseTransaction = await axios.get(`Transaction?$filter=userId eq ${location.state.id}`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${jwt}`
            }
        });
        setTransactionGet(responseTransaction);
        console.log(responseTransaction)
        setCount(responseTransaction.data.length)
        console.log(countTransaction)

    }

    return (
        <>
            <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
                <form>
                    <div className='grid gap-6 mb-6 md:grid-cols-2'>
                        <div>
                            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User Name</label>
                            <input
                                value={UserDetail.userName}
                                type="text"
                                id="first_name"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                disabled />
                        </div>
                        <div>
                            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                            <input
                                value={UserDetail.name}
                                type="text"
                                id="last_name"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                disabled />
                        </div>
                        <div>
                            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input
                                value={UserDetail.email}
                                type="text"
                                id="last_name"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                disabled />
                        </div>
                        <div>
                            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                            <input
                                value={UserDetail.phoneNumber}
                                type="text"
                                id="last_name"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                disabled />
                        </div>
                        <div>
                            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                            <input
                                value={UserDetail.address}
                                type="text"
                                id="last_name"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                disabled />
                        </div>
                        <div>
                            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status</label>
                            <input
                                value={UserDetail.status}
                                type="text"
                                id="last_name"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                disabled />
                        </div>
                    </div>
                    {countTransaction > 0 ?
                        <>
                            <h3 className='text-blue-600/100 text-5xl'>This use have: {countTransaction}</h3>
                            <MemberTransactionDetail transaction={TransactionGet}></MemberTransactionDetail>
                        </> :
                        <h3>
                            Don't have any Transaction
                        </h3>}
                </form >
            </div>
        </>
    )
}

export default ViewMemberDetail