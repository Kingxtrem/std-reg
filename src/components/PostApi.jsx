import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const PostApi = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    guardianName: "",
    departmentName: ""
  })
  const navigate = useNavigate()
  const posturl = "http://192.168.0.106:8080/api/Student/register"

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const postdata = async () => {
    let response = await fetch(posturl, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form)
    })
   
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    await postdata()
    setForm({
      name: "",
      email: "",
      phone: "",
      guardianName: "",
      departmentName: ""
    })
    navigate("/")
  }
  return (
    <>
      <div className="container">
        <div className="heading">
          Admission Form
        </div>
        <div>
          <form className='formData' onSubmit={handleSubmit}>
            <label htmlFor="fname">Full Name:
              <input type="text" name='name' value={form.name} id="fname" onChange={handleChange} />
            </label>
            <label htmlFor="email">Email:
              <input type="email" name='email' value={form.email} id="email" onChange={handleChange} />
            </label>
            <label htmlFor="phone">Phone:
              <input type="tel" name='phone' value={form.phone} id="phone" onChange={handleChange} />
            </label>
            <label htmlFor="gname">Guardian Name:
              <input type="text" name='guardianName' value={form.guardianName} id="gname" onChange={handleChange} />
            </label>
            <label htmlFor="dname">Department Name:
              <input type="text" name='departmentName' value={form.departmentName} id="dname" onChange={handleChange} />
            </label>
            <button type="submit" id="submit" > Submit </button>
          </form>
        </div>

      </div>

    </>
  )
}

export default PostApi
