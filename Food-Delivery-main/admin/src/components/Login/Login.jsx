import React, { useContext, useEffect, useState } from "react";
import "./Login.css";
import { toast } from "react-toastify";
import axios from "axios";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { admin, setAdmin, token, setToken } = useContext(StoreContext);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/api/user/login", data);
      
      // Jasoosi wali line: Yeh popup karke batayegi backend ne kya bheja
      alert("Backend se yeh data aaya hai: " + JSON.stringify(response.data));

      if (response.data.success) {
        if (response.data.role === "admin") {
          setToken(response.data.token);
          setAdmin(true);
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("admin", true);
          toast.success("Login Successfully");
          navigate("/add");
        } else {
          toast.error("You are not an admin. Role hai: " + response.data.role);
        }
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      alert("Network Error: " + error.message);
    }
  };

  useEffect(() => {
    if (admin && token) {
      navigate("/add");
    }
  }, []);

  return (
    <div className="login-popup">
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>Login</h2>
        </div>
        <div className="login-popup-inputs">
          <input
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder="Your email"
            required
          />
          <input
            name="password"
            onChange={onChangeHandler}
            value={data.password}
            type="password"
            placeholder="Your password"
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;