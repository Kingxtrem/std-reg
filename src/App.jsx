import React from 'react'
import "./App.css"
import GetApi from './components/GetApi';
import PostApi from './components/PostApi';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Std_details from './components/std_details';
import Update from './components/Update';
const App = () => {
 
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<GetApi />} />
          <Route path='/PostApi' element={<PostApi />} />
          <Route path='/Std_details/:id' element={<Std_details/>} />
          <Route path='/Update/:id' element={<Update/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
