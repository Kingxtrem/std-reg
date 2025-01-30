import React from 'react'
import "./App.css"
import GetApi from './components/GetApi';
import PostApi from './components/PostApi';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import StdDetails from './components/StdDetails';
import Update from './components/Update';
const App = () => {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<GetApi />} />
          <Route path='/PostApi' element={<PostApi />} />
          <Route path='/StdDetails/:id' element={<StdDetails />} />
          <Route path='/Update/:id' element={<Update />} />
          <Route path='*' element={<div>404 not found</div>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
