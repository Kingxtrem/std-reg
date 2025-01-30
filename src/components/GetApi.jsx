import React from 'react'
import { useState, useEffect } from 'react'
import Card from './Card'

const GetApi = () => {
  const [getdata, setGetdata] = useState([])
  const geturl = "http://192.168.0.106:8080/api/Student/allStudents?limit=100&page=1"
  // const geturl = "https://jsonplaceholder.typicode.com/users"
  const gethandler = async (url) => {
    let response = await fetch(url)
    let resolve = await response.json()
    setGetdata(resolve.Data)
    
  }
  useEffect(() => {
    gethandler(geturl)
  }, [])
  return (
    <>
      <h1 style={{textAlign:"center"}}>ALL STUDENT'S DETAILS</h1>
      <div className='container2'>
        {
          getdata?.map((item) => {
            return (
              <Card Name={item?.name} Mobile={item?.phone} key={item?.id} ID={item?.id} />
            )
          })}
      </div>
    </>
  )
}

export default GetApi
