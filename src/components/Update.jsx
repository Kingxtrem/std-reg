import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const Update = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    guardianName: "",
    departmentName: ""
  })
  const stdUrl = `http://192.168.0.106:8080/api/Student/${id}`
  const stdhandler = async (url) => {
    let response = await fetch(url)
    let resolve = await response.json()
    setForm(resolve.Data)
  }
  useEffect(() => {
    stdhandler(stdUrl)
  }, [])
  const updateUrl = "http://192.168.0.106:8080/api/Student/update"
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const updateData = async () => {
    let response = await fetch(updateUrl, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form)
    })
  }
  const handleUpdate = async (e) => {
    e.preventDefault()
    await updateData()
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
          Update Form
        </div>
        <div>
          <form className='formData' onSubmit={handleUpdate}>
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
            <button type="submit" id="submit" > Update </button>
          </form>
        </div>

      </div>
    </>
  )
}

export default Update
