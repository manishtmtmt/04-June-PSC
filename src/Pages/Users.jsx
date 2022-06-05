import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useSearchParams } from "react-router-dom";

const Users = () => {
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(Number(searchParams.get("page")) || 1);
  //const [searchParams, useSearchParams] = useSearchParams();
  useEffect(() => {
      setSearchParams({
          page
      })
    axios({
      url: "https://reqres.in/api/users",
      method: "GET",
      params: {
        page,
      },
    })
      .then((r) => {
        setData(r.data.data);
      })
      .catch((err) => {});
  }, [page,setSearchParams]);

  return (
    <div>
      <div>
        <button disabled={page === 1} onClick={() => setPage(1)}>
          1
        </button>
        <button disabled={page === 2} onClick={() => setPage(2)}>
          2
        </button>
      </div>
      {data.map((item) => (
        <div key={item.id}>
          <img src={item.avatar} alt={item.first_name} />
          <div>Name: {item.first_name}</div>
          <Link to={`/users/${item.id}`}>See More</Link>
        </div>
      ))}
    </div>
  );
};

export default Users;
