import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login, Main } from "./pages";
import React from 'react'
import { UseStateContext } from "./context/ContextProvider";
import { Sidebar, Navbar, Member, Mentor, Car, QuestionBank, Quiz, MentorApplication, LicenseApplication, Package, AddQuestion, AddSingleQuestion, ViewMemberDetail, UpdateMember, UpdateCar, AddNewCar, AddNewPackage, MentorApplicationDetail, LicenseApplicationDetail, Question } from "./components";
import CartProvider from './context/CartContextProvider';
import ExamProvider from "./context/ExamContextProvider";
import ExamDetail from "./components/ExamDetail";
const App = () => {

  const { activeMenu, activeLogin } = UseStateContext()

  return (
    <div>
      <ExamProvider>
        <CartProvider>
          <BrowserRouter>
            {activeLogin ? (
              <Routes>
                <Route path='/' element={(<Login />)} />
              </Routes>
            ) : (
              <div className='flex relative w-full h-screen font-sans bg-cover '>

                <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
                  <Sidebar />
                </div>
                <div className={`dark:bg-main-bg bg-main-bg min-h-screen  w-full  md:ml-72 `}>
                  <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                    <Navbar />
                  </div>
                  <Routes>
                    <Route path='/main' element={(<Main />)} />
                    <Route path='/Member' element={(<Member />)} />
                    <Route path='/Mentor' element={(<Mentor />)} />
                    <Route path='/Car' element={(<Car />)} />
                    <Route path='/Quiz' element={(<Quiz />)} />
                    <Route path='/QuestionBank' element={(<QuestionBank />)} />
                    <Route path='/MentorApplication' element={(<MentorApplication />)} />
                    <Route path='/LicenseApplication' element={(<LicenseApplication />)} />
                    <Route path='/Package' element={(<Package />)} />
                    <Route path='/AddSingleQuestion' element={(<AddSingleQuestion />)} />
                    <Route path='/AddQuestion' element={(<AddQuestion />)} />
                    <Route path='/ViewMemberDetail' element={(<ViewMemberDetail />)} />
                    <Route path='/UpdateMember' element={(<UpdateMember />)} />
                    <Route path='/UpdateCar' element={(<UpdateCar />)} />
                    <Route path='/AddNewCar' element={(<AddNewCar />)} />
                    <Route path='/AddNewPackage' element={(<AddNewPackage />)} />
                    <Route path='/MentorApplicationDetail' element={(<MentorApplicationDetail />)} />
                    <Route path='/LicenseApplicationDetail' element={(<LicenseApplicationDetail />)} />
                    <Route path='/ExamDetail' element={(<ExamDetail />)} />
                    <Route path='/Question' element={(<Question />)} />

                  </Routes>
                </div>
              </div>
            )}
          </BrowserRouter>
        </CartProvider>
      </ExamProvider>
    </div>
  )
}

export default App
