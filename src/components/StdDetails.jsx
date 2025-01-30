import React, { useEffect, useState,createContext } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
const userContext=createContext()
const StdDetails = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [std, setStd] = useState({})
  const stdUrl = `http://192.168.0.106:8080/api/Student/${id}`
  // const stdUrl=`https://jsonplaceholder.typicode.com/users/${id}`
  const stdhandler = async (url) => {
    let response = await fetch(url)
    let resolve = await response.json()
    setStd(resolve.Data)
  }
  const deleteHandler = async () => {
    await fetch(stdUrl, { method: "DELETE" })
    navigate("/")
  }
  useEffect(() => {
    stdhandler(stdUrl)
  }, [])
  return (
<userContext.Provider value={std}>
    <div className='container3'>
      <h3>NAME:{std?.name}</h3>
      <h4>EMAIL:{std?.email}</h4>
      <h4>MOBILE:{std?.phone}</h4>
      <h4>GUARDIAN NAME:{std?.guardianName}</h4>
      <h4>DEPARTMENT NAME:{std?.departmentName}</h4>
      <div className='container4'>
        <Link to={`/Update/${id}`}><button>Update</button></Link>
        <button onClick={deleteHandler}>Delete</button></div>
    </div>
   
    </userContext.Provider>
  )
}
export default StdDetails
