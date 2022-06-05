import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const UserPage = () => {
    const [data, setData] = useState([]);
    const params = useParams();

    useEffect(()=> {
      axios({
        url: `https://reqres.in/api/users/${params.id}`,
        method: "GET"
      })
      .then((res)=>{
        setData(res.data.data)
      })
      .catch((err)=> {})
    },[params.id])
  return (
    <div>
      <div key={data.id}>
        <img src={data.avatar} width="100px" alt={data.email} />
        <div>ID: {data.id}</div>
        <div>Name: {data.first_name}</div>
        <div>Last Name: {data.last_name}</div>
        <div>Email: {data.email}</div>
      </div>
    </div>
  )
}

export default UserPage