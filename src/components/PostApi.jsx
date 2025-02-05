import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const PostApi = () => {

  const [form, setForm] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    guardianName: "",
    departmentName: ""
  })

  const { id } = useParams()

  const navigate = useNavigate()

  const stdUrl = `http://192.168.0.106:8080/api/Student/${id}`

  const updateUrl = "http://192.168.0.106:8080/api/Student/update"

  const posturl = "http://192.168.0.106:8080/api/Student/register"

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const stdhandler = async (url) => {
    let response = await fetch(url)
    let resolve = await response.json()
    setForm(resolve.Data)
  }

  const updateData = async () => {
    setForm({ ...form, id: id })
    let result = await fetch(updateUrl, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form)
    })
    let resolve = await result.json()
    console.log(resolve)

    if (resolve.StatusCode === 200) {
      alert("Data Updated Successfully")
    }
    else {
      alert("Data Not Updated")
    }
  }

  const postdata = async () => {
    let result = await fetch(posturl, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form)
    })
    let resolve = await result.json()
    console.log(resolve)
    if (resolve.StatusCode === 200) {
      alert("Data Posted Successfully")
    } else {
      alert("Data Not Posted")
    }

  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    await postdata()
    setForm({
      id: "",
      name: "",
      email: "",
      phone: "",
      guardianName: "",
      departmentName: ""
    })
    navigate("/")
  }

  const handleUpdate = async (e) => {
    e.preventDefault()
    await updateData()
    setForm({
      id: "",
      name: "",
      email: "",
      phone: "",
      guardianName: "",
      departmentName: ""
    })
    navigate("/")
  }
  useEffect(() => {
    if (id) {
      stdhandler(stdUrl)
    } else {
      console.log(id)
      setForm({
        name: "",
        email: "",
        phone: "",
        guardianName: "",
        departmentName: ""
      })
    }
  }, [id == undefined])
  // }
  return (
    <>
      <div className="container">
        <div className="heading">
          {id ? "Update Form" : "Admission Form"}
        </div>
        <div>
          <form className='formData' onSubmit={id ? handleUpdate : handleSubmit}>
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
            <button type="submit" id="submit" >  {id ? "Update" : "Submit"} </button>
          </form>
        </div>

      </div>

    </>
  )
}

export default PostApi
