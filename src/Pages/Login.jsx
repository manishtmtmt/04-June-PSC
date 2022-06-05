import axios from "axios";
import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [state, dispatch] = useContext(AppContext)
  const handleSubmit = (e) => {
      e.preventDefault();
      axios({
          url: "https://reqres.in/api/login",
          method: "POST",
          data: {
              email,
              password
          }
      })
      .then((res)=>{
          alert("success")
          dispatch({
              type: "LOGIN_SUCCESS",
              token: res.data.token
          })
      })
      .catch((err)=>{})
  };
  if(state.isAuth) {
      return <Navigate to="/users" />
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <input
              type="text"
              placeholder="Email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
