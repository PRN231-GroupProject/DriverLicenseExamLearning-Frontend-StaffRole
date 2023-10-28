import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login, Main } from "./pages";
import React from 'react'
import { UseStateContext } from "./context/ContextProvider";
import { Sidebar, Navbar,Member, Mentor , Car, QuestionBank ,Quiz, MentorApplication ,LicenseApplication, Package} from "./components";
const App = () => {

  const { activeMenu, activeLogin } = UseStateContext()

  return (
    <div>
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
                  
                </Routes>
              </div>
            </div>
        )}
      </BrowserRouter>
    </div>
  )
}

export default App
