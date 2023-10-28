import React, { useState } from 'react'
import axios from '../api/axios';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { UseStateContext } from "../context/ContextProvider"
const Login = () => {
    const { setActiveLogin, activeLogin } = UseStateContext()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log(email);
        console.log(password);

        try {
            const getUser = await axios.post('/user/login', { email, password }, {
                headers: { 'Content-Type': 'application/json' }
            });
            console.log(getUser?.data)
            console.log(getUser?.data.role.roleName)
            if (getUser?.data.role.roleName !== 'Staff') {
                setErrMsg('Login By Staff Role')
                toast.warn(errMsg, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            } else {
                setActiveLogin(!activeLogin)
                localStorage.setItem("jwt", getUser?.data.accessToken)
                navigate("/main")
            }
        } catch (error) {
            if (!error?.response) {
                setErrMsg('No Server Response')
            }


        }
    }
    return (
        <div className="w-full h-screen font-sans bg-cover bg-landscape">
            <div className="container flex items-center justify-center flex-1 h-full mx-auto">
                <div className="w-full max-w-lg">
                    <div className="leading-loose">
                        <form className="max-w-sm p-10 m-auto rounded shadow-xl bg-white/25">
                            <p className="mb-8 text-2xl font-light text-center text-white">
                                Login
                            </p>
                            <div className="mb-2">
                                <div className=" relative ">
                                    <input
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        type="text"
                                        required
                                        autoComplete='email'
                                        id="login-with-bg-email"
                                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                        placeholder="email" />
                                </div>
                            </div>
                            <div className="mb-2">
                                <div className=" relative ">
                                    <input
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        type="password"
                                        id="login-with-bg-password"
                                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                        placeholder="password" />
                                </div>
                            </div>
                            <div className="flex items-center justify-between mt-4">
                                <button type="submit"
                                    className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                                    onClick={handleLogin}
                                >
                                    Login
                                </button>
                            </div>

                        </form>
                        <ToastContainer
                            position="bottom-right"
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login