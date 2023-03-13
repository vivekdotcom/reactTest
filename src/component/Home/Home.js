import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import './Home.css'

const Home = () => {

  const [userInfo, setUserInfo] = useState("")

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments?postId=1").then((res) => {
      setUserInfo(res.data)
    })
  }, [])

  console.log(userInfo)


  return (
    <div style={{ backgroundColor: "#dddddd54" }}>
      <h1 >Home</h1>
      <div className='table-date'>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Desc</th>
            </tr>
          </thead>
          <tbody>
            {
              userInfo && userInfo.map((item) => {
                return (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.name.slice(0, 5)}</td>
                    <td>{item.email}</td>
                    <td>{item.body.slice(0, 15)}</td>
                  </tr>
                )
              })
            }

          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default Home