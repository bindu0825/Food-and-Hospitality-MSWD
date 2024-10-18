import React from "react";
import { useState } from "react";
import axios from "axios";


import styles from "./styles.module.css";

const Register = () => {
  const [data, setData] = useState({ username: "", email: "", password: "" });

  const handleChange = (e) => {
    
    e.preventDefault();
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    const { username, email, password } = data;
    if (username && email && password) {

      axios
        .post("http://localhost:3001/register", data)
        .then((res) => alert(res.data.message));
      alert("Registered");
    } else {
      alert("INVALID INPUT");
    }
  };

  return (
    <div className={styles.login_container}>
      <div className={styles.login_form_container}>
        <div className={styles.left}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Register Account</h1>
            <input
              type="text"
              placeholder="User Name"
              name="username"
              onChange={handleChange}
              value={data.username}
              required
              className={styles.input}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className={styles.input}
            />
             <button type="submit" className={styles.green_btn} onClick={handleSubmit} >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
